export interface Post {
  title: string;
  summary: string;
  mdx: string;
  _meta: {
    flattenedPath: string;
    filePath: string;
    path: string;
  };
}

