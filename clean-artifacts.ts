// This is a Playwright script to clean up old artifacts in the test-results directory.
// It deletes old video and screenshot files, keeping only the most recent ones.
import { cleanUpOldArtifacts, cleanUpEmptyTestResultFolders } from './utils/testUtils';

cleanUpOldArtifacts(20); // Adjust the number if needed
cleanUpEmptyTestResultFolders(); // Deletes folders with only .last-run.json


/* 
Run it from the terminal using:
npm run clean:artifacts

 */
