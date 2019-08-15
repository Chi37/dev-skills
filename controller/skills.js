
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: remove

}


function edit(req,res){

    let  skill = Skill.getOne(req.params.id)
    console.log(req.params.id);
    res.render('skills/edit',{
        skill, 
        skillIdx: req.params.id 
    });
}

function update(req,res) {
    Skill.update(req.params.id, req.body);
    console.log(req.params.id)
    res.redirect('/skills/'); //go back to show page before edit
}

function index (req,res){
    // res.send('some text index page')
    res.render('skills/index', {
        skills: Skill.getAll()
    });
  }

function show (req,res){
    let id = req.params.id
    res.render('skills/show', {
        skill: Skill.getOne(id),
        skillId: id
    });
    // res.send('HEELOOOOOOO')
}

function newSkill(req, res){
    // res.send('CREATE ?HERE');
    res.render('skills/new');
}

function create(req, res){
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills')
}



function remove(req,res){

let id = req.params.id;
console.log(id)
Skill.remove(id);
res.redirect('/skills')
}