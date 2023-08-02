import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface BlogItemInterface {
  author: string;
  category: string;
  date: string;
  excerpt: string;
  first_content: string;
  id: string;
  img: string;
  second_content: string;
  title: string;
}
interface Props {
  blogData: BlogItemInterface;
}
const BlogItem: React.FC<Props> = ({ blogData }) => {
  return (
    <Link href={`/blog/${blogData.id}`}>
      <a className="p-b-63 d-block">
        <span className="hov-img0 how-pos5-parent">
          <Image
            src={blogData.img}
            alt="IMG-BLOG"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </span>

        <div className="p-t-32">
          <h4 className="p-b-15">
            <span className="ltext-108 cl2 hov-cl1 trans-04">
              {blogData.title}
            </span>
          </h4>

          <p className="stext-117 cl6">{blogData.excerpt}</p>

          <div className="flex-w flex-sb-m p-t-18">
            <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
              <span>
                <span className="cl4">By</span> {blogData.author}
                <span className="cl12 m-l-4 m-r-6">|</span>
              </span>

              <span>{blogData.category}</span>
            </span>

            <span className="stext-101 cl2 trans-04 m-tb-10">
              Continue Reading
              <i className="fa fa-long-arrow-right m-l-9"></i>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
