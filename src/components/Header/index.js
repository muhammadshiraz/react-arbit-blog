import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from 'actions/postActions';
import { incrementPostCount, decrementPostCount } from 'actions/userActions';
import './Header.scss'; // Import the SCSS file
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom/dist';

const Header = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const postCount = useSelector((state) => state.user.postCount); // Get post count from Redux store

  React.useEffect(() => {
    // Fetch posts when the component mounts
    dispatch(fetchPosts());
  }, [dispatch]);

  // Update post count when a new post is created or deleted
  React.useEffect(() => {
    const handlePostCountChange = () => {
      if (posts.length > postCount) {
        dispatch(incrementPostCount());
      } else if (posts.length < postCount) {
        dispatch(decrementPostCount());
      }
    };

    handlePostCountChange();
  }, [posts, postCount, dispatch]);

  return (
    <header className="header">
    <div className="container mx-auto px-12">
      <div className='flex flex-row justify-between items-center bg-white my-5 px-5 py-6 shadow-md'>
        <Link to='/'><h1 className="title font-semibold text-xl flex gap-x-3 items-center justify-center"><i className="fa fa-play-circle text-blue-500" aria-hidden="true"></i><span>Arbit Blog</span></h1></Link>        
        <div className='flex flex-row items-center justify-center gap-x-5'>
          <div className="post-count text-black text-sm relative flex flex-col justify-center items-end">
            <span className='bg-[#b9ffd4] text-[#575757] text-center rounded-full text-xs space-x-0 px-1 py-0.5 font-medium absolute bottom-[20px] left-5 w-[18px] h-[18px]'>{postCount}</span>
            <span className='leading-none'>Posts</span>
          </div>
          <button type='button' className='leading-none'><i class="fa fa-bell text-[#7e7e7e]" aria-hidden="true"></i></button>
          <button type='button' className='leading-none'><i class="fa fa-bars text-[#7e7e7e]" aria-hidden="true"></i></button>
          <button type='button' className='leading-none'><i class="fa fa-user text-[#7e7e7e]" aria-hidden="true"></i></button>
        </div>        
      </div>
    </div>
  </header>
  );
};

export default Header;
