import {ThemeProvider} from '@mui/material/styles';
import {StylesProvider} from "@mui/styles";
import App from "./App";
import {theme} from "./theme";

export const AppContainer = () => {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default AppContainer;
