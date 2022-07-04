import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropType from "prop-types";

// Local imports
import { Colors } from "../../constants/Colors";
import Button from "../Button";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";

const Card = ({
    item,
    index,
    onDetailPress,
    style,
    ...restProps
}) => {
    const handleFilterID = () => {
        // let stringURL = item.url;
        // let filter = stringURL.substring(34, (stringURL.length - 1))
        onDetailPress(item.name)
    }
    return (
        <View
            style={[cardStyle.container, { ...style }]}
            key={index}
            {...restProps}
        >
            <Text style={cardStyle.titleName}>Name: {capitalizeFirstAlphabet(item.name)}</Text>
            <Button
                onPress={handleFilterID}
                text="View"
                containerStyle={cardStyle.buttonStyle}
            />
        </View>
    )
}

Card.propTypes = {
    item: PropType.object,
    index: PropType.number,
    onDetailPress: PropType.func,
    style: PropType.object
}

const cardStyle = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: Colors.pink,
        borderWidth: 2,
        borderColor: Colors.green,
        borderRadius: 5
    },
    titleName: {
        fontSize: 20,
        color: Colors.white,
        marginBottom: 10
    },
    buttonStyle: {
        width: "50%",
        backgroundColor: Colors.blue
    }
})


export default Card;
