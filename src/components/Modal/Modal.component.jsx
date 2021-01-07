import React from 'react';

import { Wrapper, CloseButton, Content } from './Modal.styles';

export default function Modal({
    children,
    open,
    closeHandler,
    closeButton,
    closeOnOut,
}) {
    return (
        <div>
            <Wrapper
                open={open}
                onClick={() => closeOnOut && closeHandler()}></Wrapper>
            <Content open={open} onClick={(event) => event.stopPropagation()}>
                <CloseButton onClick={closeHandler}>
                    {closeButton || 'x'}
                </CloseButton>
                {children}
            </Content>
        </div>
    );
}
