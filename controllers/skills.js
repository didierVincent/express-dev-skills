const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "My Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skill.getOne(req.params.id),
    title: "Skill Details",
  });
}

module.exports = {
  index,
  show,
};
