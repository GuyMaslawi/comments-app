import GlobalStyle from "./GlobalStyle";
import {Content} from "./AppStyle";
import Header from "./components/header/Header";
import Comments from "./components/comments/Comments";

const App = () => {
    return (
        <div>
            <Header title="Comments List"/>
            <GlobalStyle/>
            <Content>
                <Comments/>
            </Content>
        </div>
    );
}

export default App;
