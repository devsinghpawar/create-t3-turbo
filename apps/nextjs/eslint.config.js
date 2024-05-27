import baseConfig, { restrictEnvAccess } from "@aintrest/eslint-config/base";
import nextjsConfig from "@aintrest/eslint-config/nextjs";
import reactConfig from "@aintrest/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
