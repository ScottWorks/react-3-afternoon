import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post.js';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      baseURL: 'https://practiceapi.devmountain.com/api'
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.filterPost = this.filterPost.bind(this);
  }

  componentDidMount() {
    axios.get(`${this.state.baseURL}/posts`).then((res) => {
      this.setState({
        posts: res.data
      });
    });
  }

  updatePost(text, id) {
    axios.put(`${this.state.baseURL}/posts?id=${id}`, { text }).then((res) => {
      this.setState({
        posts: res.data
      });
    });
  }

  deletePost(id) {
    axios.delete(`${this.state.baseURL}/posts?id=${id}`).then((res) => {
      this.setState({
        posts: res.data
      });
    });
  }

  createPost(text) {
    axios.post(`${this.state.baseURL}/posts`, { text }).then((res) => {
      this.setState({
        posts: res.data
      });
    });
  }

  filterPost(text) {
    axios
      .get(`${this.state.baseURL}/posts/filter/?text=${text}`)
      .then((res) => {
        this.setState({
          posts: res.data
        });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header filterPostFn={this.filterPost} />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map((elem) => (
            <Post
              id={elem.id}
              key={elem.id}
              text={elem.text}
              date={elem.date}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
