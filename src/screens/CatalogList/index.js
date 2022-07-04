import React, { useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import { Colors } from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";

// Local imports
import { getAllPokemon, getThatPokemonInfo } from "../../services/api/pokemon_list";
import Card from "../../components/Card";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";
import {
    updatePokemonList,
    updateOffSet,
    updateIsFetching,
    updatePokemonDetail
} from "../../redux/slice";

const CatalogList = ({ navigation }) => {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.pokemonList)
    const offSetNumber = useSelector((state) => state.offSetNumber)
    const isFetching = useSelector((state) => state.isFetching)
    const pokemonName = useSelector((state) => state.pokemonName)

    const loadPokemonList = async () => {
        try {
            let response = await getAllPokemon(offSetNumber)
            dispatch(updatePokemonList(response.results))
        }
        catch (error) {
            console.log(error)
        }
        finally {
            dispatch(updateIsFetching(false));
        }
    }
    const handleCallDetails = async (pokemonID) => {
        let searchPokemon = pokemonName.find((value) => (value.name === pokemonID))
        if (searchPokemon) {
            navigation.navigate("CatalogDetail", { pokemonInformation: searchPokemon, name: searchPokemon.name })
        } else {
            try {
                let response = await getThatPokemonInfo(pokemonID)
                dispatch(updatePokemonDetail(response));
                navigation.navigate("CatalogDetail", { pokemonInformation: response, name: capitalizeFirstAlphabet(response.name) })
            }
            catch (error) {
                console.log("error")
            }
        }
    }
    const handleFetchMore = () => {
        dispatch(updateOffSet(10))
        dispatch(updateIsFetching(true));
    }
    useEffect(() => {
        if (isFetching) {
            loadPokemonList()
        }
    }, [offSetNumber, isFetching])
    return (
        <SafeAreaView style={screenStyle.container}>
            <FlatList
                data={pokemonList}
                renderItem={(cardProps) => (
                    <Card
                        item={cardProps.item}
                        index={cardProps.index}
                        onDetailPress={handleCallDetails}
                    />
                )}
                style={screenStyle.flatList}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => (
                    <View style={screenStyle.emptyText}>
                        <Text>Empty List</Text>
                    </View>
                )}
                ListFooterComponent={() => (
                    <>
                        {isFetching && (
                            <ActivityIndicator
                                size={"large"}
                                color={Colors.black}
                            />
                        )}
                    </>
                )}
                onEndReached={handleFetchMore}
                onEndReachedThreshold={1}
            />
        </SafeAreaView>
    )
}

const screenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    flatList: {
        padding: 10
    },
    emptyText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CatalogList;
