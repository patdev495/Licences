import { Modal, Tabs } from 'antd';
import styles from './UserInfomation.module.scss';
import classNames from 'classnames/bind';
import UserInformationForm from './components/UserInformationForm/UserInformationForm';
import TabPane from 'antd/es/tabs/TabPane';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';

const cx = classNames.bind(styles);

function UserInfomation({ open, setOpenInfomation }) {
    return (
        <Modal
            className={cx('Modal_Infomation')}
            open={open}
            title={
                <p
                    style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        color: 'red',
                        fontSize: '20px',
                    }}
                >
                    Thông tin cá nhân
                </p>
            }
            onCancel={() => setOpenInfomation(!open)}
            footer={[]}
            width="600px"
        >
            <div className={cx('tabInformation')}>
                <Tabs
                    tabBarStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: '50%',
                        transform: 'translateX(-50%)',
                        fontWeight: '600',
                    }}
                    defaultActiveKey="1"
                    items={[
                        {
                            key: '1',
                            label: 'Thông tin cá nhân',
                            children: <UserInformationForm />,
                        },
                        {
                            key: '2',
                            label: 'Đổi mật khẩu',
                            children: <ChangePasswordForm />,
                        },
                    ]}
                ></Tabs>
            </div>
        </Modal>
    );
}

export default UserInfomation;
