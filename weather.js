const { response } = require('express')
const request=require('request')
const url='http://api.weatherstack.com/current?access_key="API KEY"&%20query=New%20York'
request({url:url},(error,response) =>{
    console.log(response.statusCode);
    console.log(response);
})
