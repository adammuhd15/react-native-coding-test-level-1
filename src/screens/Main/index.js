import React from "react";
import { View, StyleSheet } from "react-native";

// Local imports
import Button from "../../components/Button"
import { Colors } from "../../constants/Colors";

const Main = ({ navigation }) => {
    return (
        <View style={screenStyle.container}>
            <Button
                text={"Contact Us"}
                onPress={() => navigation.navigate("ContactUs")}
                containerStyle={screenStyle.contactUs}
            />
            <Button
                text={"Catalog"}
                onPress={() => navigation.navigate("CatalogList")}
                containerStyle={screenStyle.catalog}
            />
        </View>
    )
}

const screenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contactUs: {
        backgroundColor: Colors.pink,
        marginBottom: 20
    },
    catalog: {
        backgroundColor: Colors.blue
    }
})

export default Main;
