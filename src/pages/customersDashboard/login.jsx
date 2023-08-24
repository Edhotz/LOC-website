import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Input, Row, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthProvider/useAuth";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

import BG from "../../images/loginbg.jpg";

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  async function onFinish({ email, password }) {
    setIsLoading(true);
    try {
      await auth.authenticateCustomer(email, password);
      history.push("/clients/main-page");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      message.error("Invalid email or password");
    }
  }

  return (
    <Row
      justify="space-between"
      align="stretch"
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Col
        span={12}
        style={{
          position: "absolute",
          top: "200px",
          right: "150px",
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
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {isLoading ? (
                  <Dots color="#727981" size={14} speed={1} animating={true} />
                ) : (
                  "Entrar"
                )}
              </Button>
            </FormItem>
          </Form>
        </Card>
      </Col>

      <Image
        src={BG}
        alt="background Image"
        preview={false}
        width="60%"
        height="100%"
      />
    </Row>
  );
};

export default Login;
