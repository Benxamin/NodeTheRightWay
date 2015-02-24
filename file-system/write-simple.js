const fs = require('fs');

fs.writeFile('write-target.txt', 'Please enjoy these witty messages.\n--Ben\n', function(err) {
	if (err) throw err;
	console.log('Data written!');
});