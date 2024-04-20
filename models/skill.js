const skills = [
  {
    id: 1,
    skill: "Centering a Div",
    exp: 25,
    study: "YouTube",
    studyYears: 12,
  },
  { id: 2, skill: "HTML", exp: 2, study: "GA", studyYears: 1 },
  { id: 3, skill: "CSS", exp: 52, study: "GA", studyYears: 3 },
  { id: 4, skill: "JavaScript", exp: 15, study: "GA", studyYears: 4 },
  {
    id: 5,
    skill: "Express Frameworks (still pending)",
    exp: 3,
    study: "GA",
    studyYears: 2,
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
