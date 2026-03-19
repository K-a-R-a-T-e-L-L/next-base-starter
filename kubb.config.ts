import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { configDotenv } from "dotenv";

configDotenv();

const apiDocs = process.env.API_DOCS_URL || "http://localhost:3001/api-docs-json";
const cacheBustedApiDocs = `${apiDocs}?v=${Date.now()}`;
const openApiPath = process.env.OPENAPI_PATH || "./openapi.json";
const sourcePath = openApiPath === "remote" ? cacheBustedApiDocs : openApiPath;

export default defineConfig({
  input: {
    path: sourcePath,
  },

  root: ".",
  output: {
    path: "./src/shared/api/.generated",
    clean: true,
    extension: {
      ".ts": "",
    },
  },

  plugins: [
    pluginOas({
      validate: true,
    }),

    pluginTs({
      enumType: "asConst",
      optionalType: "questionToken",
    }),

    pluginClient({
      importPath: "@/shared/api/client",
      pathParamsType: "object",
      paramsCasing: "camelcase",
      dataReturnType: "data",
    }),

    pluginReactQuery({
      client: {
        importPath: "@/shared/api/client",
        dataReturnType: "data",
      },
      query: {
        methods: ["get"],
      },
      mutation: {
        methods: ["post", "patch", "put", "delete"],
      },
      pathParamsType: "object",
      paramsCasing: "camelcase",
      suspense: false,
    }),
  ],
});
