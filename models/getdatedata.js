/**
 * Created by Star on 2014/4/17 0017.
 */
module.exports = {
	'getlivenessdata': function (req, response) {
		var objdate = new Date();
		var
		var yesterdayData = 2800000 + objdate.getTime()
		var json = {
			'todayData': 123123,
			'todayPrecent': '10%',
			'yesterdayData': 657657,
			'yesterdayPrecent': '20%'
		};
		console.log(json);

		response.send(json);

	},
	'getshopSaledata': function (req, response) {
		var json = [
			{
				'date': '1991-12-27',
				'saleroom': '10%',
				'salenum': '1232133'
			},
			{
				'date': '2014-12-27',
				'saleroom': '20%',
				'salenum': '12332133'
			}
		];
		console.log(json);

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
