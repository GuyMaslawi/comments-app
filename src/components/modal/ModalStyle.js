import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const TextFieldStyle = styled(TextField)({
    '& label': {
        fontSize: '1.7rem',
        lineHeight: 1
    },
    '& .MuiInputBase-input': {
        fontSize: '1.6rem'
    }
});
