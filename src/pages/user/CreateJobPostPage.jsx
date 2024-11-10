import React, { useState } from 'react';
import { Layout, Typography, Form, Input, Button, InputNumber, notification, Row, Col, Card } from 'antd';
import UserLayout from '../../layouts/UserLayout';  // Ensure this layout exists
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const { Title, Text } = Typography;

const CreateJobPostPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation hook

  // Form submission handler
  const onFinish = (values) => {
    setLoading(true);
    console.log('Job post created:', values);

    // Simulate job post submission
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Tạo Mới Việc Làm Thành Công',
        description: 'Đơn tuyển dụng của bạn đã được đăng thành công!',
      });

      // Redirect to the job listing page
      navigate('/user-job-posts');  // Use navigate to redirect to the job posts page
    }, 1000);
  };

  return (
    <UserLayout>
      <Layout style={{ padding: '0 50px' }}>
        <Title level={2}>Tạo Mới Việc Làm</Title>

        <Card style={{ marginTop: '20px' }}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              minSalary: 10000000,
              maxSalary: 15000000,
            }}
          >
            {/* Job Title */}
            <Form.Item
              label="Tên Công Việc"
              name="jobTitle"
              rules={[{ required: true, message: 'Vui lòng nhập tên công việc!' }]}
            >
              <Input placeholder="Nhập tên công việc" />
            </Form.Item>

            {/* Location */}
            <Form.Item
              label="Địa Điểm"
              name="location"
              rules={[{ required: true, message: 'Vui lòng nhập địa điểm!' }]}
            >
              <Input placeholder="Nhập địa điểm công việc" />
            </Form.Item>

            {/* Salary Range */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Lương Tối Thiểu"
                  name="minSalary"
                  rules={[{ required: true, message: 'Vui lòng nhập lương tối thiểu!' }]}
                >
                  <InputNumber
                    min={1000000}
                    style={{ width: '100%' }}
                    placeholder="Lương tối thiểu (VND)"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Lương Tối Đa"
                  name="maxSalary"
                  rules={[{ required: true, message: 'Vui lòng nhập lương tối đa!' }]}
                >
                  <InputNumber
                    min={1000000}
                    style={{ width: '100%' }}
                    placeholder="Lương tối đa (VND)"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Job Description */}
            <Form.Item
              label="Mô Tả Công Việc"
              name="description"
              rules={[{ required: true, message: 'Vui lòng nhập mô tả công việc!' }]}
            >
              <Input.TextArea rows={4} placeholder="Nhập mô tả công việc" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: '100%' }}
              >
                Đăng Tuyển Dụng
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Layout>
    </UserLayout>
  );
};

export default CreateJobPostPage;
