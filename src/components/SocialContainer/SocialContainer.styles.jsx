import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 30%;
    right: -2em;
    width: 6em;
    min-height: 3em;

    @media only screen and (max-width: ${({ theme }) => theme.media_size_s}) {
        right: -2.5em;
    }
`;
