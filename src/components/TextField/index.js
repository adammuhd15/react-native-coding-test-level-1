import React from "react";
import { TextInput, Dimensions, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

// Local imports
import { Colors } from "../../constants/Colors";

const TextField = ({
    value,
    label,
    maxLength,
    showLength = false,
    style,
    ...restProps
}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={[textFieldStyle.container, style]}
                value={value}
                maxLength={maxLength}
                {...restProps}
            />
            {showLength && (
                <Text style={[textFieldStyle.lengthText, { color: value.length < 50 ? Colors.black : Colors.error }]}>{value.length}/{maxLength}</Text>
            )}
        </View>
    )
}

TextField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    showLength: PropTypes.bool,
    style: PropTypes.object
}

const textFieldStyle = StyleSheet.create({
    container: {
        width: (0.4 * Dimensions.get("window").width),
        height: 40,
        borderWidth: 2,
        borderColor: Colors.black,
        borderRadius: 5,
        padding: 5,
        backgroundColor: Colors.white
    },
    lengthText: {
        textAlign: "right"
    }
})

export default TextField;
