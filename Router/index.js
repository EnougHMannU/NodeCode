const express = require("express");
const router= express.Router();
const st= require('../controller/student');
const cu= require('../controller/course');
const th= require('../controller/teacher');
const lgr= require('../controller/loginreccord');
const rct=require('../controller/reactapidata');


//student api
router.get('/getsdata',st.getstudentdata);
router.post('/postsdata',st.poststudentdata);
router.put('/putsdata/:name',st.putstudentdata);
router.delete('/deletesdata/:name',st.deletestudentdata);

//teacher api
router.get('/gettdata',th.getteacherdata);
router.post('/posttdata',th.postteacherdata);
router.put('/puttdata/:name',th.putteacherdata);
router.delete('/deletetdata/:name',th.deleteteacherdata);

//course api
router.get('/getcdata',cu.getcoursedata);
router.post('/postcdata',cu.postcoursedata);
router.put('/putcdata/:name',cu.putcoursedata);
router.delete('/deletecdata/:name',cu.deletecoursedata);

//userslogin record api
router.post('/searchlogindata', lgr.searchrecord);
router.get('/getUser', lgr.verifyToken, lgr.getuserdata);

//reactdataapi
router.get('/getreact',rct.getreactdata);
router.post('/postreact',rct.postreactdata);
router.put('/putreact/:username',rct.putreactdata);
router.delete('/deletereact/:username',rct.deletereactdata);

module.exports=router;