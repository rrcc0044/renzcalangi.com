import fs from 'fs';
import glob from 'fast-glob';
import path from 'path';
import matter from 'gray-matter';

export interface IPost {
  data: {
    [key: string]: any;
  };
  content: string;
}

const BASE_DIR = path.join(process.cwd(), './posts/');

export const getPosts = async (folder: string): Promise<any> => {
  const files = glob.sync(path.join(BASE_DIR, folder, '/*.mdx'));

  return Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);

      return {
        data,
        content: content.trim(),
      };
    }),
  );
};
