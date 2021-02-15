// load Model
const { Actor } = require("../models")

module.exports = {
  index: (req, res) => {
    Actor.findAll()
    .then(result => {
      res.status(200).json({
        status: "success",
        data: result
      })
    })
  },
  show: (req, res) => {
    Actor.findOne({
      where: { id: Number(req.params.id) }
    })
    .then(result => {
      if (result !== null) {
        res.status(200).json({
          status: "success",
          data: result
        })
      } else {
        res.status(200).json({
          status: "success",
          message: "Data not found!",
          data: result
        })
      }
    })
  },
  create: (req, res) => {
    const { first_name, last_name } = req.body
    Actor.create({
      first_name: first_name,
      last_name: last_name
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Create actor success!"
      })
    })
  },
  update: (req, res) => {
    const { first_name, last_name } = req.body
    Actor.update({
      first_name: first_name,
      last_name: last_name
    }, {
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(201).json({
        status: "success",
        message: "Update actor success!"
      })
    })
  },
  delete: (req, res) => {
    Actor.destroy({
      where: { id: Number(req.params.id) }
    })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Delete actor success!"
      })
    })
  }
}