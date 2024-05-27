import baseConfig from "@aintrest/eslint-config/base";
import reactConfig from "@aintrest/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
