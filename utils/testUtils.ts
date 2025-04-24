import * as fs from 'fs';
import * as path from 'path';

// This function is used to clean up old artifacts (like screenshots and videos) from the test results directory.
// It keeps a specified number of the most recent artifacts and deletes the rest.
export function cleanUpOldArtifacts(maxToKeep: number = 20): void {
  const rootDir = path.resolve(__dirname, '..', 'test-results');

  if (!fs.existsSync(rootDir)) return;

  const files: { name: string; time: number }[] = [];

  function collectArtifacts(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        collectArtifacts(fullPath);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith('.webm') || entry.name.endsWith('.png'))
      ) {
        files.push({
          name: fullPath,
          time: fs.statSync(fullPath).mtime.getTime()
        });
      }
    }
  }

  collectArtifacts(rootDir);

  if (files.length <= maxToKeep) return;

  const excess = files.length - maxToKeep;
  const sorted = files.sort((a, b) => a.time - b.time); // Oldest first

  for (let i = 0; i < excess; i++) {
    try {
      fs.unlinkSync(sorted[i].name);
      console.log(`🧹 Deleted old artifact: ${sorted[i].name}`);
    } catch (err) {
      console.error(`❌ Failed to delete: ${sorted[i].name}`, err);
    }
  }
}


// This function cleans up empty test result folders that only contain a `.last-run.json` file.
// It is useful for cleaning up after test runs that leave behind empty folders.
export function cleanUpEmptyTestResultFolders(baseDir = path.resolve(__dirname, '..', 'test-results')) {
  const folders = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;

    const subDir = path.join(baseDir, folder.name);
    const files = fs.readdirSync(subDir);

    if (files.length === 1 && files[0] === '.last-run.json') {
      try {
        fs.rmSync(subDir, { recursive: true, force: true });
        console.log(`🧹 Deleted empty result folder: ${folder.name}`);
      } catch (err) {
        console.error(`❌ Failed to delete ${folder.name}`, err);
      }
    }
  }
}
