import Post from "./Post/Post";
import s from './Posts.module.css'

function Posts(props) {
  const {cb, posts, remPost} = props
  return (
    <div className={s.ClassListComponents} >
      <h2>Working with collections</h2>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} name={post.name} cb={cb} remPost={remPost}/>
      ))}

    </div>
  );
}

export default Posts;
