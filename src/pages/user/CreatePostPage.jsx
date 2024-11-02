import React, { useState } from 'react';
import { Form, Input, Button, Select, Switch, Typography } from 'antd';
import UserLayout from '../../layouts/UserLayout';

const { Title } = Typography;
const { TextArea } = Input;

const CreatePostPage = () => {
  const [form] = Form.useForm();
  const [isPrivate, setIsPrivate] = useState(false);

  const handleFinish = (values) => {
    console.log('Giá trị nhận được: ', values);
    // Thực hiện API call tại đây để tạo bài viết mới
    // Ví dụ: await createPost(values);
  };

  return (
    <UserLayout>
      <div style={{ padding: '24px' }}>
        <Title level={2}>Tạo Bài Viết Mới</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            name="title"
            label="Tiêu Đề Bài Viết"
            rules={[{ required: true, message: 'Vui lòng nhập tiêu đề bài viết!' }]}
          >
            <Input placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>

          <Form.Item
            name="content"
            label="Nội Dung Bài Viết"
            rules={[{ required: true, message: 'Vui lòng nhập nội dung bài viết!' }]}
          >
            <TextArea rows={4} placeholder="Nhập nội dung bài viết" />
          </Form.Item>

          <Form.Item
            name="majorId"
            label="Chuyên Ngành"
            rules={[{ required: true, message: 'Vui lòng chọn chuyên ngành!' }]}
          >
            <Select placeholder="Chọn chuyên ngành">
              {/* Thay thế bằng các tùy chọn chuyên ngành thực tế */}
              <Select.Option value="1">Khoa Học Máy Tính</Select.Option>
              <Select.Option value="2">Quản Trị Kinh Doanh</Select.Option>
              <Select.Option value="3">Kỹ Thuật</Select.Option>
              <Select.Option value="4">Khoa Học Sức Khỏe</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Riêng Tư">
            <Switch checked={isPrivate} onChange={setIsPrivate} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo Bài Viết
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserLayout>
  );
};

export default CreatePostPage;
