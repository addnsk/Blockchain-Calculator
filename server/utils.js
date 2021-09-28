import path from "path";

export const generateStaticPath = (str) =>
  path.resolve(__dirname, "..", `build${str}`);
