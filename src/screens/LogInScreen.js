import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LogInScreen({ route, navigation }) {
    let LogInScreen = route.params;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => { navigation.navigate("GetStartedScreen") }}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20,color:"white" }}> Sign In</Text>
            </View>

            <Image source={require('../../assets/office.jpg')} style={styles.image} />

            <Text style={{fontSize:20 ,flex: 0.15,color:"#ab3d35"}}>Email or Password is incorrect please check and try again.</Text>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"
        }}>
                <Text>Email</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="doreen@gmail.com"
                />
            </View>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"
        }}>
                <Text>Password</Text>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.forgotPassword}>
                    <Text>Forgot? </Text>
                    <View>
                        <Text>Reset Password</Text>
                        <View style={{
                            backgroundColor: "#de4f45",
                            height: 2,
                            width: 100,
                            borderRadius: 15,
                        }}></View>
                    </View>
                </View>
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
    forgotPassword: {
        flexDirection: "row",
    }
})
