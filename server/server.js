var express = require('express'),
	app = express();

app.get("/", function(req, res, next) {
	res.sendFile(process.cwd() + "/server/index.html");
});


app.listen(3000, function() {
	console.log('listening on port 3000');
});