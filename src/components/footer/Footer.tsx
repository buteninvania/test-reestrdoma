import React from "react";
import {Layout} from "antd";
const {Footer} = Layout

const FooterComponent: React.FC = () => {
    return (
        <Footer style={{background: 'white', textAlign: 'center'}}> <a href="https://github.com/buteninvania">@github</a> <a href="https://www.instagram.com/butyafan/?hl=ru">@butyafan</a> ButInProject @Smolensk 2021 Test HomeRegistryApp</Footer>
    )
}

export default FooterComponent