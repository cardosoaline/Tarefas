const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController") // require é um import onde se tem que colocar o
//caminho da classe que está acrescentando,é necessário coloca-lo sempre ne uma variavél.

router.get("/", controller.get)// Os Get´s são todos da classe controller.
router.get("/:id", controller.getById)
router.get("/:nome/nome", controller.getNome)
router.get("/:id/concluidas", controller.getConcluido)

module.exports = router
