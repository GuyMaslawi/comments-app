import {useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TextFieldStyle} from "./ModalStyle";
import {MainButton} from "../main-button/MainButtonStyle";

const Modal = ({open, onClose}) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => setValue(event.target.value);

    const handleAddNewComment = (val) => {
        axios.post('https://test.steps.me/test/testAssignComment', {val})
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => onClose());
    };

    return (
        <Dialog open={open}
                fullWidth
                maxWidth="xs"
                onClose={onClose}>
            <DialogTitle>Add New Comment</DialogTitle>
            <DialogContent>
                <TextFieldStyle
                    autoFocus
                    margin="normal"
                    label="Comment"
                    type="text"
                    fullWidth
                    multiline
                    onChange={event => handleChange(event)}
                    value={value}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}
                        sx={{fontSize: '1.5rem'}}>
                    Cancel
                </Button>
                <MainButton onClick={() => handleAddNewComment(value)}
                        sx={{fontSize: '1.5rem'}}>
                    Send
                </MainButton>
            </DialogActions>
        </Dialog>
    );
};

Modal.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
};

export default Modal;
