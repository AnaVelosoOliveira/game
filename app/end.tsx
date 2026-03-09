import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export default function End() {
    const {score} = useGame();
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={require("@/assets/images/dino.png")}/>
            <View>
                <Image source = {require("@/assets/images/parado.png")} style={styles.image}
                resizeMode="contain"/>
            </View>

            <View>
                <Image source = {require("@/assets/images/cactus.png")} style={styles.image}
                resizeMode="contain"/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fim de Jogo!</Text>
                <Text style={styles.text}>{score}</Text>
            
    
                <Link href="/" asChild>
                    <Text style={styles.button}>Voltar</Text>
                </Link>
        </View>
        </View>
    )
    
        
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
    
    
    },
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
        left: 50
    },
    obstacle:{
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "40%",
    left: 90,
},
textContainer:{
    position: "absolute",
    top: "30%",
    alignSelf: "center",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10
},

text:{
    fontSize: 40,
    fontWeight: "bold",
    paddingHorizontal: 10
},

button:{
    backgroundColor: "#090909",
    borderRadius: 999,
    color: "#ffffff",
    paddingHorizontal: 60,
    paddingVertical: 10,
    fontSize: 25
}
});