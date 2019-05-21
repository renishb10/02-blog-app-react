import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostItems(posts) {
    console.log('posts',posts);
    const postItems = posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return postItems;
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPostItems(this.props.posts)}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
