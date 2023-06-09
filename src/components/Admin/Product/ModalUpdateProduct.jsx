import { useEffect } from 'react';

const { Modal, Divider, Form, Input, Row, Col } = require('antd');

function ModalUpdateProduct(props) {
    const { openModalUpdate, setOpenModalUpdate, dataProduct } = props;
    // const [isSubmit, setIsSubmit] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(dataProduct);
    }, [dataProduct]);

    return (
        <>
            <Modal
                title="Cập nhật sản phẩm"
                open={openModalUpdate}
                onOk={() => {
                    form.submit();
                }}
                onCancel={() => setOpenModalUpdate(false)}
                okText={'Cập nhật'}
                cancelText={'Hủy'}
                centered={true}
                maskClosable={false}
                style={{ textAlign: 'center' }}
                // confirmLoading={isSubmit}
            >
                <Divider />

                <Form
                    form={form}
                    name="basic"
                    style={{ maxWidth: 600 }}
                    // onFinish={onFinish}
                    autoComplete="off"
                >
                    <Row gutter={[20, 10]}>
                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Tên sản phẩm"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Tên sản phẩm không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Sở hữu"
                                name="own"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Sở hữu không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'email không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Số điện thoại"
                                name="phone_number"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Số điện thoại không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Địa chỉ"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Địa chỉ không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Mô tả"
                                name="descript"
                            >
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default ModalUpdateProduct;
