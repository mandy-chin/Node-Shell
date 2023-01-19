module.exports = function () {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "pwd") {
      const pwd = process.cwd().trim();
      process.stdout.write(pwd);
      process.stdout.write("\nprompt > ");
    } else {
      process.stdout.write("prompt > ");
    }
  });
};
