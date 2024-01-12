// import { List } from "@mantine/core";
import React, { useState } from "react";
import styled from "styled-components"
import { NavLink, Router } from "react-router-dom"
import { Link } from 'react-router-dom';
const COLORS = {
    primaryDark: '#730f0f',
    primaryLight: '#ccc8c8',
};

const MenuLabel = styled.label`
background-color: ${COLORS.primaryLight};
position: fixed;
top: 0.5rem;
right: 1rem;
border-radius: 50%;
height: 3.5rem;
width: 3.5rem;
z-index: 1000;
cursor: pointer;
text-alligh: center;
`;

const NavBackground = styled.div`
position: fixed;
top: 0.5rem;
right: 1rem;
background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
);
height: 3rem;
width: 3rem;
min-width: 0%;
max-width: 100%;
border-radius: 50%;
z-index: 500;
transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
transition: transform 0.5s;
`;

const Icon = styled.span`
position: relative;
background-color: ${(props) => (props.clicked ? "transparent" : "black")};
width: 1.7rem;
height: 2px;
display: inline-block;
margin-top: 1.75rem;
margin-left: 0.9rem;
transition: all 0.3s;

&::before,
&::after{
    content: "";
    background-color: black;
    width: 1.7rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
}

&::before{
    top:${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform:${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
} 
 
&::after{
    top:${(props) => (props.clicked ? "0" : "0.5rem")};
    transform:${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};

}

`;

const Navigation = styled.nav`
height: 100vh;
position: fixed;
top: 0;
right: 0;
z-index: 600;
min-width: 0%;
width: ${(props) => (props.clicked ? "100%" : "0%")};
text-align: center;
`;

const ItemLink = styled(NavLink)
    `
    display: ${(props) => (props.clicked ? "inline-block" : "none")};
    min-width: 0px;
    display: inline-block;
    font-size: 2rem;
    font-weight: 300;
    font-family: sans-serif;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;
`;

const List = styled.ul`
display: ${(props) => (props.clicked ? "inline-block" : "none")};
position: absolute;
list-style: none;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
width: 100%;
min-width: 0%;
`;

const HamburgerMenu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>

            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </MenuLabel>

            <NavBackground clicked={click}> </NavBackground>
            <Navigation clicked={click}>
                <List clicked={click}>
                    <li>
                        <ItemLink onClick={handleClick} to={'/Home'}>
                            Главная
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to={'/Adults'}>
                            Взрослым
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to={'/Children'}>
                            Детям
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to={'/ConversationClub'}>
                            Разговорные клубы
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to={'/Exams'}>
                            Экзамены
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to={'/Languages'}>
                            Языки
                        </ItemLink>
                    </li>
                </List>
            </Navigation>

        </>
    );
}

export default HamburgerMenu;