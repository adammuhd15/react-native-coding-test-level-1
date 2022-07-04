import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

// Local imports
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";

const screenWidth = Dimensions.get("window").width

const CatalogDetail = (props) => {
    const pokemonInformation = props.route.params?.pokemonInformation;
    return (
        <SafeAreaView style={screenStyle.container}>
            <ScrollView>
                <View style={screenStyle.subContainer}>
                    <Image
                        source={{ uri: pokemonInformation.sprites.front_default }}
                        style={screenStyle.imageSize}
                        resizeMode="contain"
                    />
                    {/* Abilities */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Abilities</Text>
                        {pokemonInformation.abilities.map((value, index) => (
                            <Text
                                key={index}
                                style={screenStyle.descriptionText}
                            >{capitalizeFirstAlphabet(value.ability.name)}</Text>
                        ))}
                    </View>
                    {/* Base Experience */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Base Experience</Text>
                        <Text
                            style={screenStyle.descriptionText}
                        >{pokemonInformation.base_experience}</Text>
                    </View>
                    {/* Game Indices */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Game Indices</Text>
                        {pokemonInformation.game_indices.map((value, index) => (
                            <Text
                                key={index}
                                style={screenStyle.descriptionText}
                            >{capitalizeFirstAlphabet(value.version.name)}</Text>
                        ))}
                    </View>
                    {/* Moves */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Moves</Text>
                        {pokemonInformation.moves.map((value, index) => (
                            <Text
                                key={index}
                                style={screenStyle.descriptionText}
                            >{index + 1}: {capitalizeFirstAlphabet(value.move.name)}</Text>
                        ))}
                    </View>
                    {/* Stats */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Stats</Text>
                        {pokemonInformation.stats.map((value, index) => (
                            <Text
                                key={index}
                                style={screenStyle.descriptionText}
                            >{capitalizeFirstAlphabet(value.stat.name)}: {value.base_stat}</Text>
                        ))}
                    </View>
                    {/* Types */}
                    <View style={screenStyle.detailsContainer}>
                        <Text style={screenStyle.headerTitle}>Types</Text>
                        {pokemonInformation.types.map((value, index) => (
                            <Text
                                key={index}
                                style={screenStyle.descriptionText}
                            >{capitalizeFirstAlphabet(value.type.name)}</Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const screenStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        padding: 10
    },
    imageSize: {
        width: screenWidth,
        height: screenWidth
    },
    detailsContainer: {
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: Colors.black,
        marginBottom: 10
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.black
    }
})

export default CatalogDetail;
