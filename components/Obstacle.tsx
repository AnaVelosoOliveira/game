import { useEffect } from "react";
import {Image, StyleSheet, Dimensions} from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";

export default function Obstacle({onEnd}: any ){
    const {width} = Dimensions.get("window");
    const offset = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform : [{translateX: -offset.value}],
    }));
    useEffect(() => {
        offset.value = withTiming(width, {
            duration: 3000,
            easing: Easing.linear,
        }, 
    onEnd,);
    }, []);

    return (
        <Animated.View style={[styles.obstacle, animatedStyle]}>
            <Image source={require("@/assets/images/cactus.png")} resizeMode="contain" style={styles.image}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    image:{
    width:"100%",
    height: "100%",
},
obstacle:{
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "40%",
    right: 0,
}

})