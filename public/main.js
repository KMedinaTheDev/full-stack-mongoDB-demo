
console.log("I'm the force")
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes',{
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
  'name': 'Darth Vader',
  'quote': 'I find your lack of faith disturbing.'
  })
})
  // .then(res => {
  //   if (res.ok) return res.json()
  // })
  // .then(data => {
  //   console.log(data)
  //   window.location.reload()
  // })
 })



del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload()
  })
})
// use the ok method on the response object. You can then return res.json() if you want to read the data that was sent from the server
//If you are working on a fancy webapp, this is the part where you use JavaScript to update the DOM so users can see the new changes immediately. Updating the DOM is out of the scope of this article, so we’re just going to refresh the browser to see the changes.
