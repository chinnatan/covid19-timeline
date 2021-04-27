/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // await execa("git", ["checkout", "--orphan", "master"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "deploy production"]);
    console.log("Pushing to master...");
    await execa("git", ["push", "origin", "HEAD:master", "--force"]);
    // await execa("del", ["-r", folderName]);
    // await execa("git", ["checkout", "-f", "master"]);
    // await execa("git", ["branch", "-D", "master"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();