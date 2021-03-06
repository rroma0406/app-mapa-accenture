import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from "react-native-maps";
import PinInsert from "../images/Pin.png";
import {RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {IAllUnits, IInitialMarker} from '../interfaces';
import {getData} from '../service'

export default function Home() {

    const [allUnits, setAllUnits] = useState<IAllUnits[]>([])
    const [initialMapMarker, setInitialMapMarker] = useState<IInitialMarker>({
        latitude: -23.628949249999998,
        longitude: -46.71006813701569,
        latitudeDelta: 0.0008,
        longitudeDelta: 0.0008,
    })

    useEffect(() => {
        getData.get('all').then(
            response => {
                setAllUnits(response.data)
            }
        )
    })

    const navigation = useNavigation();

    function handlePageDetails(id: number) {
        navigation.navigate('accenture', {id})
    }

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
    })

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialMapMarker}>

                {allUnits.map(unit => (
                    <View key={unit.id}>
                        <Marker icon={PinInsert} coordinate={{
                            latitude: unit.latitude,
                            longitude: unit.longitude,
                        }}>
                            <Callout tooltip={true}
                                     onPress={() => handlePageDetails(unit.id)}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{unit.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    </View>
                ))}


            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Texto Qualaquer</Text>
                <RectButton style={styles.findButton}>
                    <Feather name="search" size={20} color={"#000"}/>
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    calloutContainer: {
        width: 160,
        height: 46,
        marginBottom: 10,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    calloutText: {
        color: '#A100FF',
        textAlign: 'center',
        fontSize: 14,
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 24,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerText: {
        color: '#8FA7B3',
    },
    findButton: {
        width: 56,
        height: 56,
        backgroundColor: '#A100FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});