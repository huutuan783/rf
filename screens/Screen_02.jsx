import Toast from 'react-native-toast-message';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Text, View , Image } from "react-native";
import imageLogo from '../assets/images/Image19.png';
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useAccount } from "../ContextAPI/AccountContext";
import { useNavigation } from "@react-navigation/native";

const toastConfig = {
    error: ({ text1, text2, props }) => (
        <View style={{
            height: 60,
            width: '90%',
            backgroundColor: 'white', 
            borderColor: '#25C3D9', 
            borderWidth: 2, 
            borderLeftWidth: 5, 
            borderLeftColor: '#25C3D9', 
            borderRadius: 10, 
            justifyContent: 'center',
            paddingHorizontal: 15,
            alignSelf: 'center',
            zIndex: 999, 
        }}>
            <Text style={{ color: '#25C3D9', fontSize: 18, fontWeight: 'bold' }}>{text1}</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>{text2}</Text>
        </View>
    ),
};

export default function Screen_02() {
    const [isChecked, setChecked] = useState(false);
    const { addAccount } = useAccount();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={150}
                >
                    <View style={styles.container}>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                source={imageLogo}
                            />
                            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 10}}>Nice to see you!</Text>
                            <Text style={{fontSize: 15, color: 'gray'}}>Create your account</Text>
                        </View>
                        <View style={{gap: 20, width: '100%', paddingHorizontal: 24}}>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/codicon_account.png')}
                                />
                                <TextInput
                                    value={userName}
                                    style={styles.input}
                                    placeholder="Enter your user name"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setUserName(text)}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/Vector.png')}
                                />
                                <TextInput
                                    value={email}
                                    style={styles.input}
                                    placeholder="Enter your email address"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setEmail(text)}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/lock.png')}
                                />
                                <TextInput
                                    secureTextEntry={hidePassword}
                                    value={password}
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                    <Image
                                        style={styles.inputIcon}
                                        source={
                                            hidePassword ? require('../assets/images/eyeLock.png') :
                                            require('../assets/images/eye.png')
                                        }
                                    />
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Checkbox
                                    style={{marginRight: 5}}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#197DCA' : undefined}
                                />
                                <Text>I agree with <Text style={{color: '#197DCA'}}>Terms & Conditions</Text></Text>
                            </View>

                            <TouchableOpacity 
                                style={{
                                    backgroundColor: '#25C3D9', 
                                    alignItems: 'center', 
                                    borderRadius: 10, 
                                    marginVertical: 10}}
                                onPress={() => {
                                    if (isChecked === true) {
                                        if (userName.length === 0) {
                                            Toast.show({
                                                type: 'error',
                                                text1: 'Warning',
                                                text2: 'Username is required',
                                                position: 'top',
                                                visibilityTime: 2000,
                                            });
                                            return;
                                        }
                                        addAccount({userName, email, password});
                                        setEmail('');
                                        setUserName('');
                                        setPassword('');
                                        navigation.navigate('Screen_03');
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Warning',
                                            text2: 'You must agree with Terms & Conditions',
                                            position: 'top',
                                            visibilityTime: 2000,
                                        });
                                    }
                                }}    
                            >
                                <Text style={{color: 'white', fontSize: 15, padding: 15}}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                        <Toast config={toastConfig} />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 50,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray'
    },
    inputIcon: {
        width: 20, 
        height: 17, 
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
    }
});
