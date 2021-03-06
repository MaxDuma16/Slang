import React from 'react'
import Spinner from '../common/Spinner/Spinner';
import c from  './Home.module.css';
import MyPostsContainer from '../Profile/MyPost/MyPostsContainer';
import FriendsBar from './FriendsBar/FriendsBar';

const Home = ({allPosts, friends, allPostsIsFetching, friendsIsFetching}) => {
  return (
    <div>
      { friends.length > 0 ? <div className={c.title}>Home</div> : <div className={c.title}>Start following someone to form your home page</div> }
      <div className={c.blockWrapper}>
        <div className={c.postsContainer}>
         { allPostsIsFetching ? <Spinner /> : <MyPostsContainer posts={allPosts} /> }
        </div>
        <div className={c.friendsBarWrapper}>
         { friendsIsFetching ? <Spinner /> : <FriendsBar friends={friends}/> }  
        </div>
      </div>
    </div>
  )
};
export default Home;
