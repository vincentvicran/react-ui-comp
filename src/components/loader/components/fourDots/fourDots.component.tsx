import { Rotater, Rotate1, Rotate2, Rotate3, Rotate4 } from './fourDots.styled';
import { NLoader } from '@types';

export const FourDotsLoader = (props: NLoader.DotsProps) => {
    return (
        <Rotater {...props}>
            <Rotate1 {...props} />
            <Rotate2 {...props} />
            <Rotate3 {...props} />
            <Rotate4 {...props} />
        </Rotater>
    );
};
