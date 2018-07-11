import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth: 300, margin: 'auto', marginTop: 60,
                paddingBottom: 10, paddingTop: 40, paddingLeft: 5, paddingRight: 5,
                border: 'solid 1px rgb(0,0,0,.25)', borderRadius: 5}}>

                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <style jsx>{`



            #components-form-demo-normal-login .login-form-button {
              width: 100%;
            }
      `}</style>

                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" style={{float: 'right', display: 'block'}} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>

            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;