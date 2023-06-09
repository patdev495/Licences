import { useEffect, useState } from 'react';

const { Modal, Divider, Form, Input, Row, Col } = require('antd');

function ModalUpdateCustomer(props) {
    const { openModalUpdate, setOpenModalUpdate, dataProduct } = props;
    const [isSubmit, setIsSubmit] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(dataProduct);
    }, [dataProduct]);

    return (
        <>
            <Modal
                title="Cập nhật khách hàng"
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
                confirmLoading={isSubmit}
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
                                label="Tên khách hàng"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Tên khách hàng không được để trống',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Công ty"
                                name="company"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'tên công ty không được để trống',
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
                                name="phone"
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
                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Phân loại"
                                name="type"
                            >
                                <Select style={{ textAlign: 'left' }}>
                                    {options.map((item, index) => (
                                        <Select.Option
                                            key={index}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Ngày sinh"
                                name="birthday"
                            >
                                <DatePicker
                                    format={format}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Địa chỉ"
                                name="address"
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Tags"
                                name="tags"
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Mô tả"
                                name="describe"
                            >
                                <Input.TextArea rows={1} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default ModalUpdateCustomer;
