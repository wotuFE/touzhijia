import React, {Component} from 'react'
import  '../styles/Login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
Form.create()




class Login extends Component{

  handleSubmit(e) {
    console.log(`success`)
  }
 


  render() {
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
         <FormItem>
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        </FormItem>
        <FormItem>
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
            <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/index">register now!</a>
        </FormItem>
        </Form>
      </div>
    );
  }
}

export default Login