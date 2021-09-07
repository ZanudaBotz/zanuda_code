let http = require('http');
let exp = require('express');
let path = require('path');
let app = exp();
let server = http.createServer(app);
const fs = require("fs");
app.use(exp.static(__dirname+'/sp_For_gulp'));
app.use(exp.json())

let new_docs_saved = [

]



app.post('/docs', function(req, res) {
    console.log(req.body)  
    let dataArr = {
        text: req.body.text,
        name: req.body.file_name
    }
    fs.appendFile(dataArr.name + ".txt", dataArr.text, function(error){
        if(error) throw error; 
        console.log("Запись файла завершена.");
        
    });
    new_docs_saved.push(dataArr)
    console.log('Ниже ответ с сервера...')
    console.log(new_docs_saved)
 });




 app.post('/saved_docs', function(req, res) {
    console.log(req.body)  
    let dataArr = {
       finded_file: req.body.finded_file_name,
    }
    fs.readFile(dataArr.finded_file + '.txt', 'utf8', (err, data) => {
        if(err) throw err;
        res.send(data);
    });
 });


 
 app.post('/red_docs', function(req, res) {
    console.log(req.body)  
    let dataArr = {
        text: req.body.text,
        finded_file: req.body.finded_file_name,
    }
    fs.writeFile(dataArr.finded_file + ".txt", dataArr.text, function(error){
        if(error) throw error; 
        console.log("Запись файла завершена.");
        
    });
    new_docs_saved.push(dataArr)
    console.log('Ниже ответ с сервера...')
    console.log(new_docs_saved)
 });



server.listen(8080, function(){
    console.log("Server running...")
})
