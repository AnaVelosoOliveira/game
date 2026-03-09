import Dino from "@/components/Dino";
import Moving from "@/components/Moving";
import Obstacle from "@/components/Obstacle";
import Score from "@/components/Score";
import { useGame } from "@/hooks/gameHook";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function GameScreen(){
    const { jump } = useGame();
    const [obstacle, setObstacle] = useState([] as any);

    function spawObstacle(){
        setObstacle((oldValue: any) => [...oldValue,Date.now().toString ()]);
    }

    function removeObstacle(id: any) {
        setObstacle((oldValue: any) => oldValue.filter((obstacle: any) => obstacle !== id),);
    }

    useEffect(() => {
    const interval  = setInterval(() => spawObstacle(), 10000);

    return() => clearInterval(interval);
    },[]);

    
    return (
        <Pressable onPress={ jump } style={styles.button}>
        <View style={styles.container}>
            <Moving/>
            <Dino />
            <Score/>
            {obstacle.map((obstacle: any ) => (<Obstacle key={obstacle} onEnd={() => removeObstacle(obstacle)}/>))}
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