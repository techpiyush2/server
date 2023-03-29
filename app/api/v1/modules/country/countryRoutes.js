const Country = require('./controllers/countryController')

module.exports = (router) =>{
    router.post('/country/add',Country.addCountry);
    router.post('/country/update',Country.updateCountry);
    router.post('/country/list',Country.listCountry);
    router.post('/country/detail',Country.countryDetail);
    router.post('/country/changeStatus',Country.changeStatus);
    router.post('/country/delete',Country.delete);
    return router;
}