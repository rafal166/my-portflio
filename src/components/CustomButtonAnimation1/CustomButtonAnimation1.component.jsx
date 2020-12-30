import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
    GlobalStyles,
    ButtonStyled,
    ButtonStyledAnimation,
} from './CustomButtonAnimation1.styles';

export default function CustomButtonAnimation1() {
    const [cords, setCords] = useState({ top: 0, left: 0 });
    const [size, setSize] = useState(300);

    const onMouseEnter = (event) => {
        console.log(event);
        const x = event.pageX - event.target.offsetLeft;
        const y = event.pageY - event.target.offsetTop;
        setCords({ top: `${y}px`, left: `${x}px` });
        setSize(
            event.target.offsetWidth > event.target.offsetHeight
                ? event.target.offsetWidth
                : event.target.offsetHeight
        );
    };
    const onMouseOut = (event) => {
        console.log(event);
        const x = event.pageX - event.target.offsetLeft;
        const y = event.pageY - event.target.offsetTop;
        setCords({ top: `${y}px`, left: `${x}px` });
    };

    return (
        <ThemeProvider
            theme={{
                buttonBackgroundColor: '#FFF',
                buttonColor: '#c00',
            }}>
            <GlobalStyles></GlobalStyles>
            <ButtonStyled
                type='button'
                onMouseEnter={onMouseEnter}
                onMouseOut={onMouseOut}
                size={size}>
                <ButtonStyledAnimation style={cords}></ButtonStyledAnimation>
                Button
            </ButtonStyled>
        </ThemeProvider>
    );
}
