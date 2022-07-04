import React from "react"
import { TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

// Local imports
import { Colors } from "../../constants/Colors";

const BackButton = ({ navigation, route }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ padding: 10, borderRadius: 5, backgroundColor: Colors.green, marginLeft: 0 }}
        >
            <Entypo
                color={Colors.black}
                name="chevron-left"
                size={20}
            />
        </TouchableOpacity>
    )
}

export default BackButton;
