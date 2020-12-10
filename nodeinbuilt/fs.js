var fs = require('fs');

//write file //override
/*fs.writeFile('mytext.txt','Ind Vs Aus',function(err){
    if(err) throw err;
    console.log("Task Done")
})  */

//append file
/*
fs.appendFile('mytext.txt','This is from NodeJs \n',function(err){
    if(err) throw err;
    console.log("Append Done")
})*/

//readfile
/*fs.readFile('mytext.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})
*/
//rename
/*
fs.rename('mytext.txt','myfile.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
})*/

fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log("File Deleted")
})