import axios from '~/ultis/axiosCustomize';

export const CreateProduct = (
    name,
    description,
    company,
    email,
    phone,
    address,
    status,
) => {
    return axios.post('/product', {
        name,
        description,
        company,
        email,
        phone,
        address,
        status,
    });
};
