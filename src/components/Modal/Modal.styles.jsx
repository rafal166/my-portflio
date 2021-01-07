import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 0.1s;

    background-color: rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: translateY(${({ open }) => (open ? '0vh' : '-100vh')});
`;

export const CloseButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.5em 0.7em;
    color: ${({ theme }) => theme.accentColor};
    font-size: 1em;
    cursor: pointer;

    & svg {
        font-size: 1.2em;
    }
`;

export const Content = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 80vw;
    max-height: 80vh;
    margin: 4em auto;
    padding: 1.5em 1em;
    background-color: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.accentSecondaryColor};

    transition: 0.2s;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: translateY(${({ open }) => (open ? '0vh' : '-100vh')});
`;
