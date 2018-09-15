var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','content-type')
  res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS')
  next()
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp',(req,res)=>{
  res.jsonp({
    data:'一些信息',
    msg:'吃饭睡觉打游戏',
    code:200
  })
})
router.get('/getJson',(req,res)=>{
  res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({
    data:'一些信息',
    msg:'吃饭睡觉打游戏',
    code:200
  })
})
// router.options('/noSimple',(req,res)=>{
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIOND')
//   res.send()
// })
router.post('/noSimple',(req,res)=>{
  res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({
    data:'一些信息',
    msg:'吃饭睡觉打游戏',
    code:200
  })
})
module.exports = router;
 