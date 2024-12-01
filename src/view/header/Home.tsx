import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from './UserTable';

function Home() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="user" title="USER">
                <UserTable></UserTable>
            </Tab>
            <Tab eventKey="blogs" title="BLOGS">
                Tab content for Blogs
            </Tab>
        </Tabs>
    );
}

export default Home;