'use strict'

const onCreateSuccess = function (responseData) {
  $('#movies-display').text('Movie successfully created')

  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  // extract the move from the response's data
  // update the div with the id `movies-display` to have html for our movie
  const movie = responseData.movie
  $('#movies-display').html(`
    <div>
      <h3>${movie.title}</h3>
      <p>Directed by: ${movie.director}</p>
      <p>ID: ${movie._id}</p>
    </div>
  `)

  $('form').trigger('reset')
  console.log('onCreateSuccess ran. responseData is :', responseData)
}

const onCreateFailure = function (error) {
  $('#error-message').text('Error on creating movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (responseData) {
  $('#movies-display').text('All Movies successfully received')
  $('#movies-display').removeClass()
  console.log('onIndexSuccess ran. responseData is :', responseData.movies)

  let moviesHtml = ''
  const movies = responseData.movies
  movies.forEach(movie => {
    moviesHtml += `
    <div>
      <h3>${movie.title}</h3>
      <p>Directed by: ${movie.director}</p>
      <p>ID: ${movie._id}</p>
    </div>
  `
  })
  $('#movies-display').html(moviesHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting movies')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (responseData) {
  $('#movies-display').text('One Movie successfully received')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  console.log('onShowSuccess ran. responseData is :', responseData)
  $('form').trigger('reset')

  const movie = responseData.movie
  $('#movies-display').html(`
    <div>
      <h3>${movie.title}</h3>
      <p>Directed by: ${movie.director}</p>
      <p>ID: ${movie._id}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#movies-display').text('Movie successfully deleted')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Movie successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#error-message').text('Error on deleting movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#movies-display').text('Movie successfully updated')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Movie successfully updated')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating movie')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
