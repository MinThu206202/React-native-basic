import   {Image , useColorScheme} from 'react-native';

import Darklogo from  '../assets/icon/icon.png';
import Lightlogo from  '../assets/icon/icon.png';

const ThemedLogo = () => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === 'dark' ? Darklogo : Lightlogo;

    return (
        <Image source={logo}
        />
    )
}

export default ThemedLogo;