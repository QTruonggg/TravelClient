import axiosInstance from '../utils/axiosInstance';

const pathLogin = "login";
const pathRegister = "register";

export const login = data => {
    return axiosInstance(pathLogin, "POST", data)
};
export const register = data => {
    return axiosInstance(pathRegister, "POST", data)
};
