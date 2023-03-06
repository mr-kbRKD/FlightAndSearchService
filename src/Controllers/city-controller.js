const {CityService} = require('../Services/index');
const cityService = new CityService();

const create = async (req, res) =>{
    
    try {
        const city = await cityService.createcity(req.body);
        return res.status(201).json({
            data:city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        });
    }
}
const destroy = async (req, res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        });
    }
    
}
const get = async (req, res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success : true,
            message : 'Successfully fetched the city',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able get the city",
            err : error
        });
    }
    
}
const update = async (req, res) =>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:response,
            success : true,
            message : 'Successfully update the city',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        });
    }

}

module.exports={
    create,
    destroy,get,update
}