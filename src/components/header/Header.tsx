import React from "react";
import {Layout} from "antd";
const {Header} = Layout

const HeaderComponent: React.FC = () => <Header style={{position: 'fixed', width: '100%', zIndex: 1}}>Header</Header>

export default HeaderComponent