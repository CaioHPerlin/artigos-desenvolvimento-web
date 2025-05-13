const express = require("express");
const artigoRoutes = require("./routes/artigo.routes");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// Routes
app.use("/artigos", artigoRoutes);

app.listen(PORT, () => {
  console.log(`[INFO] Server running on http://localhost:${PORT}`);
});
