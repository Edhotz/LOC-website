import React from "react";
import { Button, Card, Col, Form, Image, Input, Row, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthProvider/useAuth";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

import BG from "../../videos/video.jpg";

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  async function onFinish({ email, password }) {
    try {
      await auth.authenticate(email, password);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      message.error("Invalid email or password");
    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Col
        span={12}
        style={{
          position: "absolute",
          top: "200px",
          left: "50px",
          zIndex: "999",
        }}
      >
        <Card
          title="Faça login"
          style={{
            width: 400,
            height: 300,
          }}
        >
          <Form
            name="basic"
            labelCol={{ span: 30 }}
            wrapperCol={{ span: 30 }}
            onFinish={onFinish}
          >
            <FormItem name="email">
              <Input
                size="large"
                style={{
                  padding: 15,
                }}
                prefix={<UserOutlined />}
                placeholder="Email"
              />
            </FormItem>

            <FormItem name="password">
              <Input.Password
                style={{
                  padding: 15,
                }}
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </FormItem>

            <FormItem wrapperCol={{ offset: 0, span: 10 }}>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </FormItem>
          </Form>
        </Card>
      </Col>

      <Image
        src={BG}
        alt="background Image"
        preview={false}
        width="105%"
        height="100vh"
      />
    </Row>
  );
};

export default Login;
