const express = require("express");
const app = express();
const client = require("./client");
app.get("/", async (req, res) => {
  const cacheValued = await client.get("todos");
  if (cacheValued) return res.json(JSON.parse(cacheValued));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);

  return res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
