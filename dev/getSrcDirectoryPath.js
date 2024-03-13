import path from "path";
import fs from "fs";

export const blogDir = `${postsDir()}cartas\/`
export const vaquejadaDir = `${postsDir()}vaquejada\/`;

export function postsDir() {
  console.log('### postsDir', `${getSrcDirectoryPath(process.cwd())}\/posts\/`);
  return `${getSrcDirectoryPath(process.cwd())}\/posts\/`;
}

export function getSrcDirectoryPath(currentPath) {
  const srcPath = path.join(currentPath, 'app/[lang]');
  if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
    return srcPath;
  }
  // If we reach the root directory, return null (src not found)
  const parentPath = path.dirname(currentPath);
  if (parentPath === currentPath) {
    return null;
  }

  // Recursively search in the parent directory
  return getSrcDirectoryPath(parentPath);
}

