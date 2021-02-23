import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import AccentureLogo from "../images/Accenture.png";


export default function Accenture() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={AccentureLogo}/>
            <Text style={styles.title}>Accenture</Text>
            <Text style={styles.paragraph}>Texto Complementar</Text>
            <RectButton style={styles.contactButton} onPress={() => alert('Olá')}>
                <Text style={styles.textButton}>Entrar em Contato</Text>
                <Feather name="send" size={20}/>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        marginBottom: 20,
        height: 60,
        width: 228,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        color: '#8f8f8f'
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'left',
        color: '#b8b8b8'
    },
    contactButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#A100FF',
        marginTop: 22,
    },
    textButton: {
        color: '#A100FF',
        fontSize: 18,
        marginRight: 18,

    }
})
