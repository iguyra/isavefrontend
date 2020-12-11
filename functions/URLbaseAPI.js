let BASE_URL = "http://localhost:3080"

    if (process.env === "development") {
        BASE_URL = BASE_URL
}
if (process.env === "production") {
        BASE_URL = "https://iguyra.herokuapp.com"
    }

 
export default BASE_URL;