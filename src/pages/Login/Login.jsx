import { Button, Form, Input, message, notification } from 'antd';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { CallLogin } from '~/api/user/login';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Login() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (value) => {
        const { email, password } = value;
        setIsSubmit(true);
        const res = await CallLogin(email, password);
        setIsSubmit(false);
        if (res?.data) {
            localStorage.setItem('access_token', res.data.Data.access_token);
            message.success('Đăng nhập thành công');
            navigate('/');
        } else {
            notification.error({
                message: 'Có lỗi xảy ra',
                description: <>Tài khoản hoặc mật khẩu không chính xác</>,
                duration: 5,
            });
        }
    };

    const regexLength = /^.{8,}$/;
    const regexSpecial = /^(?=.*[A-Z])(?=.*[@#$%^&*!]).+$/;

    const validatorPassword = (rule, value) => {
        if (!value) return Promise.reject('Bạn chưa nhập mật khẩu');
        else if (!regexLength.test(value)) {
            return Promise.reject('Mật khẩu tối thiểu 8 kí tự');
        } else if (!regexSpecial.test(value))
            return Promise.reject(
                'Mật khẩu chứa ít nhất 1 chữ hoa và 1 kí tự đặc biệt',
            );
        else return Promise.resolve();
    };

    return (
        <div className={cx('Login')}>
            <Form
                name="loginForm"
                layout="vertical"
                requiredMark={false}
                form={form}
                onFinish={onFinish}
            >
                <h1 onClick={() => navigate(-1)} className={cx('Form-title')}>
                    CyRadar License Management
                </h1>
                <Form.Item
                    className={cx('form-Item')}
                    label="Địa chỉ email"
                    name="email"
                    rules={[
                        { required: true, message: 'Bạn chưa nhập email!' },
                        {
                            type: 'email',
                            message: 'Địa chỉ email không hợp lệ',
                        },
                    ]}
                >
                    <Input placeholder="Nhập địa chỉ email"></Input>
                </Form.Item>

                <Form.Item
                    className={cx('form-Item')}
                    label="Mật khẩu"
                    name="password"
                    rules={[{ validator: validatorPassword }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
                {/* {checkLogin && (
                    <div className={cx('loginFail')} style={{ color: 'red' }}>
                        Sai tên đăng nhập hoặc mật khẩu!
                    </div>
                )} */}
                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className={cx('form-Item')}
                        loading={isSubmit}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
