import { Col, Menu, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import images from '~/assets/images';
import Sidebar from '~/components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sider from 'antd/es/layout/Sider';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <Row style={{ height: '100%' }}>
            <Col span={3} className={cx('sidebar')}>
                <div className={cx('sidebar-header')}>
                    <div className={cx('title')}>CyRaDar</div>
                    <img src={images.cyradar} alt="" />
                </div>

                <Menu items={[{ label: 'Bản quyền' }]}></Menu>
            </Col>
            <Col span={21}>
                <row>
                    <Header></Header>
                </row>
                <row>
                    <Content></Content>
                </row>
            </Col>
        </Row>
    );
}

export default DefaultLayout;
