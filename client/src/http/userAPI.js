import {$host, $authHost} from "./index";

export const registration = async (email, password) => {
    return await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
}

export const login = async (email, password) => {
    return await $host.post('api/user/login', {email, password})
}

export const check = async () => {
    return await $host.post('/api/auth/registration')
}