var fs = require('fs');
var webpage = require('webpage').create();
var path = "output.html";


webpage.open('http://www.valueplusexchange.com/', function() {
    
    console.log(webpage.content);       
    fs.write(path, webpage.content, 'w');
    phantom.exit();

});
