import { Button, Form, Input } from 'antd';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Login() {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (value) => {
        setLoading(true);
        if (
            value.email === '1111@gmail.com' &&
            value.password === '11111111@A'
        ) {
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1000);
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
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
                    <Input placeholder="Nhập mật khẩu" type="password"></Input>
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className={cx('form-Item')}
                        loading={loading}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
