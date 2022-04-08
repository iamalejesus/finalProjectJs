function request(){
    fetch ("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        return response.json
    })
    .then(function(response) {
        console.log(response)
    })
}