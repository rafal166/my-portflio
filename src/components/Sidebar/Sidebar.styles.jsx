import styled from 'styled-components';

import {
    SidebarItemTextStyled,
    SidebarItemStyled,
} from '../SidebarItem/SidebarItem.styles';

import SidebarItem from '../SidebarItem/SidebarItem.component';

const defaultProps = {
    themeDefault: {
        collapsedWidth: '5em',
        expandWidth: '16em',
    },
};

export const SidebarStyled = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primaryBg};
    transition: width 0.2s ease;

    @media only screen and (min-width: 600px) {
        ${SidebarItemTextStyled} {
            display: ${({ expand }) => (expand ? 'block' : 'none')};
        }
        width: ${({ expand, themeDefault }) =>
            expand ? themeDefault.expandWidth : themeDefault.collapsedWidth};
    }
    @media only screen and (max-width: 600px) {
        & ${SidebarItemStyled}:first-child {
            display: none;
        }
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
    width: 100%;

    @media only screen and (max-width: 600px) {
        flex-direction: row;
        justify-content: space-between;

        & ${SidebarItemStyled} {
            width: ${({ numChildren }) => 100 / numChildren}%;
        }
    }
`;

export const SidebarToggler = styled(SidebarItem)`
    & svg {
        transform: rotate(${({ expand }) => (expand ? '180' : '0')}deg);
        transition: 0.2s;
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

SidebarStyled.defaultProps = defaultProps;
