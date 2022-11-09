var express = require("express");
var router = express.Router();
var UserService = require("../data/UserService");

router.get("/", async function (req, res, next) {
  return res.send(await UserService.getPersons());
});

router.get("/:id", async function (req, res, next) {
  return res.send(await UserService.getPerson(req.params.id));
});

router.put("/:id", async function (req, res, next) {
  var user = {
    navn: req.body.navn,
    klasse: req.body.klasse,
    alder: req.body.alder
  }
  return res.send(await UserService.updatePerson(req.params.id, user));
});

router.post("/", async function (req, res, next) {
  var user = {
    navn: req.body.navn,
    klasse: req.body.klasse,
    alder: req.body.alder
  }
  return res.send(await UserService.createPerson(user));
});

router.delete("/:id", async function (req, res, next) {
  return res.send(await UserService.deletePerson(req.params.id));
});

module.exports = router;
