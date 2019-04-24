const router = require('express').Router();
const service = require('../controller/service')
function appendHeader(res) {
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('Content-Security-Policy', "script-src 'self'");
  }
router.get('/Time/GetTime',(req,res,next)=>{

  let functionName = '[API: get /api/v1/idf/Time/GetTime]';
  new service().getTime().then((result) => {
    res.status(201);
    appendHeader(res)
    console.log(result.message)
    res.json(result.message);
  })
    .catch((error) => {
      res.status(error.status);
      res.json({
        code: error.status,
        message: `Failed  to get time: ${error}`
      });
    });

})

router.get('/Number/GetRandomNumber',(req,res,next)=>{

    let functionName = '[API: get /api/v1/Number/GetRandomNumber]';
    new service().getRandomNumber().then((result) => {
      res.status(201);
      appendHeader(res)
      console.log(result.message)

      res.json(result);
    })
      .catch((error) => {
        res.status(error.status);
        res.json({
          code: error.status,
          message: `Failed  to get time: ${error}`
        });
      });
  
  })
  module.exports = router;