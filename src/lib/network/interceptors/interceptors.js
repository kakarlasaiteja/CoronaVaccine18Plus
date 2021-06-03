import axios from 'axios'

import { FailureMessageBean } from "../../message-util/FailureMessageBean";

axios.interceptors.response.use(response => {
    return response.headers['content-type'] === 'text/html' || response.headers['content-type'] === 'text/html;charset=UTF-8' || response.headers['content-type'] === 'text/html; charset=UTF-8' ? Promise.reject(FailureMessageBean({ message: 'Error Communicating with server', systemError: true, })) : response.data
})