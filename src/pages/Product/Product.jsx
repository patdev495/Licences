import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { Table, Row, Col, Button } from 'antd';
import { useState } from 'react';
import ModalCreateProduct from '~/components/Product/ModalCreateProduct';
import DropdownInformation from '~/components/Product/DropdownInformation';
import './Product.module.scss';

const cx = classNames.bind(styles);

const data = [
    {
        key: '1',
        name: 'Phuong',
        own: 'Công ty mô giới bất động sản',
        email: '123@gmail.com',
        phone_number: '012345678',
        address: 'Hà Nội',
        descript: 'abc',
        create_time: '14:41 11/2/2002',
        user: 'Admin',
        status: 'Đã kích hoạt',
        last_time: '15:00 15/3/2002',
    },
    {
        key: '2',
        name: 'Thanh',
        own: 'Công ty Toyota',
        email: '456@gmail.com',
        phone_number: '0125876678',
        address: 'Thanh Hóa',
        descript: 'xyz',
        create_time: '13:11 14/2/2002',
        user: 'Admin',
        status: 'Đã kích hoạt',
        last_time: '15:00 15/2/2002',
    },
    {
        key: '3',
        name: 'Nghia',
        own: 'Công ty SamSung',
        email: 'samsung@gmail.com',
        phone_number: '02154678',
        address: 'Korea',
        descript: 'good',
        create_time: '6:00 10/3/2002',
        user: 'User',
        status: 'Không kích hoạt',
        last_time: '8:00 27/5/2002',
    },
    {
        key: '4',
        name: 'Hue',
        own: 'Công ty xăng dầu Thành Đạt',
        email: 'datthanh@gmail.com',
        phone_number: '092928898',
        address: 'Hà Nội',
        descript: 'abc',
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
            title: 'Sở hữu',
            dataIndex: 'own',
            hidden: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            hidden: true,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone_number',
            hidden: true,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            hidden: true,
        },
        {
            title: 'Mô tả',
            dataIndex: 'descript',
            hidden: true,
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
            render: (text) => {
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
    ].filter((item) => !item.hidden);

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
