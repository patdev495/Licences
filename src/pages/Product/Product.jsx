import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { Table, Row, Col, Button } from 'antd';

import { useState } from 'react';
import ModalCreateProduct from '../../components/Admin/Product/ModalCreateProduct';
import DropdownInformation from '~/components/Admin/Product/DropdownInformation';
import './Product.module.scss';

const cx = classNames.bind(styles);

const data = [
    {
        key: '1',
        name: 'Phuong',
        create_time: '14:41 11/2/2002',
        user: 'Admin',
        status: 'Đã kích hoạt',
        last_time: '15:00 15/3/2002',
    },
    {
        key: '2',
        name: 'Thanh',
        create_time: '13:11 14/2/2002',
        user: 'Admin',
        status: 'Đã kích hoạt',
        last_time: '15:00 15/2/2002',
    },
    {
        key: '3',
        name: 'Nghia',
        create_time: '6:00 10/3/2002',
        user: 'User',
        status: 'Không kích hoạt',
        last_time: '8:00 27/5/2002',
    },
    {
        key: '4',
        name: 'Hue',
        create_time: '7:00 22/4/2002',
        user: 'User',
        status: 'Không kích hoạt',
        last_time: '15:00 21/7/2002',
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

function Product() {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [dataProduct, setDataProduct] = useState({});

    const colums = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: 'Thời điểm tạo',
            dataIndex: 'create_time',
            sorter: true,
        },
        {
            title: 'Người tạo',
            dataIndex: 'user',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (text, record) => {
                return {
                    props: {
                        style: {
                            color:
                                text === 'Đã kích hoạt' ? '#2D8CF0' : '#FE3821',
                        },
                    },
                    children: <div>{text}</div>,
                };
            },
            filters: [
                {
                    text: 'Đã kích hoạt',
                    value: 'Đã kích hoạt',
                },
                {
                    text: 'Không kích hoạt',
                    value: 'Không kích hoạt',
                },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Cập nhật lần cuối',
            dataIndex: 'last_time',
            sorter: true,
        },
        {
            title: '',
            render: (text, record, index) => {
                return (
                    <span
                        onClick={() => {
                            setDataProduct(record);
                        }}
                    >
                        <DropdownInformation dataProduct={dataProduct} />
                    </span>
                );
            },
        },
    ];

    return (
        <Row gutter={[20, 20]}>
            <Col span={24}>
                <div className={cx('title')}>
                    <p>Table List Product</p>
                    <Button
                        type="primary"
                        onClick={() => setOpenModalCreate(true)}
                    >
                        Add Product
                    </Button>
                </div>
            </Col>
            <Col span={24}>
                <Table columns={colums} dataSource={data} onChange={onChange} />
            </Col>
            <ModalCreateProduct
                openModalCreate={openModalCreate}
                setOpenModalCreate={setOpenModalCreate}
            />
        </Row>
    );
}

export default Product;
