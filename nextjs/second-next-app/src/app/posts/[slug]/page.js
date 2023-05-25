import NavBar from "../../components/NavBar";
import { use } from "react";
// import { readFile } from 'fs/promises';
import { getPost } from '../../lib/posts.js';

/*async function getPosts() {
  return {
    prop1: 'value1',
    prop2: 'value2',
    post: {
      title: 'First Post',
      body: 'My first post, as static props.',
    },
  };
}*/

async function getPosts(slug) {
  /*const data = await readFile('src/app/content/posts/first-post.json', 'utf8');
  const post = JSON.parse(data);*/
  const post = await getPost(slug);
  return { post };
}

export default function Post(props) {
  const slug = props.params.slug;
  const props1 = use(getPosts(slug));
  const { prop1, prop2, post } = props1;
  // console.log("[Post]: " + JSON.stringify(props));
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}
