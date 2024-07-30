import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:NBZ9I2hnmfXK@ep-morning-limit-a5lnek12.us-east-2.aws.neon.tech/developer-portfolio?sslmode=require',
  }
});
