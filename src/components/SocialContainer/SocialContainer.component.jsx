import React from 'react';

import SocialItem from '../SocialItem/SocialItem.component';

import { Container } from './SocialContainer.styles';

export default function SocialContainer() {
    return (
        <Container>
            <SocialItem
                icon={['fab', 'facebook']}
                link={'#'}
                bgColor='#4868ad'></SocialItem>
            <SocialItem
                icon={['fab', 'github']}
                link={'https://github.com/rafal166'}
                bgColor='#4e545a'></SocialItem>
            <SocialItem
                icon={['fab', 'linkedin']}
                link={'#'}
                bgColor='#0077ba'></SocialItem>
            <SocialItem
                icon={['fab', 'instagram']}
                link={'https://www.linkedin.com/in/rafal-rzewucki/'}
                bgColor='radial-gradient(
					circle at 35% 110%,
					#fdf497 0,
					#fdf497 5%,
					#fd5949 45%,
					#d6249f 60%,
					#285aeb 90%
				),
				radial-gradient(
					circle at 60% 110%,
					#b9a800 0,
					#938500 5%,
					#b10f00 45%,
					#8c0061 60%,
					#002ca9 90%
				);'></SocialItem>
        </Container>
    );
}
