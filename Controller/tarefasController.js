const tarefas = require("../model/tarefas.json") // require é tipo um import da classe modelo

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}

exports.getName = (req, res) => {
  const nome1 = req.params.nome
  const tarefas = tarefas.filter(tarefa => tarefas.nomeColaborador== nome1)
      res.status(200).send(retorno)
  }



exports.getConcluido = (req, res) => {
const concluidas = tarefas.filter(tarefa => tarefa.concluido == "true")
const Tarefasok = concluidas.map(tarefa => tarefa.nomeColaborador)
res.status(200).send(Tarefasok)
}
