import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RegisterScreen({ route, navigation }) {
    let RegisterScreen = route.params
    return (
        <View style={styles.mainContainer}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => { navigation.navigate("GetStartedScreen") }}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "white" }}>Register</Text>
            </View>

            <Image source={require('../../assets/office.jpg')} style={styles.image} />

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Full Name</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Doreen Mensah"
                />
            </View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Email</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="doreen@gmail.com"
                    secureTextEntry={true}
                />
            </View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Phone Number</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="+233 548912650"
                    secureTextEntry={true}
                />
            </View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Role</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Digital Marketer"
                    secureTextEntry={true}
                />
            </View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Twitter</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="@DoreenAnum"
                    secureTextEntry={true}
                />
            </View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>LinkedIn</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="/Doreen.Anum"
                    secureTextEntry={true}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "space-around"
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "#de4f45",
        height: 50,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 350,
        width: 360,
        flex: 0.5
    },
    buttonContainer: {
        height: 40,
        width: 350,
        backgroundColor: "#de4f45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },

})

