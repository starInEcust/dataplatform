
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var getdata = require('./models/getdatedata');
var fs = require('fs');
var app = express();
// all environments
app.set('port', process.env.PORT || 8099);
app.set('views', path.join(__dirname, 'app'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', function(req,res){
	res.sendfile('app/appindex.html');
});

//app.post('/vali', function(req,res){
//	var id = req.body.ID;
//	var password = req.body.password;
//	if(id == 'susan.li' && password == 'tp9678'){
//		res.render('appindex.html',function(err,html){
//			res.writeHead(200, {'Content-Type': 'text/html'});
//			res.end(html);
//
//		});
//	}
//});
app.get('/users', user.list);
app.get('/liveness',getdata.getlivenessdata);
app.get('/shopSale',getdata.getshopSaledata);
app.get('/saleDetail',getdata.getsaleDetaildata);
app.post('/goodsDetail',getdata.getgoodsDetaildata);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
