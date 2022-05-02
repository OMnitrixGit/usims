import axios from "./axios";

export const get_user_page = params => axios({
    url: '/user/list',
    params: params,
    method: 'get'
})