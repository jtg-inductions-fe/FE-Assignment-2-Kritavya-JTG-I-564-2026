import CloudsAndTree from '@assets/images/clouds_and_tree.webp';
import FlowerOne from '@assets/images/flower1.webp';
import FlowerTwo from '@assets/images/flower2.webp';

import {
    BackgroundImage,
    BluePanel,
    FirstFlower,
    OrangePanel,
    SecondFlower,
    VisualContainer,
} from './HeroVisual.styles';

const HeroVisual = () => (
    <VisualContainer>
        <BluePanel>
            <BackgroundImage src={CloudsAndTree} alt="" />
        </BluePanel>

        <FirstFlower src={FlowerOne} alt="" />
        <SecondFlower src={FlowerTwo} alt="" />

        <OrangePanel>
            CODE
            <br />
            EXPLORE
            <br />
            LEARN
            <br />
            GROW
        </OrangePanel>
    </VisualContainer>
);

export default HeroVisual;
