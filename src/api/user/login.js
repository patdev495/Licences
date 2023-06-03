import axios from '~/ultis/axiosCustomize';

export const CallLogin = (email, password) => {
    return axios.post('/auth/log-in', {
        email,
        password,
    });
};
