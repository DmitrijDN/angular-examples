var path = require('path'),
	express = require('express'),
	app = express(),
	staticPath = path.normalize(__dirname),
	server = app.listen(3055);

app.use(express.static(staticPath));

module.exports = app;