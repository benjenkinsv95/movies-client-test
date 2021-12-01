'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateMovie = function (event) {
  event.preventDefault()
  console.log('onCreateMovie ran!')

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexMovies = function (event) {
  event.preventDefault()
  console.log('onIndexMovies ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowMovie = function (event) {
  event.preventDefault()
  console.log('onShowMovie ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.movie.id

  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onDeleteMovie = function (event) {
  event.preventDefault()
  console.log('onDeleteMovie ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.movie.id

  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  console.log('onUpdateMovie ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.movie.id

  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const addHandlers = () => {
  $('#movies-create').on('submit', onCreateMovie)
  $('#movies-index').on('submit', onIndexMovies)
  $('#movies-show').on('submit', onShowMovie)
  $('#movies-delete').on('submit', onDeleteMovie)
  $('#movies-update').on('submit', onUpdateMovie)
}

module.exports = {
  addHandlers
}
