import React from 'react';
import BlogItem, { BlogItemInterface } from './BlogItem';
interface Props {
  featuredBlogs: BlogItemInterface[];
}
const FeaturedBlogs: React.FC<Props> = ({ featuredBlogs }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>
        <div className="row">
          {featuredBlogs.map((FB) => (
            <div key={FB.id} className="col-sm-6 col-md-4 p-b-40">
              <a className="blog-item">
                <BlogItem key={FB.id} blogData={FB} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
