import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Form, Input, Button } from 'antd';
const cx = classNames.bind(styles);
function Login() {
    const onFinish = () => {};
    const regexLength = /^.{8,}$/;
    const regexSpecial = /^(?=.*[A-Z])(?=.*[@#$%^&*!]).+$/;

    const validatorPassword = (rule, value, callback) => {
        if (!value) callback('Bạn chưa nhập mật khẩu');
        else if (!regexLength.test(value)) {
            callback('Mật khẩu tối thiểu 8 kí tự');
        } else if (!regexSpecial.test(value))
            callback('Mật khẩu chứa ít nhất 1 chữ hoa và 1 kí tự đặc biệt');
    };

    return (
        <div className={cx('Login')}>
            <Form
                name="loginForm"
                onFinish={onFinish}
                layout="vertical"
                requiredMark={false}
            >
                <h1 className={cx('Form-title')}>CyRadar License Management</h1>
                <Form.Item
                    className={cx('form-Item')}
                    label="Địa chỉ email"
                    name="username"
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

                <Form.Item name="submit">
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className={cx('form-Item')}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
