function Authenticate(username, password) {
    console.log("Authentication is called.")
    console.log(username)
    console.log(password)

    fetch("https://localhost:7085/API/risks")
    .then(response => {
        return response.json()
      })
      .then(data => {
        return(data)
      })
}

export default Authenticate;