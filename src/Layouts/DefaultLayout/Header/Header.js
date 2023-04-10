import {
    Badge,
    Breadcrumb,
    Button,
    Dropdown,
    Input,
    Menu,
    Tooltip,
} from 'antd';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Notification } from '~/assets/images/notification.svg';
import { ReactComponent as Searchs } from '~/assets/images/search.svg';

import Link from 'antd/es/typography/Link';
import React, { useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import Search from 'antd/es/transfer/search';
import UserInfomation from '~/components/UserInfomation/UserInfomation';

const cx = classNames.bind(styles);
function Header() {
    const [openInfomation, setOpenInfomation] = useState(false);
    return (
        <div className={cx('Header')}>
            <div className={cx('Status')}></div>
            <div className={cx('Activities')}>
                <Input.Search
                    className={cx('Search')}
                    placeholder="Tìm kiếm..."
                ></Input.Search>
                <Button type="primary">Tạo mới</Button>

                <Badge style={{ scale: '0.7' }} count={99} overflowCount={10}>
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
    );
}

export default Header;
