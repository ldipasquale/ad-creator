export default {
  linear: (from, to) => `linear-gradient(0, ${to}, ${from})`,
  radial: (from, to) => `radial-gradient(circle at center, ${to}, ${from})`,
}
