import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import {Image, StyleSheet, Dimensions} from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing, useAnimatedReaction } from "react-native-reanimated";

export default function Obstacle({onEnd}: any ){
    const {width} = Dimensions.get("window");
    const offset = useSharedValue(0);
    const {dinoheight} = useGame();

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

    useAnimatedReaction(()=> {return offset.value}, (currentValue) => {
      const left = Math.max(50, width - currentValue);
      const right = Math.min(70, width - currentValue + 65);
      const bottom = Math.max(0, dinoheight.value);
      const top = 65;
      if(left > right || bottom > top){
        console.log("No Collision");
        return;
      }
      console.log("Collision");
    },
    );

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