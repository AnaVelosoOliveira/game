import { useEffect } from "react";
import {Image, StyleSheet,TouchableOpacity, View, Dimensions, Easing} from "react-native"
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withRepeat} from "react-native-reanimated";


export default function Moving (){
    const { width } = Dimensions.get ("window");
    const offset = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -offset.value}],
    }));

    useEffect(() => {
        offset.value = withRepeat(withTiming(width, {duration: 5000, easing: Easing.linear, }), -1, ) ;
    }, [offset]);

    return(
        <View style={styles.screen}>
        <Animated.View style={[styles.container, animatedStyle]}>
    
    <Image source={require("@/assets/images/fundo.png")} style=     {{width,
        height: '100%'}} resizeMode="cover"/>

    <Image source={require("@/assets/images/fundo.png")} style=     {{width,
        height: '100%'}} resizeMode="cover"/>

    
    </Animated.View>


    </View>
    
 );
}
    

    const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '100%',
        flexDirection:"row"

    },
    screen:{
        width: '100%',
        height: '100%',
        overflowX: "hidden"
        

    }

})

