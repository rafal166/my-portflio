import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const defaultProps = {
    theme: {
        primaryBg: '#23232e',
        secondaryBg: '#141418',
        primaryColor: '#b6b6b6',
        secondaryColor: '#ececec',
        accentColor: 'orange',
    },
};

// primaryBg: '#23232e',
//      accentColor: 'orange',

export const SidebarItemLinkStyled = styled.a`
    display: flex;
    align-items: center;
    height: 5rem;
    filter: grayscale(100%) opacity(0.7);
    transition: 0.2s;

    @media only screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
    }
`;

export const SidebarItemIconStyled = styled(FontAwesomeIcon)`
    min-width: 2rem;
    margin: 0 1.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.accentColor};
`;
export const SidebarItemTextStyled = styled.span`
    display: none;
    margin-left: 1rem;
`;

export const SidebarItemStyled = styled.li`
    &:last-child {
        margin-top: auto;
    }

    &:hover {
        cursor: pointer;
        filter: grayscale(0%) opacity(1);
        background-color: ${({ theme }) => theme.secondaryBg};
    }

    &:hover ${SidebarItemLinkStyled} {
        filter: grayscale(0%) opacity(1);
    }

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;

SidebarItemStyled.defaultProps = defaultProps;
SidebarItemIconStyled.defaultProps = defaultProps;
