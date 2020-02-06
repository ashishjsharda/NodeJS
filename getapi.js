const express=require('express')
`
Example of Get Array using Node js
`
const app=express();
const courses=[
    {id:1, name :'course1'},
    {id:1, name :'course1'},
    {id:1, name :'course1'},

];
app.get('/api/courses',(req,res) => {
    res.send(courses)
});

app.listen(3002,() => console.log('Listening'))
