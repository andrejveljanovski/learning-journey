import React from 'react';
import BlogItem, { BlogItemInterface } from './BlogItem';

interface Props {
  blogs: BlogItemInterface[];
}
const RelatedBlogs: React.FC<Props> = ({ blogs }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {blogs.map((blog) => (
          <BlogItem blogData={blog} key={blog.id} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
