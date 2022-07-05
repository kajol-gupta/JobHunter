import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


function Login() {
  const dispatch = useDispatch()
  function login(values) {

    dispatch(loginUser(values))
  }
  return (
    <div className="login" >
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}><h1 className="heading1" >Job</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Login</h3>
          <hr color="black" />
          <Form layout="vertical" onFinish={login}>
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
              name="remember"
              valuePropName="checked"
            >

              <Checkbox> Remember me </Checkbox>
            </Form.Item>



            <Button htmlType="submit" className='mb-3'>Login</Button><br />

            <Link to='/register' className='mt-3'>Not registered? , Click here to register!</Link>
          </Form>
        </Col>
        <Col lg={5}><h1 className='heading2' data-aos='slide-left'>Hunter</h1></Col>
      </Row>
    </div>
  );
}

export default Login;