import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Modal from "../modal/Modal";
import {MainButton} from "../main-button/MainButtonStyle";
import {Wrapper} from "./AddNewCommentStyle";

const AddNewComment = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 599px)');

    const handleAddComment = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <Wrapper>
            {isMobile ?
                <MainButton variant="contained"
                            onClick={handleAddComment}>
                    <ChatBubbleOutlineIcon/>
                </MainButton>
                :
                <MainButton variant="contained"
                            onClick={handleAddComment}>
                    Add Comment
                </MainButton>
            }
            <Modal open={open}
                   onClose={handleClose}/>
        </Wrapper>
    );
};

export default AddNewComment;
