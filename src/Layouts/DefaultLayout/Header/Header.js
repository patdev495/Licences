import { Button, Input } from 'antd';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Notification } from '~/assets/images/notification.svg';
import { ReactComponent as User } from '~/assets/images/client.svg';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('Header')}>
            <div className={cx('Status')}></div>
            <div className={cx('Activities')}>
                <Input.Search
                    className={cx('Search')}
                    placeholder="Tìm kiếm..."
                ></Input.Search>
                <Button type="primary">Tạo mới</Button>

                <Notification className={cx('Noti')} />

                <User className={cx('User')} />
            </div>
        </div>
    );
}

export default Header;
