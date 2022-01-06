import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0, 127, 255)',
            light: 'rgba(0, 127, 255, .7)'
        },
        error: {
            main: '#dc3545',
        },
        buttonText: {
            main: '#fff',
        }
    }
});
