import PropTypes from 'prop-types';
import {Wrapper} from "./OneCommentStyle";

const OneComment = ({children}) => {
    return <Wrapper>{children}</Wrapper>;
};

OneComment.propTypes = {
    children: PropTypes.string
};

export default OneComment;
