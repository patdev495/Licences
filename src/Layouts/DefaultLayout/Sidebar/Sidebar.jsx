import { Link, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { default as Images } from '~/assets/images';
import { ReactComponent as Licence } from '~/assets/images/licence.svg';
import { ReactComponent as Computer } from '~/assets/images/computer.svg';
import { ReactComponent as Client } from '~/assets/images/client.svg';
import { Menu } from 'antd';
const cx = classNames.bind(styles);
function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={cx('Sidebar')}>
            <div className={cx('Sidebar-Header')}>
                <h4>CyRadar</h4>
                <img src={Images.cyradar} alt="ss" />
            </div>
            <Menu
                className={cx('MainMenu')}
                defaultActiveFirst={false}
                items={[
                    {
                        label: 'Bản Quyền',
                        icon: <Licence />,
                        onClick: () => navigate('/Login'),
                    },
                    {
                        label: 'Sản Phẩm',
                        icon: <Computer />,
                    },
                    { label: 'Khách Hàng', icon: <Client /> },
                ]}
            ></Menu>
        </div>
    );
}

export default Sidebar;
