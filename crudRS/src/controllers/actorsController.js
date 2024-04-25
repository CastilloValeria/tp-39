const db = require("../database/models");
const movie = require("../database/models/Actor");
const {Op}=db.Sequelize

module.exports  = {
list: (req,res) => {
    db.Actor.findAll({
      order: [["first_name"]]
    })
    .then((actors) => {
        res.render("actorList",{actors})
    })
    .catch(err => {
        console.log(err)
        res.send("Se detectó un error")
        
    })

},
detail: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then(function (actor) {
        res.render("actorsDetail", { actor });
      })
      .catch((err) => {
        console.log(err);
        res.send("Se detectó un error en el detalle");
      });

},
add:  (req, res) => {
  db.Actor.findAll()
  .then(actor=>{
      res.render('actorAdd',{actor});
    
  })
  .catch((err) => {
    res.send(err.message)
  }) 
  },
  create: (req, res) => {
  db.Actor.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    rating: req.body.rating,
  })
  
  .then(actors=>{
    res.redirect('/actors');
    
  })
  .catch((err) => {
    res.send(err.message)
  }) 
  console.log("esto traer req body name----.-----",req.body)
  }
  
}