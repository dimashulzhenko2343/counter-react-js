import React, { Component } from "react";
import s from "./App.module.css";
import Counter from "./components/ClassCounter/Counter";
import ClassTimer from "./components/ClassTimer/ClassTimer";
import Form from "./components/Form/Form";
import FormValid from "./components/FormValid/FormValid";
import FormWithRef from "./components/FormWithRef/FormWithRef";
import Posts from "./components/Posts/Posts";

class App extends Component {
  state = {
    posts: [
      { id: "b1", name: "JS Component" },
      { id: "b2", name: "React Component" },
      { id: "b3", name: "CSS Component" },
    ],
  };

  handleSomething = () => {
    alert("App jsx set update");
  };

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className={s.App}>
        <Counter />
        <ClassTimer />
        <Posts
          posts={posts}
          cb={this.handleSomething}
          remPost={this.removePost}
        />
        <Form />
        <FormValid />
        <FormWithRef />
      </div>
    );
  }
}

export default App;
