import React, { useState } from 'react';
import { Layout, Form, Input, Button, Table, Modal, Select, DatePicker, Upload, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import AdminLayout from '../../layouts/AdminLayout';

const { Content } = Layout;
const { Option } = Select;

const UserPage = () => {
  const [users, setUsers] = useState([
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      emailVerified: true,
      roleId: 1,
      majorId: 1,
      googleId: '1234567890',
      isMentor: false,
      createdAt: '2024-01-01',
      updatedAt: '2024-02-01',
      profilePicture: null,
      createdBy: 'Admin',
      updatedBy: 'Admin'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  // Mở modal để thêm hoặc chỉnh sửa người dùng
  const openModal = (user = null) => {
    setEditingUser(user);
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
    setIsModalOpen(true);
  };

  // Xử lý thêm hoặc cập nhật người dùng
  const handleSaveUser = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingUser) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.userId === editingUser.userId ? { ...user, ...values } : user
            )
          );
        } else {
          setUsers((prevUsers) => [
            ...prevUsers,
            { ...values, userId: prevUsers.length + 1, createdAt: new Date().toISOString() }
          ]);
        }
        setIsModalOpen(false);
        setEditingUser(null);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  // Xác nhận xóa người dùng
  const handleDeleteUser = (userId) => {
    Modal.confirm({
      title: 'Bạn có chắc chắn muốn xóa người dùng này?',
      onOk: () => {
        setUsers(users.filter((user) => user.userId !== userId));
        message.success('Xóa người dùng thành công');
      }
    });
  };

  // Cột của bảng
  const columns = [
    { title: 'ID', dataIndex: 'userId', key: 'userId' },
    { title: 'Tên', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Họ', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Vai trò', dataIndex: 'roleId', key: 'roleId', render: (roleId) => (roleId === 1 ? 'Quản trị' : 'Người dùng') },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, user) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => openModal(user)}>
          </Button>
          <Button icon={<DeleteOutlined />} danger onClick={() => handleDeleteUser(user.userId)}>
          </Button>
        </>
      )
    }
  ];

  return (
    <AdminLayout>
      <Content style={{ padding: '24px' }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => openModal()}>
          Thêm người dùng
        </Button>
        <Table columns={columns} dataSource={users} rowKey="userId" style={{ marginTop: 16 }} />

        {/* Modal Thêm/Chỉnh sửa Người Dùng */}
        <Modal
          title={editingUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={handleSaveUser}
          okText={editingUser ? 'Cập nhật' : 'Thêm'}
        >
          <Form form={form} layout="vertical">
            <Form.Item name="firstName" label="Tên" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="lastName" label="Họ" rules={[{ required: true, message: 'Vui lòng nhập họ' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item name="emailVerified" label="Email đã xác thực" valuePropName="checked">
              <Select>
                <Option value={true}>Đã xác thực</Option>
                <Option value={false}>Chưa xác thực</Option>
              </Select>
            </Form.Item>
            <Form.Item name="roleId" label="Vai trò" rules={[{ required: true }]}>
              <Select placeholder="Chọn vai trò">
                <Option value={1}>Quản trị</Option>
                <Option value={2}>Người dùng</Option>
              </Select>
            </Form.Item>
            <Form.Item name="majorId" label="Mã ngành">
              <Input />
            </Form.Item>
            <Form.Item name="isMentor" label="Là người hướng dẫn" valuePropName="checked">
              <Select>
                <Option value={true}>Có</Option>
                <Option value={false}>Không</Option>
              </Select>
            </Form.Item>
            <Form.Item name="profilePicture" label="Ảnh đại diện">
              <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload>
            </Form.Item>
            <Form.Item name="createdAt" label="Ngày tạo">
              <DatePicker showTime />
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </AdminLayout>
  );
};

export default UserPage;
