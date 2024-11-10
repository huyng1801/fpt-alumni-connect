import React from 'react';
import { Layout, Menu, List, Typography, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import UserLayout from '../../layouts/UserLayout';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

// Sample data for categories and posts in Vietnamese
const categories = ['Công Nghệ', 'Sức Khỏe', 'Phong Cách Sống', 'Tài Chính', 'Giáo Dục'];
const posts = [
  { id: 1, title: 'Hiểu Về React Hooks', content: 'Một cái nhìn sâu về React Hooks...' },
  { id: 2, title: 'Tương Lai Của AI', content: 'Khám phá các xu hướng trong trí tuệ nhân tạo...' },
  { id: 3, title: 'Mẹo Sống Khỏe Mạnh', content: 'Các mẹo để duy trì một lối sống lành mạnh...' },
  // Add more sample posts here
];

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleCreatePostClick = () => {
    navigate('/create-post'); // Navigate to the CreatePostPage
  };

  return (
    <UserLayout>
      <Layout style={{ padding: '24px', background: '#f0f2f5' }}>
        <Sider width={220} className="site-layout-background" style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
          <Title level={4} style={{ color: '#000', marginBottom: '16px' }}>Danh Mục</Title>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ borderRight: 0 }}
          >
            {categories.map((category, index) => (
              <Menu.Item key={index + 1} style={{ fontSize: '16px' }}>
                {category}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '24px', minHeight: 280, background: '#fff', borderRadius: '8px' }}>
            <Title level={3} style={{ color: '#1890ff', marginBottom: '20px' }}>Bài Viết Mới Nhất</Title>
            
            {/* Button to navigate to the Create Post page */}
            <Button 
              type="primary" 
              onClick={handleCreatePostClick} 
              style={{ marginBottom: '20px' }}
            >
              Tạo Bài Viết Mới
            </Button>

            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={posts}
              renderItem={post => (
                <List.Item
                  key={post.id}
                  style={{ padding: '16px', border: '1px solid #f0f0f0', borderRadius: '8px', marginBottom: '16px' }}
                  extra={<img width={180} alt="ảnh bìa bài viết" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png" style={{ borderRadius: '8px' }} />}
                >
                  <List.Item.Meta
                    title={<Link to={`/post/${post.id}`} style={{ fontSize: '18px', color: '#1890ff' }}>{post.title}</Link>}
                    description={<Text style={{ color: '#595959' }}>{post.content}</Text>}
                  />
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Layout>
    </UserLayout>
  );
};

export default HomePage;
