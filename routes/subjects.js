var express = require('express');
var router = express.Router();

/* GET subjects listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM subject', function (error, results, fields) {

		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});

});

module.exports = router;
