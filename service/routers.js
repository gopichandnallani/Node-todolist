const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/:id", (req, res) => {
  const id = req.params.id
  db.query(`SELECT * FROM todo WHERE id = "${id}"`, (err, rows, fields) => {
      if (!err){
        res.json(rows);
      }
      else
      console.log(err);
    });
});

router.get("/", (req, res) => {
    db.query(`SELECT * FROM todo`, (err, rows, fields) => {
        if (!err){
          res.json(rows);
        }
        else
        console.log(err);
      });
});

// only "started","pending","completed" values are allowed in the state.
router.post("/", (req, res) => {
    const Payload = {
        Task: req.body.Task,
        Description: req.body.Description,
        State: req.body.State
    };
    db.query(`INSERT INTO todo(Task , Description , Date , State) VALUES ("${Payload.Task}", "${Payload.Description}", NOW() , "${Payload.State}");`, (err, rows, fields) => {
        if (!err){
          res.json(rows);
        }
        else
        console.log(err);
    });
});

router.put("/:id", (req, res) =>{
  let id = req.params.id;
  const payload = {
    Task: req.body.Task,
    Description: req.body.Description,
    State: req.body.State
  };
  if (payload.Description != null && payload.Task != null && payload.State != null ) {
    db.query(`UPDATE todo set State = "${payload.State}", Description = "${payload.Description}", Task = "${payload.Task}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.State != null && payload.Description != null) {
    db.query(`UPDATE todo set State = "${payload.State}", Description = "${payload.Description}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.State != null && payload.Task != null) {
    db.query(`UPDATE todo set State = "${payload.State}", Task = "${payload.Task}"  WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.Description != null && payload.Task != null) {
    db.query(`UPDATE todo set Description = "${payload.Description}", Task = "${payload.Task}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.Task != null) {
    db.query(`UPDATE todo set Task = "${payload.Task}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.Description != null) {
    db.query(`UPDATE todo set Description = "${payload.Description}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } else if (payload.State != null) {
    db.query(`UPDATE todo set State = "${payload.State}" WHERE id = "${id}"`, (err, rows) => {
      if (!err) {
        res.json(rows);
      }
      else
      console.log(err)
    })
  } 
})

module.exports = router;

