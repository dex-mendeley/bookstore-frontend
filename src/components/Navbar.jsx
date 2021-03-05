import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    border: 1px solid lightgrey;
    padding: 1rem;
    background: darkgrey;
    width: 100%;
`;

const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const NavigationItem = styled.li`
    margin: 0 0.5rem;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-family: sans-serif;

    &:hover {
        color: black;
    }
`;

const Logo = styled(Link)`
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 2rem;
    text-decoration: none;
    color: black;
    font-family: serif;
`;

export const Navbar = () => (
    <NavbarContainer>
        <Navigation>
            <Logo to="/home">BookStore</Logo>
            <NavigationItem>
                <Link to="/books">Books</Link>
            </NavigationItem>
        </Navigation>
    </NavbarContainer>
);

export default Navbar;
