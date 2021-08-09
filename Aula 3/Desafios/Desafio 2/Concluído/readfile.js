var fs     = require('fs'),
    xmldoc = require('xmldoc');

module.exports = function(file){
	var xmlfile = fs.readFileSync(file);
	//console.log(xmlfile.toString())
	var xml = new xmldoc.XmlDocument(xmlfile);
	return xml;
}