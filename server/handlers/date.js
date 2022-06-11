const dateModel = require("../../storage/models/Date")



const isweekend = async (req, res) => {
  
        const result = await dateModel.isweekend();
        res.json({
            data: result,
            error: null
        });

};

const leapYear = async (req, res) => {
 
        const result = await dateModel.leapYear();
        res.json({
            data: result,
            error: null
        });
  
};


module.exports = {
    isweekend,
    leapYear
};