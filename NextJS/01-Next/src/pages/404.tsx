import type { NextPage } from 'next';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Store - About</title>
        <meta name="description" content="About page for section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="Page not found" />

      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-12 text-center">
              <h1 className="text-info error-title display-4">Oops!</h1>
              <h5 className="text-dark m-3">404 - PAGE NOT FOUND</h5>
              <p className="text-dark m-2">
                The page you are looking for might have been removed <br /> had
                its name changed or it is temporarily unavaliable
              </p>
              <Link href={'/'}>
                <a className="btn rounded-pill btn-info btn-lg ">
                  Go to homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
