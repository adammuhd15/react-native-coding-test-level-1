import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

// Local imports
import { Colors } from "../../constants/Colors"
import { formatingDate } from "../../services/helper/MonthConverter";

const DatePicker = ({
    label,
    value,
    onDateChange = async () => null,
    buttonStyle,
    ...restProps
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleInternalChoose = async (event, date) => {
        await onDateChange(event, date);
        handleOpenPicker();
    }
    const handleOpenPicker = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <View>
                <Text>{label}</Text>
                <TouchableOpacity
                    style={[dateStyle.buttonStyle, { ...buttonStyle }]}
                    onPress={handleOpenPicker}
                >
                    <Text>{formatingDate(value)}</Text>
                </TouchableOpacity>
            </View>
            {isOpen &&
                <DateTimePicker
                    value={value}
                    onChange={handleInternalChoose}
                    maximumDate={new Date()}
                    display="spinner"
                    {...restProps}
                />
            }
        </>
    )
}

DatePicker.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onDateChange: PropTypes.func
}

const dateStyle = StyleSheet.create({
    buttonStyle: {
        width: "100%",
        height: 40,
        backgroundColor: Colors.white,
        padding: 5,
        borderRadius: 5,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: Colors.black
    }
})

export default DatePicker;
