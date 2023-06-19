import React from "react";
import {Modal, Text, View, TouchableOpacity, Pressable, TouchableWithoutFeedback} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

import PATH from "../../navigations/NavigationPath";
import styles from "./PopupMenu.styles";
import {onNavigate} from "../../navigations/RootNavigation";
import localStorage from "../utils/LocalStorage";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/login/LoginAction";
import {showError} from "../store/app/AppAction";

const PopupMenu = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    React.useEffect(() => {
        if (isLoggedIn === false) {
            onNavigate({
                routeName: PATH.LOGIN,
                isReplace: true
            })
        }
    });

    const onLogout = async () => {
        try {
            await localStorage().removeData("token");
            dispatch(logout());
        } catch (e) {
            dispatch(showError(e.message));
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
