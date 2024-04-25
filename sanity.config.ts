/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { singletonTools } from "sanity-plugin-singleton-tools";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import StudioNavbar from "./components/studio-navbar";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: isDev
    ? [
        structureTool(),
        visionTool({ defaultApiVersion: apiVersion }),
        singletonTools(),
      ]
    : [structureTool(), singletonTools()],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
