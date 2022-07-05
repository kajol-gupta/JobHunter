import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function Register() {
  const dispatch = useDispatch()
  function register(values) {

    if (values.password !== values.confirmpassword) {
      message.error('Passwords do not match')
    } else {
      console.log(values)
      dispatch(registerUser(values))
    }
  }

  return (
    <div className="register">
      <Row justify="center" className='flex align-items-center'>
        <Col lg={5}><h1 className="heading1" >Job</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 register-form">
          <h3>Register</h3>
          <hr color="black" />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'Please enter your username!',
              },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{
                required: true,
                message: 'Please enter your password!',
              },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              label="Confirm password"
              name="confirmpassword"
              rules={[{
                required: true,
                message: 'Please enter your password again!',
              },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Button htmlType="submit" className='mb-3' >Register</Button> <br />

            <Link to='/login' className='mt-3'>Already registered ? , Click here to login!</Link>
          </Form>
        </Col>
        <Col lg={5}><h1 className='heading2'  >Hunter</h1></Col>
      </Row>
    </div>
  );
}

export default Register;