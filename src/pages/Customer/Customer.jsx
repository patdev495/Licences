import styles from './Customer.module.scss';
import classNames from 'classnames/bind';
import { Button, Col, Row, Table, Tag } from 'antd';
import DropdownInformation from '~/components/Product/DropdownInformation';
import './Customer.module.scss';
import { useEffect, useState } from 'react';
import ModalCreateCustomer from '~/components/Customer/CreateCustomer';
import { fetchListCustomer } from '~/api/customer/fetchListCustomer';

const cx = classNames.bind(styles);

const data = [
    {
        key: '1',
        name: 'John Brown',
        company: 'Công ty A',
        created_at: '15/1/2022',
        organization: 'Cá nhân',
        status: 'Đã kích hoạt',
        tags: ['HHHH', 'AAAA'],
    },
    {
        key: '2',
        name: 'Joe Black',
        company: 'Công ty B',
        created_at: '20/3/2022',
        organization: 'Doanh nghiệp',
        status: 'Không kích hoạt',
        tags: ['HHHH'],
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

function Customer() {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [dataProduct, setDataProduct] = useState({});
    const [listCustomer, setListCustomer] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCustomer();
    }, [current, pageSize]);

    const fetchCustomer = async () => {
        const query = `page=${current}&per_page${pageSize}`;
        const res = await fetchListCustomer(query);
        console.log(res);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Công ty',
            dataIndex: 'company',
            key: 'company',
            sorter: true,
        },
        {
            title: 'Thời điểm tạo',
            dataIndex: 'created_at',
            sorter: true,
        },
        {
            title: 'Loại',
            dataIndex: 'organization',
            filters: [
                {
                    text: 'Cá nhân',
                    value: 'Cá nhân',
                },
                {
                    text: 'Doanh nghiệp',
                    value: 'Doanh nghiệp',
                },
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
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
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag, index) => {
                        return (
                            <Tag color="black" key={index}>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '',
            render: (record) => {
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
        <>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <div className={cx('title')}>
                        <p>Table List Product</p>
                        <Button
                            type="primary"
                            onClick={() => setOpenModalCreate(true)}
                        >
                            Add Customer
                        </Button>
                    </div>
                </Col>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                        pagination={{
                            current: current,
                            pageSize: pageSize,
                            total: total,
                        }}
                    />
                </Col>
                <ModalCreateCustomer
                    openModalCreate={openModalCreate}
                    setOpenModalCreate={setOpenModalCreate}
                />
            </Row>
        </>
    );
}

export default Customer;
