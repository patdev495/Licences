import classNames from 'classnames';
import styles from './UserInformationForm.module.scss';
import { Form, Input } from 'antd';

function UserInformationForm() {
    return (
        <Form style={{ width: '100%' }}>
            <Form.Item label="Họ và tên">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Email">
                <Input></Input>
            </Form.Item>
        </Form>
    );
}

export default UserInformationForm;
