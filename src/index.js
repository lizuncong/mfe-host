import("container/public-path").then((res) => {
  console.log("res...", res);
  res.set("/your-public-path");
  import("./bootstrap");
});
