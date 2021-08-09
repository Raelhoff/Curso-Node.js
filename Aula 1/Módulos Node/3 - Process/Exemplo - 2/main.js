// Printing to console
process.stdout.write("Hello World!" + "\n");
// Reading passed parameter
process.argv.forEach(function(val, index) {
console.log(index + ': ' + val);
});
// Getting executable path
console.log(process.execPath);
// Platform Information
console.log(process.platform);

console.log("\n\n");
var options = process.argv.slice(2);
if (options.length < 1) {
	return;
}
console.log(options)