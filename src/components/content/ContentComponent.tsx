import React from "react";
import {Layout} from "antd";
import {useSelector} from "react-redux";
import {isAuthSelector} from "../../redux/auth-selector";
import CompaniesList from "./CompaniesList";
import AuthorizationForm from "./AuthorizationForm";

const {Content} = Layout

const ContentComponent: React.FC = () => {

    const auth = useSelector(isAuthSelector)

    return (
        <Content style={{background: '#ccc', marginTop: 64, padding: 40}}>
            <div style={{padding: 20, minHeight: 800, background: 'white'}}>
                {auth ? <CompaniesList/> : <AuthorizationForm/>}
            </div>
        </Content>
    )
}

export default ContentComponent




