import React from "react";
import { View, Modal, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

// Local imports
import { Colors } from "../../constants/Colors"

const PopUp = ({
    isVisible=false,
    onPopUpClose=() => null,
    text="Default text",
}) => {
    return (
        <>
            {isVisible && (
                <View style={styles.shadowBackground}/>
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={onPopUpClose}
            >
                <TouchableWithoutFeedback onPress={onPopUpClose}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{text}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
}

PopUp.propTypes = {
    isVisible: PropTypes.bool,
    onPopUpClose: PropTypes.func,
    text: PropTypes.string
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "600"
    },
    shadowBackground: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "rgba(0 ,0, 0, 0.6)"
    }
});

export default PopUp;
