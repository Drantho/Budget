const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.get("/api/:msg", (req, res) => {
  res.json({msg: "hello, " + req.params.msg})
})


router.post("/api/transaction", ({body}, res) => {
  res.json({msg: "nothing works!!!!!!!!!"})
  // Transaction.create(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(404).json(err);
  //   });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;