import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleOnPress = () => setToggle((oldToggle) => !oldToggle);
  useEffect(() => {Torch.switchState(toggle),[toggle]});
  useEffect(() => {
    const subscription = RNShake.addListener(()=>{handleOnPress(oldToggle => !oldToggle);})
    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaView style={toggle ? style.containerLight : style.container}>
      <StatusBar backgroundColor={toggle? 'white' : 'black'} barStyle={toggle? 'dark-content' : 'light-content'} />
    <View >
    <TouchableOpacity onPress={handleOnPress}>
    <Image style={toggle ? style.lightingOn : style.lightingOff} source={toggle ? require('../assets/icons/eco-light.png') : require('../assets/icons/eco-light-off.png')}/>
    <Image style={style.dioLogo} source={toggle ? require('../assets/icons/logo-dio.png') : require('../assets/icons/logo-dio-white.png')}/>
    </TouchableOpacity>
  </View>
    </SafeAreaView>
)
};

export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250
  }
});