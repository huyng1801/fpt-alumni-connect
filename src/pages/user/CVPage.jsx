import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, notification, InputNumber } from 'antd';
import { Layout, Row, Col } from 'antd';
import moment from 'moment';
import UserLayout from '../../layouts/UserLayout';

const { TextArea } = Input;
const { Option } = Select;
const { Header, Content, Footer } = Layout;

const CVPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (values) => {
    setLoading(true);
    console.log('CV đã được gửi: ', values);

    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'CV đã được gửi',
        description: 'CV của bạn đã được gửi thành công.',
      });
    }, 1000);
  };

  return (
    <UserLayout>
      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col span={16} style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
          <h2>Gửi CV của bạn</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              gender: 'Male', // Gender mặc định, có thể thay đổi thành 'Female' hoặc 'Other'
            }}
          >
            <Row gutter={24}>
              {/* Full Name */}
              <Col span={12}>
                <Form.Item
                  label="Họ và tên"
                  name="fullName"
                  rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>

              {/* Email */}
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>

              {/* Address */}
              <Col span={12}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                >
                  <Input placeholder="Địa chỉ" />
                </Form.Item>
              </Col>

              {/* Phone */}
              <Col span={12}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>

              {/* Birthday */}
              <Col span={12}>
                <Form.Item
                  label="Ngày sinh"
                  name="birthday"
                  rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                >
                  <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
              </Col>

              {/* Gender */}
              <Col span={12}>
                <Form.Item
                  label="Giới tính"
                  name="gender"
                  rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                >
                  <Select>
                    <Option value="Male">Nam</Option>
                    <Option value="Female">Nữ</Option>
                    <Option value="Other">Khác</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* City */}
              <Col span={12}>
                <Form.Item
                  label="Thành phố"
                  name="city"
                  rules={[{ required: true, message: 'Vui lòng nhập thành phố!' }]}
                >
                  <Input placeholder="Thành phố" />
                </Form.Item>
              </Col>

              {/* Company */}
              <Col span={12}>
                <Form.Item
                  label="Công ty"
                  name="company"
                  rules={[{ required: true, message: 'Vui lòng nhập tên công ty!' }]}
                >
                  <Input placeholder="Công ty" />
                </Form.Item>
              </Col>

              {/* Primary Duties */}
              <Col span={12}>
                <Form.Item
                  label="Nhiệm vụ chính"
                  name="primaryDuties"
                  rules={[{ required: true, message: 'Vui lòng mô tả nhiệm vụ chính của bạn!' }]}
                >
                  <TextArea placeholder="Nhiệm vụ chính" rows={4} />
                </Form.Item>
              </Col>

              {/* Job Level */}
              <Col span={12}>
                <Form.Item
                  label="Cấp bậc công việc"
                  name="jobLevel"
                  rules={[{ required: true, message: 'Vui lòng chọn cấp bậc công việc!' }]}
                >
                  <Select>
                    <Option value="Junior">Junior</Option>
                    <Option value="Mid">Mid</Option>
                    <Option value="Senior">Senior</Option>
                    <Option value="Lead">Lead</Option>
                    <Option value="Manager">Manager</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Start Date */}
              <Col span={12}>
                <Form.Item
                  label="Ngày bắt đầu"
                  name="startAt"
                  rules={[{ required: true, message: 'Vui lòng chọn ngày bắt đầu!' }]}
                >
                  <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
              </Col>

              {/* End Date */}
              <Col span={12}>
                <Form.Item
                  label="Ngày kết thúc"
                  name="endAt"
                >
                  <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
              </Col>

              {/* Language */}
              <Col span={12}>
                <Form.Item
                  label="Ngôn ngữ"
                  name="language"
                  rules={[{ required: true, message: 'Vui lòng nhập ngôn ngữ!' }]}
                >
                  <Input placeholder="Ngôn ngữ" />
                </Form.Item>
              </Col>

              {/* Language Level */}
              <Col span={12}>
                <Form.Item
                  label="Trình độ ngôn ngữ"
                  name="languageLevel"
                  rules={[{ required: true, message: 'Vui lòng nhập trình độ ngôn ngữ!' }]}
                >
                  <Input placeholder="Trình độ ngôn ngữ" />
                </Form.Item>
              </Col>

              {/* Min Salary */}
              <Col span={12}>
                <Form.Item
                  label="Mức lương tối thiểu"
                  name="minSalary"
                  rules={[{ required: true, message: 'Vui lòng nhập mức lương tối thiểu!' }]}
                >
                  <InputNumber min={0} placeholder="Mức lương tối thiểu" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              {/* Max Salary */}
              <Col span={12}>
                <Form.Item
                  label="Mức lương tối đa"
                  name="maxSalary"
                  rules={[{ required: true, message: 'Vui lòng nhập mức lương tối đa!' }]}
                >
                  <InputNumber min={0} placeholder="Mức lương tối đa" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              {/* Is Deal */}
              <Col span={12}>
                <Form.Item
                  label="Đã thỏa thuận"
                  name="isDeal"
                  valuePropName="checked"
                >
                  <Select defaultValue={false} style={{ width: '100%' }}>
                    <Option value={false}>Không</Option>
                    <Option value={true}>Có</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                Gửi CV
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </UserLayout>
  );
};

export default CVPage;
