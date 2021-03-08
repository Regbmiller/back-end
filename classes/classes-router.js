const express = require("express")
const Classes = require("./classes-model")
const router = express.Router()
const jwt = require('jsonwebtoken');
const restrict = require('../auth/restricted-middleware');


//gets all classes
router.get('/classes', restrict(), (req, res) => {
  const {subject: userId} = jwt.decode(req.headers.authorization);
  
  Classes.findClasses(userId)
    .then(classes => {
      res.json(classes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get classes' });
    });
  });

  //gets classes by ID
  router.get('/classes/:id', (req, res) => {
    Classes.getClassById(req.params.id)
      .then((classes) => {
          if (!classes) {
              return res.status(404).json({
                  message: "The class with the specified ID does not exist."
              })
          }
          res.json(classes)
      })
      .catch((error) => {
          console.log(error)
          res.status(500).json({
              error: "The class information could not be retrieved."
          })
      })
  });

       //add class
      router.post("/classes",  restrict(), (req, res) => {
        const {subject: userId} = jwt.decode(req.headers.authorization);
          let {location, price} = req.body;
          location = JSON.stringify(location);
          price = JSON.stringify(price);
      const newClass = {...req.body, "user_id": userId, location, price};
        Classes
          .addClass(newClass)
          .then((classes) => {
            res.status(200).json({ classes });
          })
          .catch((err) => {
            res.status(500).json({ message: "Can't post the class." });
          });
      });
    
   //delete classes by ID
    router.delete("/classes/:id", (req, res) => {
      Classes
        .removeClass(req.params.id)
        .then((classes) => {
          if (classes) {
            res.status(200).json({ classes });
          } else {
            res.status(404).json({ message: "Class with this ID doesn't exist." });
          }
        })
        .catch((err) => {
          res.status(500).json({ message: "Error deleting the recipe." });
        });
    });

    //update class
    router.put("/classes/:id", (req, res) => {
      const {subject: userId} = jwt.decode(req.headers.authorization);
          let {location, price} = req.body;
          location = JSON.stringify(location);
          price = JSON.stringify(price);
      const updatedClass = {...req.body, "user_id": userId, location, price};
        Classes
          .updateClass(req.params.id, updatedClass)
          .then((classes) => {
            if (classes) {
              res.status(200).json({ classes });
            } else {
              res.status(404).json({ message: "Incorrect information provided." });
            }
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "There was an error updating the class." });
          });
      });
    
module.exports = router