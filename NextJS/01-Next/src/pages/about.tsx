import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Image from 'next/image';
interface Props {
  about_page: {
    title: string;
    first_content: string;
    second_content: string;
    third_content: string;
    first_image: string;
    second_image: string;
    fourth_content: string;
    fifth_content: string;
    author: string;
    second_title: string;
  };
}
const About: NextPage<Props> = ({ about_page }) => {
  return (
    <>
      <Head>
        <title>Store - About</title>
        <meta name="description" content="About page for section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="About" />

      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{about_page.title}</h3>

                <p className="stext-113 cl6 p-b-26">
                  {about_page.fifth_content}
                </p>

                <p className="stext-113 cl6 p-b-26">
                  {about_page.second_content}
                </p>

                <p className="stext-113 cl6 p-b-26">
                  {about_page.third_content}
                </p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <Image
                    src={about_page.first_image}
                    alt={about_page.title}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">
                  {about_page.second_title}
                </h3>

                <p className="stext-113 cl6 p-b-26">
                  {about_page.fourth_content}
                </p>

                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">
                    {about_page.fifth_content}
                  </p>

                  <span className="stext-111 cl8">{about_page.author}</span>
                </div>
              </div>
            </div>

            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <Image
                    src={`/${about_page.second_image}`}
                    alt="Our CEO IMG"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const resAbout = await fetch(
    'https://graceful-bead-song.glitch.me/about_page'
  );
  const about_page = await resAbout.json();
  return {
    props: {
      about_page,
    },
  };
};
export default About;
