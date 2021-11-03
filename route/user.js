// USER ROUTES HANDLER
//=================================================
const express = require("express");
const mongoose = require("mongoose");
const UserInfo = require("../models/user");
const router = express.Router();

//CREATE A NEW USER
router.post("/new-user", (req, res) => {
  const User = new UserInfo({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });
  User.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// TO READ A USER
router.get("/:username", (req, res) => {
  UserInfo.findOne({ username: req.params.username })
    .then((result) => {
      //   res.status(200).json({
      //     result: result,
      //   });

      res.send(result);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({
        error: err,
      });
    });
});

// TO UPDATE A USER
router.put("/:username", (req, res) => {
  UserInfo.findOneAndUpdate(
    { username: req.params.username },
    {
      $set: {
        name: req.body.name,
        username: req.body.username,
        // password will not be updated
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated_user: result,
      });
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({
        error: err,
      });
    });
});

// DELETE A USER
router.delete("/:username", (req, res) => {
  MovieInfo.deleteOne({ username: req.params.username })
    .then((result) => {
      res.status(200).json({
        message: "user removed",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error",
        error: err,
      });
    });
});

module.exports = router;
