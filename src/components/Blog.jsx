import React from 'react';
import blogImage from '../assets/projects/Culture/image-25.jpg';  // Adjust the path to match your directory structure

const Blog = () => {
  return (
    <div>
      <img src={blogImage} alt="Blog" className="w-full  h-[300px] object-cover" />
    </div>
  );
}

export default Blog;
