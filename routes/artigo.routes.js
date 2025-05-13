const express = require("express");

const artigoRoutes = express.Router();
const artigoController = require("../controllers/artigo.controller");

artigoRoutes.get("/", artigoController.findAll);
artigoRoutes.get("/:titulo", artigoController.findByTitle);
artigoRoutes.post("/", artigoController.create);
artigoRoutes.put("/:titulo", artigoController.updateByTitle);
artigoRoutes.delete("/:titulo", artigoController.deleleteByTitle);

module.exports = artigoRoutes;
