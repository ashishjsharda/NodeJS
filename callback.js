/**
 * Using Callback Function
 */
const fs=require('fs');
fs.readdir('/',function(err,files)
{
    if(err)
    {
        console.log('Error',err);
    }
    else{
        console.log('Result',files);
    }
});
