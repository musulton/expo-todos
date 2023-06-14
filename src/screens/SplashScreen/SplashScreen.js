import {Image, View, StyleSheet} from "react-native";

import enigma from "../../shared/assets/images/enigma.png";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={enigma} style={styles.logo} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 200
    }
})
