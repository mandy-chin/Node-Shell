module.exports = function () {
  process.stdout.write("prompt >");
  const fs = require("fs");

  process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    } else {
      process.stdout.write("prompt > ");
    }
  });
};
