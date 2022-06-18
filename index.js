// Add your code here
//sending data
function submitData( name, email){
return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email,
    } )
  } )
  //response

.then( function ( response ) {
      return response.json()
    } )
    //accessing the new object
.then( function ( object ) {
document.body.innerHTML = object[ "id" ]
    } )
    //handling errors
.catch( function ( error ) {
document.body.innerHTML = error.message
} )

}

