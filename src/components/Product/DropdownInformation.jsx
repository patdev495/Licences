import { Dropdown, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ModalUpdateProduct from './ModalUpdateProduct';
import { useNavigate } from 'react-router-dom';

function DropdownInformation(props) {
    const { dataProduct } = props;
    const [openModalUpdate, setOpenModalUpdate] = useState(false);

    const navigate = useNavigate();

    const items = [
        {
            label: (
                <span onClick={() => navigate(`/product/${dataProduct.key}`)}>
                    Xem thông tin
                </span>
            ),
            key: '0',
        },
        {
            label: (
                <span onClick={() => setOpenModalUpdate(true)}>Cập nhật</span>
            ),
            key: '1',
        },
        {
            label: (
                <>
                    {dataProduct && dataProduct.status === 'Đã kích hoạt' ? (
                        <span style={{ color: '#FE3821' }}>Hủy kích hoạt</span>
                    ) : (
                        <span style={{ color: '#2D8CF0' }}>Kích hoạt</span>
                    )}
                </>
            ),
            key: '3',
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <Space>
                    <EllipsisOutlined />
                </Space>
            </Dropdown>

            <ModalUpdateProduct
                openModalUpdate={openModalUpdate}
                setOpenModalUpdate={setOpenModalUpdate}
                dataProduct={dataProduct}
            />
        </>
    );
}

export default DropdownInformation;
