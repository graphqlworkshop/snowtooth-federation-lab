const trailRatings = [
  {
    level: "beginner",
    groomed: true
  },
  {
    level: "beginner",
    groomed: false
  },
  {
    level: "intermediate",
    groomed: true
  },
  {
    level: "advanced",
    groomed: true
  },
  {
    level: "intermediate",
    groomed: false
  },
  {
    level: "expert",
    groomed: true
  },
  {
    level: "advanced"
  },
  {
    level: "expert"
  }
];

module.exports = function findEasiestTrail(trails) {
  return trailRatings.reduce(
    (prev, next) =>
      prev
        ? prev
        : trails.find(
            trail =>
              trail.difficulty === next.level && trail.groomed === next.groomed
          ),
    null
  );
};
