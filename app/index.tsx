import {Link} from "expo-router"
import { StyleSheet, Text,  View, ImageBackground, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground 
    source={require("@/assets/images/dino.png")}
    resizeMode="stretch"
    style={styles.dino}>

    <View style={styles.container}>
      <Link href="/game" asChild replace>
      <TouchableOpacity style={styles.button}>
        <Text>Jogar</Text>
        <Text></Text>


      </TouchableOpacity>



      
      </Link>
      
    </View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  button:{
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    marginBottom: 50,

  }, 
  dino:{
    width: '100%',
    height: '100%'
  }
 
});
