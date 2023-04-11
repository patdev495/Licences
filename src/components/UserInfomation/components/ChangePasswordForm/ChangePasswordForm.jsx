import classNames from 'classnames/bind';
import styles from './ChangePasswordForm.module.scss';
import { Button, Form, Input, Space } from 'antd';

const cx = classNames.bind(styles);

function ChangePasswordForm() {
    return (
        <Form layout="vertical" className={cx('passwordForm')}>
            <Form.Item label="Mật khẩu hiện tại" name="recentPassword">
                <Input.Password
                    placeholder="Nhập mật khẩu hiện tại"
                    style={{ outline: 'none' }}
                />
            </Form.Item>
            <Form.Item label="Mật khẩu mới" name="newPassword">
                <Input.Password placeholder="Nhập mật khẩu mới" />
            </Form.Item>
            <Form.Item label="Nhập lại mật khẩu mới" name="confirmPassword">
                <Input.Password placeholder="Nhập mật khẩu mới" />
            </Form.Item>
            <div className={cx('form-footer')}>
                <Button type="primary">Đổi mật khẩu</Button>
                <Space />
                <Button>Bỏ qua</Button>
            </div>
        </Form>
    );
}

export default ChangePasswordForm;
