import {View} from "react-native";

import TabBarItem from "../../../shared/components/TabBarItem";

import styles from "./TabBar.styles";

const TabBar = (props) => (
    <View style={styles.container}>
        <TabBarItem
            border
            type={props.type}
            title={"All"}
            setType={() => props.setType("All")}
        />
        <TabBarItem
            border
            type={props.type}
            setType={() => props.setType("Active")}
            title={"Active"}
        />
        <TabBarItem
            border
            type={props.type}
            setType={() => props.setType("Complete")}
            title={"Complete"}
        />
    </View>
)

export default TabBar;
