const express = require("express");
const router = express.Router();

const movies = [
  { id: 1, title: "Stranger Things", genre: "Sci-Fi" },
  { id: 2, title: "Money Heist", genre: "Thriller" },
  { id: 3, title: "Wednesday", genre: "Mystery" }
];

router.get("/movies", (req, res) => res.json(movies));
router.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send("Movie not found");
  res.json(movie);
});

module.exports = router;

