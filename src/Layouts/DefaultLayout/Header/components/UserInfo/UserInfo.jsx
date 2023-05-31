import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '~/assets/images/client.svg';

const cx = classNames.bind(styles);

function UserInfo({ setOpenInfomation }) {
    return (
        <Dropdown
            trigger="click"
            className={cx('Dropdown')}
            dropdownRender={() => (
                <Menu
                    style={{ padding: '20px', cursor: 'pointer' }}
                    items={[
                        {
                            key: '0',
                            label: (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        marginLeft: '-20px',
                                        fontSize: '12px',
                                        userSelect: 'none',
                                    }}
                                >
                                    <p style={{ color: 'rgba(0, 0, 0, 0.52)' }}>
                                        Quản trị
                                    </p>
                                    <p style={{ color: 'blue' }}>Admin</p>
                                </div>
                            ),
                            disabled: true,
                        },
                        {
                            key: '1',
                            label: <Link>Thông tin cá nhân</Link>,
                            onClick: () => setOpenInfomation(true),
                        },
                        {
                            key: '2',
                            label: <Link>Cấu hình thiết bị</Link>,
                        },
                        {
                            key: '3',
                            label: (
                                <Link style={{ color: 'red' }}>Đăng Xuất</Link>
                            ),
                        },
                    ]}
                ></Menu>
            )}
        >
            <User className={cx('User')} />
        </Dropdown>
    );
}

export default UserInfo;
