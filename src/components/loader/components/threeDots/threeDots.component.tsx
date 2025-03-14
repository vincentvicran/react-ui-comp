import { Sprinter1, Sprinter2, Sprinter3, Sprinter } from './threeDots.styled';
import { NLoader } from '../../loader.type';

export const ThreeDotsLoader = (props: NLoader.DotsProps) => {
    return (
        <Sprinter {...props}>
            <Sprinter1 {...props} />
            <Sprinter2 {...props} />
            <Sprinter3 {...props} />
        </Sprinter>
    );
};
