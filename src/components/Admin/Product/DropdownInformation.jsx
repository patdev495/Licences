import { Dropdown, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ModalUpdateProduct from './ModalUpdateProduct';

function DropdownInformation(props) {
    const { dataProduct } = props;
    console.log(dataProduct);

    const [openModalUpdate, setOpenModalUpdate] = useState(false);

    const items = [
        {
            label: 'Xem thông tin',
            key: '0',
        },
        {
            label: <a onClick={() => setOpenModalUpdate(true)}>Cập nhật</a>,
            key: '1',
        },
        {
            label: 'Hủy kích hoạt',
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
