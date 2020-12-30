import React, { useState } from 'react';

import {
    LabelContainer,
    LabelText,
    TextInputStyled,
    TextInputContainer,
} from './TextInputAnimation1.styles';

export default function TextInputAnimation1({ value }) {
    const [isEmpty, setEmpty] = useState(!value);

    return (
        <TextInputContainer>
            <TextInputStyled
                type='text'
                name='name'
                value={value}
                onChange={(event) => setEmpty(!event.target.value)}
                isEmpty={isEmpty}
                required
                autocomplete='off'></TextInputStyled>
            <LabelContainer>
                <LabelText>Elo</LabelText>
            </LabelContainer>
        </TextInputContainer>
    );
}
