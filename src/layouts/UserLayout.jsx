import React from "react";
import { Layout, Menu, Breadcrumb, Input, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import "./UserLayout.css"; // Custom styles

const { Header, Content, Footer } = Layout;

const UserLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo">FPT ALumni Connect</div>
        <div className="search-bar">
          <Input.Search
            placeholder="Tìm kiếm diễn đàn..."
            onSearch={(value) => console.log(value)} // Implement search functionality here
            style={{ width: 300, marginRight: 16, borderRadius: "4px" }}
          />
        </div>
      </Header>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Menu.Item key="1">
          <Link to="/">Diễn Đàn</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">Chủ Đề</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/create-post/">Bài Mới</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/">Giới Thiệu</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/">Liên Hệ</Link>
        </Menu.Item>
      </Menu>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Trang Chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Diễn Đàn</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>

      <Footer className="footer">EcoForum ©2024 Created by Your Name</Footer>
    </Layout>
  );
};

export default UserLayout;
