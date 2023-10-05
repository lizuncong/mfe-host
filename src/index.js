import("container/public-path").then((res) => {
  console.log("res...", res);
  res.set("http://localhost:8081/");
  import("./bootstrap");
});
