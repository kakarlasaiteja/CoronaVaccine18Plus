/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

import './interceptors/interceptors'

export const pluck = (keys, map) => {
    const newObj = _extends({}, map);
    keys.forEach(key =>
        delete newObj[key]
    );
    return newObj;
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }

export default (props => {
    let options = Object.assign({}, pluck(['url'], props));
    let url = props.url;
    let headers = {
        "accept-language": "en-US",
        "accept": "application/json"
    }

    options.headers = Object.assign({}, options.headers, headers)

    return axios.get(url, options);
})