import { useNavigation } from "@react-navigation/native";
import { Keyboard, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useAccount } from "../ContextAPI/AccountContext";
import { useState } from "react";
import Toast from "react-native-toast-message";


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

export default function Screen_03() {
    const navigation = useNavigation();
    const { accounts, checkAccount } = useAccount();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={150} // Điều chỉnh giá trị này
                >
                   <View>
                        <Image
                            style={{width: '100%'}}
                            source={require('../assets/images/Image20.png')}
                        />

                        <View style={{backgroundColor: '#F9FAFC', height: '100%', borderRadius: 7, marginTop: -7, padding: 20}}>
                            <View>
                                <Text style={{fontSize: 35, fontWeight: 'bold', paddingTop: 5, paddingBottom: 20 }}>Welcome!</Text>
                            </View>                            
                            <View style={{gap: 20}}>
                                <View>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Email</Text>
                                    <View style={{flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center'}}>
                                        <Image
                                            style={{marginHorizontal: 10}}
                                                source={require('../assets/images/Vector.png')}
                                        />
                                        <TextInput
                                            style={{height: 45, flex: 1}}
                                            placeholder="Enter email"
                                            onChangeText={(text) => setEmail(text)}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Password</Text>
                                    <View style={{flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center'}}>
                                        <Image
                                            style={{marginHorizontal: 10}}
                                                source={require('../assets/images/lock.png')}
                                        />
                                        <TextInput
                                            secureTextEntry={hidePassword}
                                            style={{height: 45, flex: 1}}
                                            placeholder="Enter password"
                                            onChangeText={(text) => setPassword(text)}
                                        />
                                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                            <Image
                                                style={{marginHorizontal: 10, width: 20, height: 17}}
                                                source={
                                                    hidePassword ? require('../assets/images/eyeLock.png') :
                                                    require('../assets/images/eye.png')
                                                }
                                            />
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </View>
                            
                            <TouchableOpacity 
                                style={{
                                    backgroundColor: '#25C3D9', 
                                    alignItems: 'center', 
                                    borderRadius: 30, 
                                    marginVertical: 10, 
                                    marginVertical: 60
                                }}
                                onPress={() => {
                                    if (checkAccount(email, password) === true) {
                                        navigation.navigate('Screen_04');
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Warning',
                                            text2: 'Email or password is not correct',
                                            position: 'top',
                                            visibilityTime: 2000,
                                        });
                                    }
                                }}
                            >
                                <Text style={{color: 'white', fontSize: 15, padding: 15}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Toast config={toastConfig} />
                   </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})