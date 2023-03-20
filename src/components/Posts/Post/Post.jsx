function Post(props) {
  const { cb, id, name, remPost } = props;
  return (
    <div className="Post">
      <div onClick={cb} className="postAction" key={id}>
        {name}
      </div>
      <button onClick={() => remPost(id)} className="button">
        Delete
      </button>
    </div>
  );
}

export default Post;
