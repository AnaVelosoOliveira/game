import { Pressable, StyleSheet, View } from "react-native";
import  Dino from "@/components/Dino";
import Moving  from "@/components/Moving";
import { useGame } from "@/hooks/gameHook";
import Score from "@/components/score";

export default function GameScreen(){
    const { jump } = useGame();

    
    return (
        <Pressable onPress={ jump } style={styles.button}>
        <View style={styles.container}>
            <Moving/>
            <Dino />
            <Score/>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: '100%',

    },
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(255, 255,255, 0.82)",
        position: "relative"
    },
    
})