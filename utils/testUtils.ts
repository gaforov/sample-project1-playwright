import * as fs from 'fs';
import * as path from 'path';

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
