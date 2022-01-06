import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

export const MainButton = styled(Button)(({theme}) => ({
    color: theme.palette.buttonText.main,
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.6rem',

    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    }
}));
