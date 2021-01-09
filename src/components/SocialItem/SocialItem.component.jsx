import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Item, Icon } from './SocialItem.styles';

export default function SocialItem({ icon, link, bgColor }) {
    return (
        <Item href={link} bgColor={bgColor}>
            <Icon as={FontAwesomeIcon} icon={icon}></Icon>
        </Item>
    );
}
