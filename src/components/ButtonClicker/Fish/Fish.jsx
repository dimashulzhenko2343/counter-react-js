import s from "./Fish.module.css";

function Fish() {
  return (
    <div className={s.Fish}>
      <h3 className={s.title}>Fish</h3>
      <p className={s.text}>
        One, two, three, four, five, once I caught a fish alive, six, seven,
        eight, nine, ten, then I let him go again.
      </p>
    </div>
  );
}

export default Fish;