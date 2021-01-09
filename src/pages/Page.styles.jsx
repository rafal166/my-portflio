import styled, { css } from 'styled-components';

const headerSharedStyles = css`
    color: ${({ theme }) => theme.accentSecondaryColor};
    font-weight: bold;
    letter-spacing: 2px;
`;

export const H1 = styled.h1`
    ${headerSharedStyles}
    font-size: 2em;
`;

export const H2 = styled.h2`
    ${headerSharedStyles}
    font-size: 1.5em;
`;

export const H3 = styled.h3`
    ${headerSharedStyles}
    font-size: 1.17em;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.accentSecondaryColor};
    letter-spacing: 0.9fpx;
`;

export const Grid = styled.div``;
export const Row = styled.div`
    display: flex;
`;
export const Col = styled.div`
    flex: ${({ size }) => size};
`;

export const Container = styled.div`
    width: 100%;
    padding: 20px;
`;
