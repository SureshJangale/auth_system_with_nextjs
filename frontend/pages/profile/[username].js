import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API } from '../../config';
import moment from 'moment';

const UserProfile = ({ user, query }) => {
  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>{user.name}</h5>
                      <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        className="img img-fluid img-thumbnail mb-3"
                        style={{ maxHeight: '100px', maxWidth: '100%' }}
                        alt="user profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return { user: data.user, query };
    }
  });
};

export default UserProfile;
