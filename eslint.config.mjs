import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

// https://github.com/vercel/next.js/discussions/54238
// bump issue for eslint 9

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("next/core-web-vitals", "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            "react-hooks": fixupPluginRules(reactHooks),
        },

        rules: {
            // "@typescript-eslint/no-unused-vars": "error",
            // "@typescript-eslint/no-explicit-any": "error",
            // "react-hooks/rules-of-hooks": "error",
            // "react-hooks/exhaustive-deps": "warn",
            
        },
    },
];