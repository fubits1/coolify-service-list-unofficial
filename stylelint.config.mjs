/** @type {import('stylelint').Config} */
export default {
  // stylelint-config-html only sets the postcss-html syntax for .astro; rules come from recommended
  extends: ["stylelint-config-recommended", "stylelint-config-html/astro"],
};
