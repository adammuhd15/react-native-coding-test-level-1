import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

// Local imports
import { Colors } from "../../constants/Colors";

const Button = ({
    text="",
    onPress=() => null,
    containerStyle,
    textStyle,
    ...resProps
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[buttonStyle.buttonContainer, containerStyle]}
            {...resProps}
        >
            <Text
                style={[buttonStyle.buttonTitle, textStyle]}
                {...resProps}
            >{text}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
}

const buttonStyle = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        backgroundColor: Colors.green,
        borderRadius: 5,
        alignItems: "center"
    },
    buttonTitle: {
        fontSize: 20,
        color: Colors.white
    },
})

export default Button;
