import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Post from './components/Post';
import Header from './components/Header';


function App() {

  let users = [
    {
      id: 0,
      login: "Alimko",
      pass: "",
      avatar: "https://www.beforetheflood.com/wp-content/uploads/2023/08/Common-Monkey-Pets-List.jpg",
    }
  ]

  let posts = [
    {
      id: 0,
      user_id: 0,
      img: "https://www.beforetheflood.com/wp-content/uploads/2023/08/Common-Monkey-Pets-List.jpg",
      text: "Устновил новую автарку!!!",
      likes: [1, 3, 6, 10, 200],
    }
  ]

  let getUser = (id) => {
    for (let user of users) {
      if (user.id == id) {
        return user
      }
    }
  }

  let getPost = (id) => {
    for (let post of posts) {
      if (post.id == id) {
        return post
      }
    }
  }

  let likePost = (post_id, user_id) => {
    let temp_post = getPost(post_id)
    (temp_post.likes.find((id) => id == user_id)) ? temp_post.likes.pop(user_id) : temp_post.likes.push(user_id)
  }

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Feed posts={posts} users={users} getUser={getUser} likePost={likePost} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
