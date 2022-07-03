import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
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
            <View style={{ padding: 10 }}>
                <View style={{ width: "100%", marginBottom: 30 }}>
                    <TextField
                        onChangeText={handleChangeName}
                        value={formState.name}
                        label="Name"
                        showLength
                        placeholder="Name..."
                        maxLength={50}
                        style={{ width: "100%" }}
                    />
                    {formSubmitted && !nameRegEx.test(formState.name) && (
                        <Text style={{ color: "#FF0000" }}>Name must contain letters</Text>
                    )}
                    {formSubmitted && (formState.name.length > 50) && (
                        <Text style={{ color: "#FF0000" }}>Name must be less than 50 characters</Text>
                    )}
                    {formSubmitted && !formState.name && (
                        <Text style={{ color: "#FF0000" }}>Invalid name</Text>
                    )}
                </View>
                <View style={{ width: "100%", marginBottom: 30 }}>
                    <TextField
                        onChangeText={handleChangeEmail}
                        value={formState.email}
                        label="Email"
                        placeholder="Email..."
                        style={{ width: "100%" }}
                    />
                    {formSubmitted && !emailRegEx.test(formState.email) && (
                        <Text style={{ color: "#FF0000" }}>Invalid email address</Text>
                    )}
                </View>
                <View style={{ width: "100%", marginBottom: 30 }}>
                    <DatePicker
                        value={formState.birthDate}
                        onDateChange={handleChangeBirthDate}
                        maximumDate={new Date()}
                        label="Date of Birth"
                    />
                </View>
                <Button
                    text="Submit"
                    onPress={handleSubmit}
                    containerStyle={{ width: "100%" }}
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

export default ContactUs;
