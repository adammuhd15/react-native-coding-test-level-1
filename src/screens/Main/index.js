import React from "react";
import { View } from "react-native";

// Local imports
import Button from "../../components/Button"
import { Colors } from "../../constants/Colors";

const Main = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button
                text={"Contact Us"}
                onPress={() => navigation.navigate("ContactUs")}
                containerStyle={{ backgroundColor: Colors.pink }}
            />
        </View>
    )
}

export default Main;
