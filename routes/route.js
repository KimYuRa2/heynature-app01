const express=require('express');
const router = express.Router(); 
// 20220513 express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
const {check, validationResult} = require('express-validator');

/* db.js 파일 연결 */
const db = require('../db');


router.use(expressLayouts);



//route, routing 
router.get('/',(req, res) =>{
   res.render('main');
});

/* notice */
router.get('/cscenter',(req, res,next) =>{
    db.getAllNotice((rows) => {
        res.render('cscenter',{ rows : rows }); 
    })
});

router.get('/newNotice', (req,res,next) => {
    res.render('newNotice');
})

router.post('/store',
 //[check('content').isLength({min:1, max:3000})],
 function(req,res,next){
    //let errs = validationResult(req);
    
    // if(errs['errors'].length > 0){ //에러가 있다면, 화면에 에러 출력하기
    //     res.render('newNotice',{errs : errs['errors']});
    // }else{ //에러 없으면 실행
        let param = JSON.parse(JSON.stringify(req.body));
        let content = param['content'];
        let title = param['title'];
        
        db.insertNotice(title,content, () => { //
            console.log("submit");
            res.redirect('/cscenter');
        })
    // }
});

// router.get('/layout', (req,res,next) => {
//     db.getAllNotice((rows) => {
//         res.render('layout',{ rows : rows }); 
//     })
// })





router.get('/detail',(req, res) =>{
    res.render('detail')
});
router.get('/event',(req, res) =>{
    res.render('event')
});
router.get('/find',(req, res) =>{
    res.render('find')
});
router.get('/intro',(req, res) =>{
    res.render('intro')
});
router.get('/join',(req, res) =>{
    res.render('join')
});
router.get('/login',(req, res) =>{
    res.render('login')
});
router.get('/product',(req, res) =>{
    res.render('product')
});

module.exports = router
//내보내기