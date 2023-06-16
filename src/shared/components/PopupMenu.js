import React from "react";
import {Modal, Text, View, TouchableOpacity, Pressable, TouchableWithoutFeedback} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

import PATH from "../../navigations/NavigationPath";
import styles from "./PopupMenu.styles";
import {onNavigate} from "../../navigations/RootNavigation";
import localStorage from "../utils/LocalStorage";

const PopupMenu = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const onLogout = async () => {
        try {
            await localStorage().removeData("token");

            onNavigate({
                routeName: PATH.LOGIN
            });
        } catch (e) {

        }
    }

    return (
        <View>
            <Pressable
                style={styles.dotIcon}
                onPress={() => setIsModalVisible(!isModalVisible)}
            >
                <Icon
                    name={"ellipsis-v"}
                    size={16}
                />
            </Pressable>
            <Modal
                animationType={"fade"}
                transparent
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(!isModalVisible)}
            >
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPressOut={() => setIsModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <Pressable onPress={onLogout}>
                                    <Text style={styles.modalText}>Logout</Text>
                                </Pressable>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default PopupMenu;
