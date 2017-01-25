var path = require('path');
var express = require('express');

const PORT = process.env.port || 3000
var app = express();

if(process.env.NODE_ENV !== 'production') {
	var webpack = require('webpack');
	var config = require('./webpack.config.dev');
	var compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));
} else {
	app.use('/static', express.static(path.join(__dirname, 'dist')));
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
