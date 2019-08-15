const express = require('express');
const router = express.Router();
const skillsController = require('../controller/skills.js')

//Routes go here
module.exports = router;

//Router 
//index route display all skills. get two args path name and callback
//we make request /skills and res checks inside router to see if we hadneld req bc path and verb matches, req sent back
router.get('/', skillsController.index);
router.get('/new', skillsController.new); //create new skill
router.get('/:id', skillsController.show); // get one skill

router.get('/:id/edit', skillsController.edit); // get one skill
router.post('/', skillsController.create);
router.put('/:id', skillsController.update);
router.delete('/:id', skillsController.delete);