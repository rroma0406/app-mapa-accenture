import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {IAllUnits} from "../interfaces"


export default function AsyncStorageComponent() {

    const [hasStorage, setHasStorage] = useState<IAllUnits>()

    const getData = async () => {
        try {
            const storageValue = await AsyncStorage.getItem('@accentureUnit')
            console.log(storageValue)
            return storageValue !== null ? JSON.parse(storageValue) : null
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData().then(
            response => setHasStorage(response)
        )
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Async Storage</Text>
            <Text>{hasStorage?.name}</Text>
            <Text>{hasStorage?.country}</Text>
            <Text>{hasStorage?.state}</Text>
            <Text>{hasStorage?.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    logo: {
        marginVertical: 40,
        height: 60,
        width: 227,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        color: '#8f8f8f'
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: 300,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
        color: '#b8b8b8',
        marginBottom: 12
    },
    contactButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#A100FF',
        marginVertical: 40,
    },
    textButton: {
        color: '#A100FF',
        fontSize: 18,
        marginRight: 18,
    },
    details: {
        marginVertical: 6,
        color: "#8f8f8f"
    }
})