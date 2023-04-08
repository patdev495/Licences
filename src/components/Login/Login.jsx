import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Form, Input, Button } from 'antd';
const cx = classNames.bind(styles);
function Login() {
    const onFinish = () => {};

    const validatorPassword = (rule, value, callback) => {
        const regexLength = /^.{8,}$/;
        const regexSpecial =
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z]).{8,}$/;

        if (value && !regexLength.test(value)) {
            callback('Mật khẩu tối thiểu 8 kí tự');
        } else if (regexSpecial.test(value))
            callback('Mật khẩu phải chứa kí tự viết Hoa và Kí tự đặc biệt!');
        else callback();
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
                    ]}
                >
                    <Input placeholder="Nhập địa chỉ email"></Input>
                </Form.Item>

                <Form.Item
                    className={cx('form-Item')}
                    label="Mật khẩu"
                    name="password"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Bạn chưa nhập mật khẩu!' },
                        { validator: validatorPassword },
                    ]}
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
