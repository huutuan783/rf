import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View , Image, SafeAreaView} from "react-native";
import image from '../assets/images/Container17.png'
import { useNavigation } from "@react-navigation/native";

export default function Screen_01() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex: 1}}>
             <View style={styles.container}>
                <View style={{gap: 6}}>
                    <Image
                        style={{height: 380, borderRadius: 24, marginTop: 10}}
                        source={image}
                    />
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>Boost Productivity</Text>
                    <Text style={{fontSize: 15, color: 'gray'}}>Simplify tasks, boost productivity</Text>
                    <TouchableOpacity 
                        style={{backgroundColor: '#25C3D9', alignItems: 'center', borderRadius: 5, marginTop: 14, marginBottom: 10}}
                        onPress={() => navigation.navigate('Screen_02')}
                    >
                        <Text style={{color: 'white', fontSize: 18, padding: 14}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{alignItems: 'center'}}
                        onPress={() => navigation.navigate('Screen_03')}
                    >
                        <Text style={{fontSize: 18, color: 'gray'}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <Image
                            style={{width: 46, height: 12}}
                            source={require('../assets/images/....png')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
