import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  FlagOutlined,
  TagOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  AppstoreAddOutlined, // Changed to AppstoreAddOutlined for products
} from '@ant-design/icons'; // Importing the icons
import './AdminLayout.css'; // Assuming your custom styles

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '80vh' }}>
      <Sider width={250} className="site-layout-background">
        <div className="logo">
          <img src="https://odysseyhouse.com.au/wp-content/uploads/2019/08/Profile-Photo-Place-Holder.png" alt="Profile" />
          <span className="logo_name" style={{ color: '#777' }}>Admin</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin/dashboard">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FlagOutlined />}>
            <Link to="/admin/user">Người dùng</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <div className="logo">
            <span className="admin_name">Admin</span>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
