const { CityRepository } = require('../Repository/index');

class cityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.CityRepository.createcity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
    async deleteCity(){
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
    async updateCity(){
        try {
            const city = await this.cityRespository.updateCity(cityId, data);
            return city;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};             
        }
    }
    async getCity(){
        try {
            const city  = await this.cityRespository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
        
    }
}

module.exports = cityService;