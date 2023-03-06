const {City} = require('../models/index');

class CityRepository{
   
    // constructor()

    async createcity({ name }) // {name : "Ambala Cantt"}
     {
        try{
            const city = await City.create({
                name
            });
            return city;
        } catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async deletecity(cityId) {
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async updatecity(cityId, data) {
        try {
            const city = await City.update(data, {
                where:{
                id : cityId
            }
        });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async getcity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = CityRepository;