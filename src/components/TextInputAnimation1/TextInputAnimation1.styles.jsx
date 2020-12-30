import styled from 'styled-components';

export const TextInputContainer = styled.div`
    box-sizing: border-box;
    width: 300px;
    position: relative;
    height: 50px;
    margin: 0 auto;
    overflow: hidden;
`;

export const LabelContainer = styled.label`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;
    &:after {
        content: ' ';
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #5fa8d3;
        position: absolute;
        left: 0;
        bottom: -1px;
        transform: translateX(-100%);
        transition: all 0.3s ease;
    }
`;

export const LabelText = styled.span`
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
`;

export const TextInputStyled = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #595f6e;
    padding-top: 20px;
    border: none;
    outline: none;

    &:focus + ${LabelContainer} ${LabelText} {
        transform: translateY(-150%);
        font-size: 14px;
        color: #5fa8d3;
    }

    &:focus + ${LabelContainer}:after {
        transform: translateX(0);
    }
`;
