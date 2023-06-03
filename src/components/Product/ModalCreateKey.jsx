import { Modal, Tabs, Select } from 'antd';
import UploadKey from './UploadKey';
import styles from './ModalCreateKey.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ModalCreateKey(props) {
    const { openModalCreate, setOpenModalCreate } = props;

    return (
        <>
            <Modal
                title="Tạo khóa sản phẩm"
                open={openModalCreate}
                // onOk=
                onCancel={() => setOpenModalCreate(false)}
                okText={'Tạo mới'}
                cancelText={'Bỏ qua'}
                centered={true}
                maskClosable={false}
                style={{ textAlign: 'center' }}
            >
                <Tabs
                    centered="true"
                    defaultActiveKey="1"
                    items={[
                        {
                            key: '1',
                            label: 'Tạo khóa mới',
                            children: (
                                <>
                                    Loại khóa
                                    <Select
                                        defaultValue="RSA 2048"
                                        style={{
                                            width: 450,
                                            textAlign: 'left',
                                        }}
                                        options={[
                                            {
                                                value: 'RSA 2048',
                                                label: 'RSA 2048',
                                            },
                                            {
                                                value: 'DES 128',
                                                label: 'DES 128',
                                            },
                                        ]}
                                    />
                                </>
                            ),
                        },
                        {
                            key: '2',
                            label: 'Tải khóa lên',
                            children: (
                                <>
                                    <div>
                                        <label>Loại khóa</label>
                                        <Select
                                            defaultValue="RSA 2048"
                                            style={{
                                                width: 450,
                                                textAlign: 'left',
                                            }}
                                            options={[
                                                {
                                                    value: 'RSA 2048',
                                                    label: 'RSA 2048',
                                                },
                                                {
                                                    value: 'DES 128',
                                                    label: 'DES 128',
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className={cx('container-bottom')}>
                                        <div>
                                            <label>Public key: </label>
                                            <UploadKey />
                                        </div>
                                        <div>
                                            <label
                                                style={{ marginRight: '5px' }}
                                            >
                                                Private key:
                                            </label>
                                            <UploadKey />
                                        </div>
                                    </div>
                                </>
                            ),
                        },
                    ]}
                />
            </Modal>
        </>
    );
}

export default ModalCreateKey;
