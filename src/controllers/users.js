// Controller
const model = require('../models/users')

const getAll = (req, res, next) => {
  return model.getAll()
    .then((users) => {
      res.status(200).json(users)
    })
}

//works!
const getOneUser = (req, res, next) => {
  return model.getOneUser(req.params.id)
    .catch(error => {
      return next({
        status: 404,
        message: error
      })
    })
    .then(data => {
      res.status(200).json(data)
    })
}

const create = (req, res, next) => {
  return model.create(req.body)
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new user`,
        errors: errors
      })
    })
    .then(data => {
      res.status(201).json(data)
    })
}

const patch = (req, res, next) => {
  //write these
}

const deleteOne = (req, res, next) => {
  //write these
}

module.exports = { getAll, create, patch, getOneUser, deleteOne }