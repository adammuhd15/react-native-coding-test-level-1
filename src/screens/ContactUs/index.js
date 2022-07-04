import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

// Local imports
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import PopUp from "../../components/PopUp";
import { emailRegEx, nameRegEx } from "../../constants/RegEx";
import { formatingDate } from "../../services/helper/MonthConverter";

const ContactUs = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        birthDate: new Date(),
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [popUpText, setPopUpText] = useState("")

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPicker = () => {
        setIsOpen(!isOpen)
    }

    const hanldeCloseModal = () => {
        setIsModalVisible(false);
    }

    const handleChangeName = (value) => {
        setFormState({
            ...formState,
            name: value,
        })
    }
    const handleChangeEmail = (value) => {
        setFormState({
            ...formState,
            email: value,
        })
    }
    const handleChangeBirthDate = (event, date) => {
        setFormState({
            ...formState,
            birthDate: date,
        })
    }
    const handleSubmit = () => {
        setFormSubmitted(true)
        if (
            formState.name && formState.name !== "" && nameRegEx.test(formState.name) &&
            formState.email && formState.email !== "" && emailRegEx.test(formState.email) &&
            formState.birthDate && formState.birthDate !== ""
        ) {
            let stringFormat = `Name: ${formState.name}\n\nEmail: ${formState.email}\n\nDate of Birth: ${formatingDate(formState.birthDate)}`
            setPopUpText(stringFormat)
            setIsModalVisible(true)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView>
            <View style={screenStyle.viewContainer}>
                <View style={screenStyle.fieldContainer}>
                    <TextField
                        onChangeText={handleChangeName}
                        value={formState.name}
                        label="Name"
                        showLength
                        placeholder="Name..."
                        maxLength={50}
                        style={screenStyle.fieldStyle}
                    />
                    {formSubmitted && !nameRegEx.test(formState.name) && (
                        <Text style={screenStyle.textError}>Name must contain letters</Text>
                    )}
                    {formSubmitted && (formState.name.length > 50) && (
                        <Text style={screenStyle.textError}>Name must be less than 50 characters</Text>
                    )}
                    {formSubmitted && !formState.name && (
                        <Text style={screenStyle.textError}>Invalid name</Text>
                    )}
                </View>
                <View style={screenStyle.fieldContainer}>
                    <TextField
                        onChangeText={handleChangeEmail}
                        value={formState.email}
                        label="Email"
                        placeholder="Email..."
                        style={screenStyle.fieldStyle}
                    />
                    {formSubmitted && !emailRegEx.test(formState.email) && (
                        <Text style={screenStyle.textError}>Invalid email address</Text>
                    )}
                </View>
                <View style={screenStyle.fieldContainer}>
                    <DatePicker
                        value={formState.birthDate}
                        onDateChange={handleChangeBirthDate}
                        maximumDate={new Date()}
                        label="Date of Birth"
                        handleOpenPicker={handleOpenPicker}
                        isOpen={isOpen}
                    />
                </View>
                <Button
                    text="Submit"
                    onPress={handleSubmit}
                    containerStyle={screenStyle.fieldStyle}
                />
                <PopUp
                    isVisible={isModalVisible}
                    onPopUpClose={hanldeCloseModal}
                    text={popUpText}
                />
            </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

const screenStyle = StyleSheet.create({
    viewContainer: {
        padding: 10
    },
    fieldContainer: {
        width: "100%",
        marginBottom: 30
    },
    fieldStyle: {
        width: "100%"
    },
    textError: {
        color: "#FF0000"
    }
})

export default ContactUs;
