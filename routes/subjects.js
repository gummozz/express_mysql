var express = require('express');
var router = express.Router();
const cache = require("../cache.js");
/* GET subjects listing. */
router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * FROM subject', function (error, results, fields) {

		if (error){ 
			res.send(JSON.stringify({"status": 500, "error": null, "respondingNode": res.locals.localhostname,"response": null}));
		}
		else {
			res.json({"status": 200, "error": null, "respondingNode": res.locals.localhostname,"response": results});	
		}
	});

});

module.exports = router;
