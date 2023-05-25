import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

/*export async function getPost(fileNameSlug){
  const data = await readFile(`src/app/content/posts/${fileNameSlug}.json`, 'utf8');
  return JSON.parse(data);
}*/

/*export async function getPost(fileNameSlug){
  const source = await readFile(`src/app/content/posts/${fileNameSlug}.md`, 'utf8');
  const html = marked.parse(source);
  return {
    body: html
  };
}*/

export async function getPost(fileNameSlug){
  const source = await readFile(`src/app/content/posts/${fileNameSlug}.md`, 'utf8');
  const { data: { date, title, slug }, content } = matter(source);
  const body = marked.parse(content);
  return {
    date, title, slug,
    body
  };
}
