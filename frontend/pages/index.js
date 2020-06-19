import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">
                BASIC USER AUTHENTICATION SYSTEM
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                Basic User Authentication System in MERN stack.....
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className="text-shadow text-center h1">Not Regestered?</h2>
                </div>
                <div className="back text-center">
                  <Link href="/signup">
                    <a>
                      <h3 className="h1">SIGNUP NOW</h3>
                    </a>
                  </Link>
                  <p className="lead">Try Signup Now......</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className="text-shadow text-center h1">Already an user?</h2>
                </div>
                <div className="back text-center">
                  <Link href="/signin">
                    <a>
                      <h3 className="h1">SIGNIN NOW</h3>
                    </a>
                  </Link>
                  <p className="lead">Try SignIn Now......</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className="text-shadow text-center h1">Want To Do Signout?</h2>
                </div>
                <div className="back text-center">
                  <Link href="/signout">
                    <a>
                      <h3 className="h1">SIGNOUT</h3>
                    </a>
                  </Link>
                  <p className="lead">Do you really want to signout......?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
