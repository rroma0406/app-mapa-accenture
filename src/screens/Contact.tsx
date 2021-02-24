import React, {useState} from "react";
import {RectButton, ScrollView} from "react-native-gesture-handler";
import {StyleSheet, View, Text, Dimensions, Image, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";
import logoAccenture from '../images/Accenture.png';
import LottieView from 'lottie-react-native';

export default function Contact() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [isSendMessage, setIsSendMessage] = useState(true);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                {isSendMessage ?
                    (<>
                            <Text style={styles.sendText}>Sua mensagem</Text>
                            <Text style={styles.sendText}>Foi enviada</Text>
                            <LottieView source={require('../animations/lf30_editor_baoo1swz.json')}
                                        autoPlay
                                        style={styles.animationContent}
                                        loop={true}/>
                        </>
                    )
                    : (<>
                            <Image source={logoAccenture} style={styles.logoAccenture}/>
                            <Text style={styles.formTitle}>Formulário de Contato</Text>
                            <View>
                                <Text style={styles.labelForm}>Seu nome:</Text>
                                <TextInput style={styles.inputForm} value={name}/>

                                <Text style={styles.labelForm}>Seu telefone:</Text>
                                <TextInput style={styles.inputForm}/>

                                <Text style={styles.labelForm}>Seu email:</Text>
                                <TextInput style={styles.inputForm}/>

                                <Text style={styles.labelForm}>Deixe sua mensagem:</Text>
                                <TextInput style={styles.inputFormMultiLine} multiline/>

                                <RectButton style={styles.sendButton}>
                                    <Text style={styles.textSendButton}>Enviar mensagem</Text>
                                    <Feather name="send" size={20} color="#A100FF"/>
                                </RectButton>
                            </View>
                        </>
                    )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 40,
        height: Dimensions.get("window").height
    },
    sendText: {
        color: '#A100FF',
        fontSize: 24,
        marginBottom: 24,
    },
    alignCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoAccenture: {
        marginTop: 24,
        width: 200,
        height: 53,
    },
    formTitle: {
        fontSize: 20,
        marginVertical: 30,
        color: '#A100FF',
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    animationContent: {
        height: 400,
        width: 400
    },
    labelForm: {
        marginTop: 22,
    },
    inputForm: {
        paddingHorizontal: 20,
        height: 50,
        width: Dimensions.get('window').width - 60,
        borderColor: '#b3b3b3',
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 5
    },
    inputFormMultiLine: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        height: 120,
        width: Dimensions.get('window').width - 60,
        borderColor: '#b3b3b3',
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 5,
    },
    sendButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 80,
        marginTop: 20,
    },

    textSendButton: {
        color: '#A100FF',
        fontSize: 20,
        marginRight: 6,
    }
})