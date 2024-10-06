const parseArgs = () => {
  const args = [];
  for (let i = 0; i < process.argv.length; i += 2) {
    if (process.argv[i].match(/--.*/)) {
      args.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
    }
  }
  console.log(args.join(", "));
};

parseArgs();
