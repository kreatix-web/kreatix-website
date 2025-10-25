/**
 * Stylelint configuration with Tailwind CSS support.
 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
  ],
  rules: {
    // Allow Tailwind and related at-rules
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
        ],
      },
    ],
  },
};
