

module.exports = (express) =>{
    const router = express.Router()
    require("./modules/country/countryRoutes")(router)
    // require("")(router)
    return router;
};