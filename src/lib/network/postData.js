import { compose } from "recompose";
import post from './post'
import successFilter from './success-filter'

const _postData = ({ url, data }) => {
    post(url, data).then(response => response.data);
};

const postData = compose(successFilter, _postData);

export default postData;