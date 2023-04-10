import { Modal, Tabs } from 'antd';
import styles from './UserInfomation.module.scss';
import classNames from 'classnames/bind';
import UserInformationForm from './components/UserInformationForm/UserInformationForm';

const cx = classNames.bind(styles);

function UserInfomation({ open, setOpenInfomation }) {
    return (
        <Modal
            open={open}
            title={<p style={{ textAlign: 'center' }}>Thông tin cá nhân</p>}
            onCancel={() => setOpenInfomation(!open)}
            footer={[]}
        >
            <div className={cx('tabInformation')}>
                <Tabs
                    style={{ display: 'flex', justifyContent: 'center' }}
                    defaultActiveKey="1"
                    items={[
                        {
                            key: '1',
                            label: 'Thông tin cá nhân',
                            children: <UserInformationForm />,
                        },
                        { key: '2', label: 'Đổi mật khẩu' },
                    ]}
                />
            </div>
        </Modal>
    );
}

export default UserInfomation;
