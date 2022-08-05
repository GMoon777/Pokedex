/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [ "./src/**/*.{html,jsx,tsx}" ],
  theme: {
    extend: {

    }
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ]
};

/**
 * Can ignore the next part, just some setup for our own plugin to add more
 * variants, specifically `not-*` selectors; i.e. `not-hover:*`
 */

/**
@see https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
Filtered out the selectors not compatible with the pseudo-selector `:not(...)`
*/

const notSelectors = [
  [ "hover", ":hover" ],
  [ "focus", ":focus" ],
  [ "focus-within", ":focus-within" ],
  [ "focus-visible", ":focus-visible" ],
  [ "active", ":active" ],
  [ "visited", ":visited" ],
  [ "target", ":target" ],
  [ "first", ":first-child" ],
  [ "last", ":last-child" ],
  [ "only", ":only-child" ],
  [ "odd", ":nth-child(odd)" ],
  [ "even", ":nth-child(even)" ],
  [ "first-of-type", ":first-of-type" ],
  [ "last-of-type", ":last-of-type" ],
  [ "only-of-type", ":only-of-type" ],
  [ "empty", ":empty" ],
  [ "disabled", ":disabled" ],
  [ "checked", ":checked" ],
  [ "indeterminate", ":indeterminate" ],
  [ "default", ":default" ],
  [ "required", ":required" ],
  [ "valid", ":valid" ],
  [ "invalid", ":invalid" ],
  [ "in-range", ":in-range" ],
  [ "out-of-range", ":out-of-range" ],
  [ "placeholder-shown", ":placeholder-shown" ],
  [ "autofill", ":autofill" ],
  [ "read-only", ":read-only" ]
];