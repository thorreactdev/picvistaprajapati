
require("dotenv").config();
const apiKey = process.env.apiKey;

const FreepikPSD = async(req,res) => {
    const { query } = req.query;
    
    try {
        const response = await fetch(`https://api.freepik.com/v1/resources?locale=en-US&page=1&limit=30&order=latest&term=${query}&filters[content_type][psd]=1&filters[orientation][portrait]=1&order=latest`,{
            headers: {
                'Accept-Language': 'en-US',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Freepik-API-Key': apiKey
              },
        });
        if(!response.ok){
            throw new Error('Error fetching data from Freepik API');
        }

        const data = await response.json();
        res.json(data);   
    } catch (error) {
        console.error('Error handling search query:', error);
        res.status(500).json({ error: 'An error occurred while processing the search query' });  
    }

};

const SinglePSDPhotos = async(req,res) =>{
    const { id } = req.query;
   
    try {
        const response = await fetch(`https://api.freepik.com/v1/resources/${id}`,{
            headers: {
                'Accept-Language': 'en-US',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Freepik-API-Key': apiKey
              },
        });
        if (!response.ok) {
            throw new Error('Error fetching data from Freepik API');
        }
        const data = await response.json(); 
        res.json(data);
        
    } catch (error) {
        console.error('Error handling search query:', error);
        res.status(500).json({ error: 'An error occurred while processing the search query' });    
    }
};

module.exports = { FreepikPSD,SinglePSDPhotos };
