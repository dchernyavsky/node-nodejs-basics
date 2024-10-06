import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const results = await Promise.all(
    os.cpus().map(
      (_, index) =>
        new Promise((resolve) => {
          const worker = new Worker(`${import.meta.dirname}/worker.js`, {
            workerData: index + 10,
          });
          worker.on("message", (data) => {
            resolve(data);
            worker.terminate();
          });
        })
    )
  );
  console.log(results);
};

await performCalculations();
