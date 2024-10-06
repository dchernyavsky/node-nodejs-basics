import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = await fork(
    `${import.meta.dirname}/files/script.js`,
    args
  );

  process.stdin.on("data", (input) => {
    childProcess.send(input);
  });

  childProcess.stdout?.pipe(process.stdout);
};

spawnChildProcess(/* ["someArgument1", "someArgument2"] */);
