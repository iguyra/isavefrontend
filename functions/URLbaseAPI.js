let BASE_URL = "http://localhost:3080"

    if (process.env_NODE_ENV === "development") {
        BASE_URL = BASE_URL
}
if (process.env.NODE_ENV === "production") {
        BASE_URL = "https://iguyra.herokuapp.com"
    }

 
export default BASE_URL;