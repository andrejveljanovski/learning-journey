import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import RelatedBlogs from '../../components/RelatedBlogs';
import { BlogItemInterface } from '../../components/BlogItem';
import Image from 'next/image';
interface Props {
  blogDetail: BlogItemInterface;
  relatedBlogs: BlogItemInterface[];
}
const BlogDetail: NextPage<Props> = ({ blogDetail, relatedBlogs }) => {
  return (
    <>
      <Head>
        <title>Store - title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={blogDetail.title} />

      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                <div className="wrap-pic-w how-pos5-parent">
                  <Image
                    src={blogDetail.img}
                    alt="IMG-BLOG"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>

                <div className="p-t-32">
                  <span className="flex-w align-items-center flex-m stext-111 cl2 p-b-19">
                    <span className="flex-c-m mr-3 bor7 p-lr-15 trans-04">
                      {blogDetail.category}
                    </span>

                    <span>
                      <span className="cl4">By</span> {blogDetail.author}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>{blogDetail.date}</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">{blogDetail.title}</h4>

                  <p className="stext-117 cl6 p-b-26">
                    {blogDetail.first_content}
                  </p>

                  <p className="stext-117 cl6 p-b-26">
                    {blogDetail.second_content}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <RelatedBlogs blogs={relatedBlogs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://graceful-bead-song.glitch.me/blogs');
  const data: BlogItemInterface[] = await res.json();
  const paths = data.map((postDetail) => ({
    params: {
      id: postDetail.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.id) {
    const res = await fetch(
      `https://graceful-bead-song.glitch.me/blogs/${params.id}`
    );
    const blogDetail = await res.json();

    const resRandomBlogs = await fetch(
      'https://graceful-bead-song.glitch.me/blogs?_start=$%7BrandomNo%7D&_limit=3'
    );
    const relatedBlogs = await resRandomBlogs.json();

    return {
      props: {
        blogDetail,
        relatedBlogs,
      },
    };
  }

  return {
    props: {},
  };
};
export default BlogDetail;
