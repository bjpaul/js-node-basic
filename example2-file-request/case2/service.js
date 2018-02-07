const fs = require('fs');
const url = require('url');

const fileLocationFinder = function(filename){
   return "static/"+filename+".htm";
}

exports.render = function(req, res){
  var URL = req.url;
  var q = url.parse(URL, true);
  var filename =  q.pathname;
  var fileLocation = fileLocationFinder(filename)
  fs.readFile(fileLocation, function(err, data) {
    res.setHeader('Content-Type', 'text/html');
      if (err) {
          res.statusCode = 404;
          return res.end("404 Not Found");
      }else{
          res.statusCode = 200;
          res.write(data);
          return res.end();
      }
  });
};
