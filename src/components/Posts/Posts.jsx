import Post from "./Post/Post";

function Posts(props) {
  const {cb, posts, remPost} = props
  return (
    <div className="ClassListComponents">
      ClassListComponents
      {posts.map((post) => (
        <Post id={post.id} name={post.name} cb={cb} remPost={remPost}/>
      ))}

    </div>
  );
}

export default Posts;
