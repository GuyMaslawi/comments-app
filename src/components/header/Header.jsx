import PropTypes from "prop-types";
import {Bar, Content, Title} from "./HeaderStyle";
import AddNewComment from "../add-new-comment/AddNewComment";

const Header = ({title}) => {
    return (
        <Bar>
            <Content>
                <AddNewComment/>
                <Title>{title}</Title>
            </Content>
        </Bar>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
