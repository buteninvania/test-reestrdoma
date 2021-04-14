import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import "antd/dist/antd.css";
import {Layout} from "antd";
import HeaderComponent from "./components/header/Header";
import ContentComponent from "./components/content/ContentComponent";

export const HomeRegistryApp: React.FC = () => {
    return (
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    )
}

const App: React.FC = () => {
    return (
        <Layout>
            <HeaderComponent/>
            <ContentComponent/>
        </Layout>
    )
}

