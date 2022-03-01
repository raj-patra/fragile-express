const HOST = process.env.HOST || "http://localhost"
const axios = require("axios");

module.exports = {
    fetch_response: async function (url) {
        try{
            let data = await axios.get(url);
            if (data.status == 200){
                return {
                    message: "Data fetch successful.", 
                    data: data.data, 
                    reference_api: data.config.url,
                    root: HOST
                }
            }
            else{
                return {
                    message: "Data fetch unsuccessful.", 
                    data: null, 
                    reference_api: data.config.url,
                    root: HOST
                }
            }
        }
        catch (error){
            console.error(error);
            return {
                message: "Data fetch unsuccessful.", 
                data: null, 
                reference_api: url,
                root: HOST
            }
        }
    },

    random_choice: function (arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
}
