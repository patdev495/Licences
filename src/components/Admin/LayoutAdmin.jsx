import classNames from 'classnames/bind';
import styles from './LayoutAdmin.module.scss';
import { default as Images } from '~/assets/images';
import { ReactComponent as Licence } from '~/assets/images/licence.svg';
import { ReactComponent as Computer } from '~/assets/images/computer.svg';
import { ReactComponent as Client } from '~/assets/images/client.svg';
import { ReactComponent as Notification } from '~/assets/images/notification.svg';
import { Layout, Menu, Button, Input, Badge } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import UserInfo from '../../Layouts/DefaultLayout/Header/components/UserInfo/UserInfo';
import UserInfomation from '~/components/UserInfomation/UserInfomation';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const { Sider, Content } = Layout;

const cx = classNames.bind(styles);

const items = [
    {
        label: <Link to="">Bản Quyền</Link>,
        key: 'Bản Quyền',
        icon: <Licence />,
    },
    {
        label: <Link to="/product">Sản Phẩm</Link>,
        key: 'Sản Phẩm',
        icon: <Computer />,
    },
    {
        label: <Link to="">Khách Hàng</Link>,
        key: 'Khách Hàng',
        icon: <Client />,
    },
];

function LayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Bản Quyền');
    const [openInfomation, setOpenInfomation] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }} className={cx('layout-admin')}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                trigger={null}
            >
                {collapsed === true ? (
                    <img
                        src={Images.cyradar}
                        alt="ss"
                        style={{ padding: '5px 27px' }}
                    />
                ) : (
                    <div className={cx('sidebar-header')}>
                        <h4>CyRadar</h4>
                        <img src={Images.cyradar} alt="ss" />
                    </div>
                )}

                <Menu
                    theme="dark"
                    defaultSelectedKeys={[activeMenu]}
                    mode="inline"
                    items={items}
                    onClick={(e) => setActiveMenu(e.key)}
                />
            </Sider>
            <Layout>
                <div className={cx('admin-header')}>
                    <Button
                        className={cx('trigger')}
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            border: 'none',
                        }}
                    />
                    <div className={cx('Activities')}>
                        <Input.Search
                            className={cx('Search')}
                            placeholder="Tìm kiếm..."
                        ></Input.Search>
                        <Button type="primary">Tạo mới</Button>

                        <Badge
                            style={{ scale: '0.7' }}
                            count={99}
                            overflowCount={10}
                        >
                            <Button
                                type="text"
                                icon={<Notification className={cx('Noti')} />}
                            ></Button>
                        </Badge>
                        <UserInfo setOpenInfomation={setOpenInfomation} />
                        <UserInfomation
                            open={openInfomation}
                            setOpenInfomation={setOpenInfomation}
                        />
                    </div>
                </div>
                <Content
                    style={{
                        margin: '3px 6px',
                        padding: '10px',
                        background: 'rgb(255,255,255)',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;
