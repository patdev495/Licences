import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
    const classes = cx('Sidebar');
    return <div className={classes}></div>;
}

export default Sidebar;
