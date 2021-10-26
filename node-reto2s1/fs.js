const fs = require ('fs')

fs.writeFile('data.txt','JavMA',(error)=> {
  if (error) {
    console.log('Error:${error}');
  }
});