/**
* @fbielejec
*/

global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
