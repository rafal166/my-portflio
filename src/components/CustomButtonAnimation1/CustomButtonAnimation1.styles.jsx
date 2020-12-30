import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,200&display=swap');
`;

export const ButtonStyledAnimation = styled.span`
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.buttonColor};
    transition: width 0.9s, height 0.9s;
    z-index: -1;
`;

export const ButtonStyled = styled.button`
    position: relative;
    padding: 10px 30px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.buttonColor};
    margin: 10px;
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.buttonColor};
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color 0.5s, font-size 0.05s;
    overflow: hidden;
    outline: none;
    font-size: 1em;

    /* &:active { */
        font-size: 0.9em;
    }

    &:hover {
        color: ${({ theme }) => theme.buttonBackgroundColor};
        cursor: pointer;
    }

    &:hover ${ButtonStyledAnimation} {
        width: ${({ size }) => size * 3}px;
        height: ${({ size }) => size * 3}px;
    }
`;

ButtonStyled.defaultProps = {
    theme: {
        buttonBackgroundColor: '#FFF',
        buttonColor: '#F7941D',
    },
};
//
ButtonStyledAnimation.defaultProps = {
    theme: {
        buttonBackgroundColor: '#FFF',
        buttonColor: '#F7941D',
    },
};
