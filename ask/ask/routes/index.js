var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //传入数据,渲染index视图
  res.render('register.html', { title: 'Express' });
});



module.exports = router;
