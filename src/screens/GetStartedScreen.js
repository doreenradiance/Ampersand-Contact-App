import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function GetStartedScreen({ route, navigation }) {
    let firstScreen = route.params;
    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity onPress={() => { navigation.navigate("FirstScreen") }}
            >
                <AntDesign name="left" style={styles.left} size={30} />
            </TouchableOpacity>
            <Image source={require('../../assets/image.jpg')} style={styles.image} />

            <View style={styles.texts}>
                <Text style={{ fontSize: 20, marginHorizontal: 10 }}>KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN</Text>
                <Text style={{ fontSize: 16, marginHorizontal: 10, marginTop: 10 }}>Sign in or register with your CODETRAIN email.</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footer} onPress={() => {
                    navigation.navigate('RegisterScreen')
                }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>REGISTER</Text>
                        <View style={{
                            backgroundColor: "red",
                            height: 2,
                            width: 80,
                            borderRadius: 15,
                        }}></View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footer} onPress={() => {
                    navigation.navigate('LogInScreen')
                }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>SIGN IN</Text>
                        <View style={{
                            backgroundColor: "red",
                            height: 2,
                            width: 65,
                            borderRadius: 15,
                        }}></View>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    icons: {
        flexDirection: "row",
        marginTop: 15,
        marginRight: 20,
        alignSelf: "flex-start",
    },
    left: {
        marginTop: 30
    },

    image: {
        height: 350,
        width: 360,
        flex: 0.5
    },

    texts: {
        flex: 0.15,
        marginTop: 25
    },

    footer: {
        flex: 0.35,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: "space-around"

    },


})
