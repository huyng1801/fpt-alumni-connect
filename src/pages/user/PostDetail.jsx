import React, { useState } from 'react';
import { Layout, Typography, Input, Button, List } from 'antd';
import { useParams } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// Sample data for posts with multiple comments
const posts = [
  {
    id: 1,
    title: 'Hiểu Về React Hooks',
    content: 'Một cái nhìn sâu về React Hooks...',
    author: 'Nguyễn Văn A',
    createdAt: '2024-11-01',
    views: 100,
    comments: [
      {
        id: 1,
        content: 'Bài viết rất hữu ích, cảm ơn tác giả!',
        author: 'Nguyễn Văn B',
        createdAt: '2024-11-02',
      },
      {
        id: 2,
        content: 'Tôi muốn tìm hiểu thêm về Hooks!',
        author: 'Trần Thị C',
        createdAt: '2024-11-03',
      },
    ],
  },
  {
    id: 2,
    title: 'Tương Lai Của AI',
    content: 'Khám phá các xu hướng trong trí tuệ nhân tạo...',
    author: 'Trần Thị B',
    createdAt: '2024-10-25',
    views: 250,
    comments: [
      {
        id: 1,
        content: 'AI sẽ thay đổi thế giới như thế nào?',
        author: 'Lê Văn D',
        createdAt: '2024-10-26',
      },
      {
        id: 2,
        content: 'Rất mong chờ những cải tiến trong lĩnh vực này.',
        author: 'Nguyễn Thị E',
        createdAt: '2024-10-27',
      },
    ],
  },
  {
    id: 3,
    title: 'Mẹo Sống Khỏe Mạnh',
    content: 'Các mẹo để duy trì một lối sống lành mạnh...',
    author: 'Lê Văn C',
    createdAt: '2024-10-20',
    views: 300,
    comments: [],
  },
];

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL parameters
  const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      post.comments.push({
        id: post.comments.length + 1,
        content: newComment,
        author: 'Người dùng', // Replace with actual user data if available
        createdAt: new Date().toLocaleDateString('vi-VN'),
      });
      setNewComment(''); // Clear the input field after submission
    }
  };

  const handleRepost = () => {
    // Logic for reposting (e.g., send to server or update user feed)
    console.log(`Reposted: ${post.title}`);
    alert(`Bạn đã chia sẻ bài viết: ${post.title}`);
  };

  return (
    <UserLayout>
        <Content style={{ padding: '24px', minHeight: 280, background: '#fff', borderRadius: '8px' }}>
          {post ? (
            <>
              <Title level={2}>{post.title}</Title>
              <Text type="secondary">Tác giả: {post.author}</Text>
              <br />
              <Text type="secondary">Ngày đăng: {new Date(post.createdAt).toLocaleDateString('vi-VN')}</Text>
              <br />
              <Text type="secondary">Lượt xem: {post.views}</Text>
              <br /><br />
              <Paragraph>{post.content}</Paragraph>

              {/* Repost Button */}
              <Button type="default" onClick={handleRepost} style={{ marginTop: '10px' }}>
                Chia sẻ bài viết
              </Button>

              <Title level={3} style={{ marginTop: '20px' }}>Bình luận</Title>
              <Input.TextArea
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Viết bình luận của bạn..."
              />
              <Button type="primary" onClick={handleCommentSubmit} style={{ marginTop: '10px' }}>
                Gửi
              </Button>

              <List
                itemLayout="horizontal"
                dataSource={post.comments}
                renderItem={(comment) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<Text strong>{comment.author}</Text>}
                      description={<Text>{comment.content}</Text>}
                    />
                    <Text type="secondary">{comment.createdAt}</Text>
                  </List.Item>
                )}
                style={{ marginTop: '20px' }}
              />
            </>
          ) : (
            <Title level={3}>Bài viết không tồn tại</Title>
          )}
        </Content>
    </UserLayout>
  );
};

export default PostDetail;
