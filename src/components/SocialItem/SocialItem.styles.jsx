import styled from 'styled-components';

export const Item = styled.a`
    display: block;
    padding: 10px 14px;
    width: 100%;
    transition: 0.2s;
    background: ${({ bgColor }) => bgColor};

    &:hover {
        transform: translateX(-1.3em);
    }

    @media only screen and (max-width: ${({ theme }) => theme.media_size_s}) {
        padding: 8px 13px;
    }
`;
export const Icon = styled.div`
    font-size: 2.3em;

    @media only screen and (max-width: ${({ theme }) => theme.media_size_s}) {
        font-size: 1.8em;
    }
`;
