import axios from '~/ultis/axiosCustomize';

export const fetchListCustomer = (query) => {
    return axios.get(`/customers?${query}`);
};
