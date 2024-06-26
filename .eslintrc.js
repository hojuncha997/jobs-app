module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
    "import/no-cycle": "error",
  },
};
