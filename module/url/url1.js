


var url = require('url');

var myURL = "https://www.facebook.com/home.php?_rdc=1&_rdr";

// parsing the myURL to url and it will return an object
var theReturnedUrl = url.parse(myURL, true);

// for host, pathname & search
console.log(theReturnedUrl.host); // www.facebook.com
console.log(theReturnedUrl.pathname); // 
console.log(theReturnedUrl.search); // 