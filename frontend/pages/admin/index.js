import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
