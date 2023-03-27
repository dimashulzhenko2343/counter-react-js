import s from './Post.module.css'

function Post(props) {
  const { cb, id, name, remPost } = props;
  return (
    <div className={s.Post}>
      <div onClick={cb} className={s.postAction}>
        {name}
      </div>
      <button onClick={() => remPost(id)} className="button">
        Delete
      </button>
    </div>
  );
}

export default Post;
