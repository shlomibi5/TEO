import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
  });
};

export default fetchFonts;