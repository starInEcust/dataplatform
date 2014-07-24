/**
 * Created by Star on 2014/4/17 0017.
 */
function randomNum(min,max){
	return	Math.ceil(min+Math.random()*(max-min));
}

var livenessdata = {

};
var json=[];
var timeDiff= 0;


module.exports = {
//	'day': 20, 无法使用？

	'getlivenessdata': function (req, response) {
		var self = this;
		var objdate = new Date();
		var myTimeDiff = (Math.floor(objdate.getTime()/86400000)-Date.UTC(2014,5,22)/86400000);
		if(myTimeDiff != timeDiff){
			timeDiff = myTimeDiff;
			livenessdata.yesterdayActive = 2800000 + timeDiff*randomNum(15000,8000);
			livenessdata.yesterdayData = randomNum(25000,40000);
//			livenessdata.todayPrecent = randomNum(-100,300)/100+'%';
			livenessdata.todayPrecent = (Math.floor(Math.random()*400)-100)/100+'%';
			livenessdata.yesterdayPrecent =(Math.floor(Math.random()*400)-100)/100+'%';
		}


//		livenessdata.todayPrecent - livenessdata.yesterdayData
		console.log(livenessdata);


//		console.log(json);

		response.send(livenessdata);

	},
	'getshopSaledata': function (req, response) {
		var objdate = new Date();
		
/* 		
		var json = [
			{
				'date':  objdate.getFullYear() + '-' + '0' + (objdate.getMonth() + 1) + '-' + (objdate.getDate() - 1),
				'saleroom': randomNum(350.00,550.00),
				'salenum': '-'
			},
			{
				'date': objdate.getFullYear() + '-' + '0' + (objdate.getMonth() + 1) + '-' + (objdate.getDate() - 1),
				'saleroom': randomNum(350.00,550.00),
				'salenum': '-'
			}
		]; 
*/
		var myTimeDiff = (Math.floor(objdate.getTime()/86400000)-Date.UTC(2014,4,1)/86400000);
		if(myTimeDiff != timeDiff){
			timeDiff = myTimeDiff;
			for (var i = 0; i < myTimeDiff; i++){
				var loopdate=new Date();
				loopdate.setDate(objdate.getDate()-(timeDiff-i));
				if(json[i] == undefined){
					var year = loopdate.getFullYear();
					var month = loopdate.getMonth() + 1;
					var day = loopdate.getDate();
					if(loopdate.getMonth() < 10){
						month = '0' + (loopdate.getMonth() + 1);
					}
					if(loopdate.getDate() < 10){
						day = '0' + loopdate.getDate();
					}
					json[i]={
						'date':year + '-' + month + '-' + day,
						'saleroom': randomNum(35000,55000)/100,
						'salenum': '-'
					};
					console.log('undefined');
				}

			}
			json.reverse();

		}
		response.send(json);

	},
	'getsaleDetaildata': function (req, response) {
		var json =  [
			{
				'name': '啊啊啊啊啊',
				'yesterdaySale': '23123',
				'yesterdayNum': '1232133'
			},
			{
				'name': '啊啊啊啊w啊',
				'yesterdaySale': '2w3123',
				'yesterdayNum': '12w32133'
			}
		];
		console.log(json);

		response.send(json);

	},
	"getgoodsDetaildata":function (req, response) {
		var goodsname = req.body.goodsname;
//		var json =  [
//			{
//				'name': '啊啊啊啊啊',
//				'yesterdaySale': '23123',
//				'yesterdayNum': '1232133'
//			},
//			{
//				'name': '啊啊啊啊w啊',
//				'yesterdaySale': '2w3123',
//				'yesterdayNum': '12w32133'
//			}
//		];
		console.log(goodsname);

//		response.send(json);

	}

};
