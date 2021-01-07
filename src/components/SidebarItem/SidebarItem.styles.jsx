import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarItemIconStyled = styled(FontAwesomeIcon)`
    margin: 0 1.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.accentColor};
    text-align: ${({ align }) => align};
    padding: 0;
`;
export const SidebarItemTextStyled = styled.span`
    display: none;
    margin-left: 1rem;
`;

export const SidebarItemLinkStyled = styled.a`
    display: flex;
    align-items: center;
    height: 5rem;
    filter: grayscale(100%) opacity(0.7);
    transition: 0.2s;
    justify-content: ${({ align }) =>
        align === 'right' ? 'flex-end' : 'flex-start'};

    @media only screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
    }
`;

const activeItemCss = css`
    cursor: pointer;
    filter: grayscale(0%) opacity(1);
    background-color: ${({ theme }) => theme.secondaryBg};

    & ${SidebarItemLinkStyled} {
        filter: grayscale(0%) opacity(1);
    }
`;

export const SidebarItemStyled = styled.li`
    ${({ active }) => (active ? activeItemCss : null)};
    &:hover {
        ${activeItemCss}
    }

    &:hover ${SidebarItemLinkStyled} {
        filter: grayscale(0%) opacity(1);
    }

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;

// SidebarItemStyled.defaultProps = defaultProps;
// SidebarItemIconStyled.defaultProps = defaultProps;
