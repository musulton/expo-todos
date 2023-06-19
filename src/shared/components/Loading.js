import {
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet
} from "react-native";
import {useSelector} from "react-redux";

const Loading = () => {
    const isLoading = useSelector((state) => state.AppReducer.isLoading);

    return isLoading && (
        <View style={styles.loading}>
            <StatusBar backgroundColor={"#0000FF"} />
            <ActivityIndicator size={"large"} color={"#0000FF"} />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5,
    }
})
