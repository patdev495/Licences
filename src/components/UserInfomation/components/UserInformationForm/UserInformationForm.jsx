import classNames from 'classnames/bind';
import styles from './UserInformationForm.module.scss';
import { Divider, Form, Input } from 'antd';

const cx = classNames.bind(styles);
function UserInformationForm() {
    return (
        <Form
            style={{ width: '100%' }}
            layout="vertical"
            className={cx('form')}
        >
            <Form.Item label="Họ và tên" name="name">
                <Input></Input>
            </Form.Item>

            <Form.Item label="Email" name="email">
                <Input></Input>
            </Form.Item>
            <div className={cx('item_horizontal')}>
                <Form.Item label="Quyền" name="role">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Trạng Thái" name="status">
                    <Input></Input>
                </Form.Item>
            </div>
            <div className={cx('item_horizontal')}>
                <Form.Item label="Ngày tạo" name="initDate">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Lần đăng nhập cuối" name="lastLogin">
                    <Input></Input>
                </Form.Item>
            </div>
        </Form>
    );
}

export default UserInformationForm;
