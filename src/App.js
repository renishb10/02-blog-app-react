import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <PostForm />
          <hr/>
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
