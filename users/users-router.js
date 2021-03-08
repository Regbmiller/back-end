const express = require("express")
const Users = require("./users-model")
const router = express.Router()

//gets all users
router.get('/users', (req, res) => {
    Users.findUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

  //gets users by ID
  router.get('/users/:id', (req, res) => {
    Users.findUserByID(req.params.id)
      .then((users) => {
          if (!users) {
              return res.status(404).json({
                  message: "The user with the specified ID does not exist."
              })
          }
          res.json(users)
      })
      .catch((error) => {
          console.log(error)
          res.status(500).json({
              error: "The user information could not be retrieved."
          })
      })
  
  });

  //add users
  router.post("/users", (req, res) => {
    Users
      .addUser(req.body)
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch((err) => {
        res.status(500).json({ message: "Can't post the user." });
      });
  });

//delete user by ID
router.delete("/users/:id", (req, res) => {
  Users
    .removeUser(req.params.id)
    .then((users) => {
      if (users) {
        res.status(200).json({ users });
      } else {
        res.status(404).json({ message: "User with this ID doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the user." });
    });
});
    //update Users
    router.put("/users/:id", (req, res) => {
      Users
        .updateUser(req.params.id, req.body)
        .then((users) => {
          if (users) {
            res.status(200).json({ users });
          } else {
            res.status(404).json({ message: "Incorrect information provided." });
          }
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: "There was an error updating the user." });
        });
    });


module.exports = router