import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Typography, Button, Spin, notification, Form, Input } from 'antd';
import UserLayout from '../../layouts/UserLayout'; // Adjust the import path as needed

const { Title, Text, Paragraph } = Typography;

const UserJobPostDetailsPage = () => {
  const { id } = useParams();  // Access the job post ID from the URL params
  const [jobPost, setJobPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Example job post data; replace with actual API call to fetch job details based on ID
  const exampleJobPostData = {
    jobPostId: 1,
    jobTitle: 'Kỹ Sư Phần Mềm',
    jobDescription: 'Chúng tôi đang tìm kiếm một Kỹ Sư Phần Mềm tài năng gia nhập đội ngũ của chúng tôi.',
    location: 'Thành phố Hồ Chí Minh',
    minSalary: 10000000,
    maxSalary: 20000000,
    requirements: 'Có hơn 3 năm kinh nghiệm phát triển phần mềm. Quen thuộc với React và Node.js.',
    benefits: 'Bảo hiểm sức khỏe, Nghỉ phép có lương, Cơ hội phát triển nghề nghiệp.',
    createdAt: '2024-10-01T12:00:00Z',
  };

  useEffect(() => {
    setTimeout(() => {
      setJobPost(exampleJobPostData);  // Replace with an actual API call
      setLoading(false);
    }, 1000);
  }, [id]);  // Depend on job post ID to fetch the correct data

  const handleApply = (values) => {
    console.log('Đơn ứng tuyển đã được gửi:', values);
    notification.success({
      message: 'Ứng tuyển thành công',
      description: 'Đơn ứng tuyển của bạn đã được gửi thành công!',
    });
  };

  if (loading) {
    return <Spin size="large" style={{ margin: '50px auto', display: 'block' }} />;
  }

  if (!jobPost) {
    return <Text type="danger">Không tìm thấy tin tuyển dụng!</Text>;
  }

  return (
    <UserLayout>
      <Layout style={{ padding: '0 50px' }}>
        <Title level={2}>{jobPost.jobTitle}</Title>
        <Text type="secondary">{jobPost.location}</Text>
        <br />
        <Text type="secondary">Đăng ngày: {new Date(jobPost.createdAt).toLocaleDateString()}</Text>
        <br /><br />
        <Paragraph>{jobPost.jobDescription}</Paragraph>

        <Title level={4}>Yêu cầu</Title>
        <Paragraph>{jobPost.requirements || 'Không có yêu cầu.'}</Paragraph>

        <Title level={4}>Phúc lợi</Title>
        <Paragraph>{jobPost.benefits || 'Không có phúc lợi.'}</Paragraph>

        <Title level={4}>Mức lương</Title>
        <Paragraph>{jobPost.minSalary} - {jobPost.maxSalary} VND</Paragraph>

        <Button type="primary" onClick={() => handleApply()}>Ứng tuyển công việc này</Button>

        <Form
          name="applyForm"
          layout="vertical"
          style={{ marginTop: '20px' }}
          onFinish={handleApply}
        >
          <Form.Item
            label="Thư xin việc"
            name="coverLetter"
            rules={[{ required: true, message: 'Vui lòng nhập thư xin việc của bạn!' }]}
          >
            <Input.TextArea rows={4} placeholder="Viết thư xin việc của bạn ở đây..." />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Gửi đơn ứng tuyển
          </Button>
        </Form>
      </Layout>
    </UserLayout>
  );
};

export default UserJobPostDetailsPage;
