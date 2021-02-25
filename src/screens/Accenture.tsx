import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {RectButton, ScrollView} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import AccentureLogo from "../images/Accenture.png";
import {useNavigation, useRoute} from "@react-navigation/native";
import {getData} from '../service'
import {GetUnit, HeaderProps, IAllUnits} from '../interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Accenture({title}: HeaderProps, {id}: GetUnit) {

    const storageData = async(value: string) => {
        try {
            await AsyncStorage.setItem('@accentureUnit', value)
        } catch (e) {
            console.log('Erro')
        }
    }

    const route = useRoute()
    const params = route.params as GetUnit

    const [unit, setUnit] = useState<IAllUnits>()

    useEffect(() => {
        getData.get(`find?id=${params.id}`).then(
            response => {
                setUnit(response.data)
                storageData(JSON.stringify(response.data))
            }
        )
    }, [params.id])

    const navigation = useNavigation()

    function handlePushContact() {
        navigation.navigate('contact')
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                <Image source={{uri: unit?.profile}}
                       style={styles.topImage}/>
                <Image style={styles.logo} source={AccentureLogo}/>
                <Text style={styles.title}>{unit?.name}</Text>
                <Text style={styles.paragraph}>{unit?.describle}</Text>

                <Text style={styles.details}>País: {unit?.country}</Text>
                <Text style={styles.details}>Estado: {unit?.state}</Text>
                <Text style={styles.details}>Cidade: {unit?.city}</Text>
                <Text style={styles.details}>Endereço: {unit?.address.street} {unit?.address.number}</Text>

                <RectButton style={styles.contactButton} onPress={handlePushContact}>
                    <Text style={styles.textButton}>Entrar em Contato</Text>
                    <Feather name="send" size={20} color="#A100FF"/>
                </RectButton>
            </View>
        </ScrollView>
    );
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
