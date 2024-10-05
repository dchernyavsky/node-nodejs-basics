const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .reduce((acc, [key, value]) => {
        if (key.match(/RSS_.*/)) {
          acc.push(`${key}=${value}`);
        }
        return acc;
      }, [])
      .join("; ")
  );
};

parseEnv();
