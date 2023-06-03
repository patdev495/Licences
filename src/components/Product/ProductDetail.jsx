import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Button } from 'antd';
import ModalCreateKey from './ModalCreateKey';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [openModalCreate, setOpenModalCreate] = useState(false);

    return (
        <div className={cx('container')}>
            <div className={cx('content-left')}>
                <div className={cx('content-top')}>
                    <div className={cx('title')}>Chi tiết sản phẩm</div>
                    <div className={cx('body')}>
                        <p>Tên sản phẩm: ABC</p> <br />
                        <p>Sở hữu: Công Ty Cổ Phần An Toàn Thông Tin </p> <br />
                        <p>Email: email@gmail.com</p> <br />
                        <p>Số điện thoại: 034561234</p> <br />
                        <p>Địa chỉ: Hà Nội</p> <br />
                        <p>Thời điểm tạo: 14:41</p> <br />
                        <p>Mô tả: ABC</p> <br />
                        <p>Trạng thái: Khả dụng</p>
                    </div>
                </div>
                <div className={cx('content-bottom')}>
                    <div className={cx('title')}>Thông tin khóa</div>
                    <div className="b-body">
                        <Button
                            className={cx('btn')}
                            type="primary"
                            onClick={() => setOpenModalCreate(true)}
                        >
                            Tạo mới
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('content-right')}>
                <div className={cx('title')}>Option sản phẩm</div>
                <div className="right-body">
                    <Button className={cx('btn-option')} type="primary">
                        Tạo mới
                    </Button>
                </div>
            </div>
            <ModalCreateKey
                openModalCreate={openModalCreate}
                setOpenModalCreate={setOpenModalCreate}
            />
        </div>
    );
}

export default ProductDetail;
