import styled from 'styled-components';

import { SidebarItemTextStyled, SidebarItemStyled } from './SidebarItem.styles';

const defaultProps = {
    theme: {
        primaryBg: '#23232e',
        secondaryBg: '#141418',
        primaryColor: '#b6b6b6',
        secondaryColor: '#ececec',
        accentColor: 'blue',
    },
};

export const SidebarStyled = styled.nav`
    width: 5rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primaryBg};
    transition: width 0.2s ease;

    @media only screen and (min-width: 600px) {
        &:hover ${SidebarItemTextStyled} {
            display: block;
        }

        &:hover {
            width: 16rem;
        }
    }
    @media only screen and (max-width: 600px) {
        top: initial;
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }
`;

export const SidebarItemListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media only screen and (max-width: 600px) {
        flex-direction: row;
        justify-content: space-between;

        & ${SidebarItemStyled} {
            width: ${({ numChildren }) => 100 / numChildren}%;
        }
    }
`;

SidebarStyled.defaultProps = defaultProps;
