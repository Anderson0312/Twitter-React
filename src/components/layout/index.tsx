import  react  from "react";

import MenuBar  from "../menuBar";
import Main  from "../main";
import SideBar from "../SideBar";
import { Container, Wrapper } from "./styles";


const Layout : React.FC = () => {
    return (
        <Container> 
            <Wrapper> 
                <MenuBar />
                <Main />
                <SideBar />
            </ Wrapper>
        </ Container>
    );
}

export default Layout;