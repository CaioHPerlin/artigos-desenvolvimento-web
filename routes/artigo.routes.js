const express = require("express");

const artigoRoutes = express.Router();
const artigoController = require("../controllers/artigo.controller");

artigoRoutes.get("/", artigoController.findAll);
artigoRoutes.get("/:titulo", artigoController.findByTitulo);
artigoRoutes.post("/", artigoController.create);
artigoRoutes.put("/:titulo", artigoController.updateByTitulo);
artigoRoutes.delete("/:titulo", artigoController.deleleteByTitulo);

module.exports = artigoRoutes;
