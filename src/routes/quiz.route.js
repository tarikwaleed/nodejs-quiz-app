const express = require('express');
const router = express.Router();
const quizController=require('../controllers/quiz.controller'); 

router.get('/',quizController.get_all_quizes)
module.exports = router;