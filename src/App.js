import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Typography, Menu } from 'antd';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
    <div className="app">
      <Layout className="layout">
        <Header className="header">
        <div className="logo-wrapper"><img src="logo.png" className="logo"/></div>
          
          <Menu mode="horizontal" theme="dark" className="menu">
            <Menu.Item className="menu-item" key="about">
              About
            </Menu.Item>
            <Menu.Item className="menu-item" key="contact">
              Contact
            </Menu.Item>
            <Menu.Item className="menu-item" key="community">
              Mining Community
            </Menu.Item>
          </Menu>
        </Header>

        <Content>
          <div className="site-layout-content">
            Content
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Kripto Kyng ©2022 Created by Omar Alomar (rough draft)</Footer>
      </Layout>
    </div>
    </>
  );
}

export default App;
