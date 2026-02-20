import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import {StyleSheet, View, Image, Easing } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming } from "react-native-reanimated";


export default function Dino() {
    const {jumping, stopJump} = useGame();

    const dinoheight = useSharedValue(0);

    function headleJump(){
        dinoheight.value = 
        withSequence(
            withTiming(-100, {
                duration: 300,
                easing: Easing.linear,
            }),
            withTiming(0, {
                duration: 400,
                easing: Easing.linear,
            }, 
            () => stopJump(),
        ),
        );
    }

    useEffect(() => {
        if (jumping) {
             headleJump();

        }
           
    }, [jumping]);

    const animatedStyle =useAnimatedStyle(() => ({
        transform:[{
        translateY:dinoheight.value,
            },
        ],
    }))

    return( <Animated.View style={[styles.dino, animatedStyle]}>
        {jumping ? (<Image source={require("@/assets/images/correndo.gif")} resizeMode="contain" style={styles.image}/>
        ) : (
            <Image source={require("@/assets/images/parado.png")} resizeMode="contain" style={styles.image}/>


        )
        }
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: "100%"
    },
    dino:{
        width: 70,
        height: 110,
        position: "absolute",
        zIndex: 10,
        bottom: "40%",
        left: "10%"
    },
})