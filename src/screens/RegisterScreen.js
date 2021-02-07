import React, { Component } from 'react'
// import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { createEmailAccount } from "../redux/actions/authAction";

class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            role: "",
            twitter: "",
            linkedIn: ""
        }
    }
    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    handleOnSubmit = () =>{
        this.props.createEmailAccount(this.state.email, this.state.password)
    }

    render() {

        const { route, navigation, auth} = this.props
        let RegisterScreen = route.params

        return (
            <ScrollView style={styles.mainContainer}>

                <Image source={require('../../assets/profile.jpg')} style={styles.image} />

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>Full Name</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.name}
                        onChangeText={(text) => { this.handleUpdateState("name", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Doreen Mensah"
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>Email</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.email}
                        onChangeText={(text) => { this.handleUpdateState("email", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="doreen@gmail.com"
                    // secureTextEntry={true}
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>Password</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.password}
                        onChangeText={(text) => { this.handleUpdateState("password", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="password"
                    // secureTextEntry={true}
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>Role</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.role}
                        onChangeText={(text) => { this.handleUpdateState("role", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Digital Marketer"
                    // secureTextEntry={true}
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>Twitter</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10, marginLeft: 15 }}
                        value={this.state.twitter}
                        onChangeText={(text) => { this.handleUpdateState("twitter", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="@DoreenAnum"
                    // secureTextEntry={true}
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={{
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>LinkedIn</Text>
                    <TextInput style={{ marginRight: 20, marginBottom: 10 }}
                        value={this.state.linkedIn}
                        onChangeText={(text) => { this.handleUpdateState("linkedIn", text) }}
                        placeholderTextColor="#aaaaaa"
                        placeholder="/Doreen.Anum"
                    // secureTextEntry={true}
                    />
                </View>

                <View style={{ backgroundColor: "#e6e7e8", height: 2, width: 330, marginBottom: 20, marginLeft: 15 }}></View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.handleOnSubmit}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent: "space-around"
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "#de4f45",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 200,
        width: "100%",
        // flex: 0.5,
        marginBottom: 15
    },
    buttonContainer: {
        height: 40,
        width: 320,
        backgroundColor: "#de4f45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginLeft: 20
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },
    footer: {
        marginBottom: 50
    }
})

const mapStateToProp = (state)=>{
    return{auth:state}
}
export default connect(mapStateToProp, { createEmailAccount })(RegisterScreen);