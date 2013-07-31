REweb

TODO: make it user friendly.  This is definently not ready for big use.

REweb was written to work with the PIface web interface, by providing a way to push new html and code straight to the page.

REweb for node requires socket.io and express.

REweb for client requires jquery

To use:
  On Node
  var reweb = require('reweb').run(io,app);//io is the socket.io object and app is the express 3.0 object
  
  reweb.html(tag,html)//tag is the tag under which to insert html
  
  reweb.javascript(js)//js is a string of executible javascript
  
  reweb.css(css)//css is a string of css rules
  
  On Client
  insert "var socket = io.connect('');" in a script tag just before including /reweb.js
  
GitHub: github.com/blister75/reweb.git
