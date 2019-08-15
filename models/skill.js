//Skills models including instance
const skills = [
    {
      name: 'JS',
      description: 'vanilla',
      level: 5,
    },
    {
      name: 'HTML',
      description: 'proficient',
      level: 8,
    },
    {
      name: 'CSS',
      description: 'beginner 🎨',
      level: 3,
    }
  ]

  module.exports = {
      getAll,
      getOne,
      create,
      update,
      remove
  }

  function getAll () {
      return skills;
  }

  function getOne(id) {
      return skills[id - 1];
  }

  function create(skillObj){
      skills.push(skillObj)
  }

  function update(id, skill){
    skills.splice(id - 1, 1, skill);
    
  }
  
  function remove(id){
    skills.splice(id,1)
  }