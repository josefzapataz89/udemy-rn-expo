import React, { Component } from 'react';
import { View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from "react-navigation";
import Toast from "react-native-simple-toast";
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import facebookConfig from '../utils/facebook';

class Start extends Component {
    static navigationOptions = {
        title: 'Expo App'
    };

    login() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });

        this.props.navigation.dispatch(navigateAction);
    }

    register() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });

        this.props.navigation.dispatch(navigateAction);

    }

    async facebook() {
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(facebookConfig.config.application_id, { permissions: facebookConfig.config.permissions });

        if (type === 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);

            firebase.auth().signInWithCredential(credentials)
                .then()
                .catch(error => {
                    Toast.showWithGravity("Error accediendo con Facebook", Toast.LONG, Toast.BOTTOM);
                });
        }
        else if (type === "cancel") {
            Toast.showWithGravity("Inicio de sesión cancelado", Toast.LONG, Toast.BOTTOM);
        }
        else {
            Toast.showWithGravity("Error desconocido", Toast.LONG, Toast.BOTTOM);
        }
    }

    render() {
        return (
            <BackgroundImage
                source={require('../../assets/images/login-bg.png')}
            >
                <View
                    style={{justifyContent: 'center', flex: 1}}
                >
                    <AppButton
                        bgColor="rgba(111,38,74,0.85)"
                        title="Entrar"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgba(200,200,50,0.85)"
                        title="Register"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgba(67,67,146,0.85)"
                        title="Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#fff"
                    />
                </View>
            </BackgroundImage>
        );
    }
}

export default Start;
