import { Col, Menu, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import images from '~/assets/images';
import Sidebar from '~/Layouts/DefaultLayout/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sider from 'antd/es/layout/Sider';
import Header from './Header/Header';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <Row className={cx('DefaultLayout')}>
            <Col span={3}>
                <Sidebar />
            </Col>
            <Col span={21}>
                <Header />
                <Content className={cx('Content')}>{children}</Content>
            </Col>
        </Row>
    );
}

export default DefaultLayout;
