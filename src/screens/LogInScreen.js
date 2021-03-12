import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/actions/authAction"

class LogInScreen extends Component {


    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = () => {
        this.props.loginEmailAccount(this.state.email, this.state.password)
    }

    render() {

        const { route, navigation, auth } = this.props
        let RegisterScreen = route.params

        let LogInScreen = route.params;
        return (
            <View style={styles.mainContainer}>
                <Image source={require('../../assets/office.jpg')} style={styles.image} />

                <Text style={{ fontSize: 15, color: "#ab3d35", marginLeft: 10, marginBottom: 20 }}>Email or Password is incorrect check and try again</Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15, marginBottom: 10 }}>Email</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.email}
                        onChangeText={(text) => { this.handleUpdateState("email", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="doreen@gmail.com"
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 10, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15, marginBottom: 35 }}>Password</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 35 }}
                    value={this.state.password}
                    onChangeText={(text) => { this.handleUpdateState("password", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={this.handleOnSubmit}
                       style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.forgotPassword}>
                        <Text style={{ fontSize: 15 }}>Forgot? </Text>
                        <View>
                            <Text style={{ fontSize: 15, marginBottom: 5 }}>Reset Password</Text>
                            <View style={{
                                backgroundColor: "#de4f45",
                                height: 2,
                                width: 107,
                                borderRadius: 15,
                            }}></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    heading: {
        flexDirection: "row",
        backgroundColor: "#de4f45",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 300,
        width: "100%",
        flex: 0.5,
        marginBottom: 50
    },
    buttonContainer: {
        height: 40,
        width: 320,
        backgroundColor: "#de4f45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginLeft: 20,
        marginBottom: 40
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },
    forgotPassword: {
        flexDirection: "row",
        marginLeft: 20
    }
})

const mapStateToProp = (state)=>{
    return{auth:state}
}

export default connect(mapStateToProp, (loginEmailAccount))(LogInScreen);