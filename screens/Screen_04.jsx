import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View , Image, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Screen_04() {
    const images = [
        {url: require('../assets/images/Container7(2).png'), priceXS: 1.99, priceS: 2.99, priceM: 3.99, priceL: 4.99, priceXL: 5.99},
        {url: require('../assets/images/Container7(1).png'), priceXS: 1.99, priceS: 2.99, priceM: 3.99, priceL: 4.99, priceXL: 5.99},
        {url: require('../assets/images/Container7(3).png'), priceXS: 1.99, priceS: 2.99, priceM: 3.99, priceL: 4.99, priceXL: 5.99},
        {url: require('../assets/images/Container7.png'), priceXS: 1.99, priceS: 2.99, priceM: 3.99, priceL: 4.99, priceXL: 5.99},
    ]
    const sizes = [
        'XS', 'S', 'M', 'L', 'XL'
    ]
        
    const showAlert = () => {
        setShowAlert(true)
    };
    
    const hideAlert = () => {
        setShowAlert(false)
    };

    const navigation = useNavigation();
    const [imgCurrent, setImgCurrent] = useState(require('../assets/images/Container7(3).png'));
    const [indexSelected, setIndexSelected] = useState(2);
    const [priceCurrent, setPriceCurrent] = useState(4.99);
    const [totalCurrent, setTotalCurrent] = useState(4.99);
    const [quantityCurrent, setQuantityCurrent] = useState(1);
    const [sizeSelected, setSizeSelected] = useState(2);
    const [sizeCurrent, setSizeCurrent] = useState('M');
    const [isShowAlert, setShowAlert] = useState(false);
    return(
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={{backgroundColor: 'white', flex: 1}}>
                        <View style={{flex: 1, paddingHorizontal: 16, paddingTop: 16}}>
                            <View style={{width: '100%', alignItems: 'center', }}>
                                <Image
                                    style={{width: '100%', height: 200, marginBottom: 10}}
                                    source={imgCurrent}
                                />
                            </View>
                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                {
                                    images.map((image, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => {
                                                setImgCurrent(image.url)
                                                setIndexSelected(index)
                                                switch(sizeCurrent) {
                                                    case 'XS':
                                                        setPriceCurrent(image.priceXS);
                                                        setTotalCurrent(image.priceXS);
                                                        break;
                                                    case 'S':
                                                        setPriceCurrent(image.priceS);
                                                        setTotalCurrent(image.priceS);
                                                        break;
                                                    case 'M':
                                                        setPriceCurrent(image.priceM);
                                                        setTotalCurrent(image.priceM);
                                                        break;
                                                    case 'L':
                                                        setPriceCurrent(image.priceL);
                                                        setTotalCurrent(image.priceL);
                                                        break;
                                                    case 'XL':
                                                        setPriceCurrent(image.priceXL);
                                                        setTotalCurrent(image.priceXL);
                                                        break;
                                                }
                                                setQuantityCurrent(1)
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: 82, 
                                                    height: 82, 
                                                    borderWidth: indexSelected===index ? 3 : 0,
                                                    borderRadius: 10,
                                                    borderColor: '#25C3D9'
                                                }}
                                                source={image.url}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 12}}>
                                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#25C3D9'}}>${priceCurrent}</Text>
                                <View style={{ backgroundColor: '#FCEDEE', paddingVertical: 3, paddingHorizontal: 7, borderRadius: 10}}>
                                    <Text style={{color: '#F38594'}}>Buy 1 get 1</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                                <View style={{gap:2}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product name</Text>
                                    <Text style={{fontSize: 12, color: 'gray'}}>Occaecat est deserunt tempor offici</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                                    <Image
                                        source={require('../assets/images/Rating3.png')}
                                    />
                                    <Text>4.5</Text>
                                </View>
                            </View>
                            <View style={{paddingTop: 10, gap: 5}}>
                                <Text style={{color: 'gray', fontSize: 16}}>Size</Text>
                                <View style={{flexDirection: 'row'}}>
                                    {sizes.map((item, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={[styles.size, {
                                                backgroundColor: index===sizeSelected ? '#25C3D9' : 'white',
                                                borderTopLeftRadius: index===0 ? 5 : 0,
                                                borderBottomLeftRadius: index===0 ? 5 : 0,
                                                borderTopRightRadius:  index===sizes.length-1 ? 5 : 0,
                                                borderBottomRightRadius:  index===sizes.length-1 ? 5 : 0,
                                            }]}
                                            onPress={() => {
                                                setSizeSelected(index)
                                                setSizeCurrent(sizes.at(index))
                                                images.forEach((image) => {
                                                    if (image.url === imgCurrent) {
                                                        switch(sizes.at(index)) {
                                                            case 'XS':
                                                                setPriceCurrent(image.priceXS);
                                                                setTotalCurrent(image.priceXS * quantityCurrent);
                                                                break;
                                                            case 'S':
                                                                setPriceCurrent(image.priceS);
                                                                setTotalCurrent(image.priceS * quantityCurrent);
                                                                break;
                                                            case 'M':
                                                                setPriceCurrent(image.priceM);
                                                                setTotalCurrent(image.priceM* quantityCurrent);
                                                                break;
                                                            case 'L':
                                                                setPriceCurrent(image.priceL);
                                                                setTotalCurrent(image.priceL * quantityCurrent);
                                                                break;
                                                            case 'XL':
                                                                setPriceCurrent(image.priceXL);
                                                                setTotalCurrent(image.priceXL * quantityCurrent);
                                                                break;
                                                        }
                                                    }
                                                })
                                            }}
                                        >
                                                
                                                <Text style={[styles.textSize, {color: index===sizeSelected ? 'white' : 'gray'}]}>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            <View>
                                <Text style={{color: 'gray', fontSize: 16, paddingTop: 10}}>Quantity</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E7E8EA', paddingBottom: 10, paddingTop: 5}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                        <TouchableOpacity 
                                            style={{
                                                justifyContent: 'center', 
                                                alignItems: 'center', width: 32, 
                                                height: 32, backgroundColor: '#F1F2F4', 
                                                borderRadius: '50%'
                                            }}
                                            onPress={() => {
                                                setQuantityCurrent(Math.max(quantityCurrent - 1, 1))
                                                setTotalCurrent(Math.max(totalCurrent - (priceCurrent * 1), priceCurrent))
                                            }}
                                        >
                                            <Text style={{fontSize: 20, color: 'black'}}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize: 20, color: 'gray'}}>{quantityCurrent}</Text>
                                        <TouchableOpacity 
                                            style={{
                                                justifyContent: 'center', 
                                                alignItems: 'center', 
                                                width: 32, 
                                                height: 32, 
                                                backgroundColor: '#25C3D9', 
                                                borderRadius: '50%'
                                            }}
                                            onPress={() => {
                                                setQuantityCurrent(quantityCurrent + 1)
                                                setTotalCurrent(totalCurrent + (priceCurrent * 1))
                                            }}
                                        >
                                            <Text style={{fontSize: 20, color: 'white'}}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                                        <Text style={{color: 'gray'}}>Total</Text>
                                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>${totalCurrent.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View style={{borderBottomWidth: 1, borderColor: '#E7E8EA', paddingVertical: 16}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Size guide</Text>
                                </View>
                                <View style={{paddingTop: 16}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Review (99)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{borderTopWidth: 1, borderColor: '#E7E8EA', paddingVertical: 13, paddingHorizontal: 16}}>
                            <TouchableOpacity 
                                style={{
                                    width: '100%', 
                                    height: 45, 
                                    backgroundColor: '#25C3D9', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    borderRadius: 3
                                }}
                                onPress={() => showAlert()}
                            >
                                <Text style={{fontSize: 18, color:'white'}}>Add to cart</Text>
                                <AwesomeAlert
                                    show={isShowAlert}
                                    showProgress={false}
                                    title="Payment Successful"
                                    message={`Total: $${totalCurrent.toFixed(2)}`} 
                                    closeOnTouchOutside={true}
                                    closeOnHardwareBackPress={false}
                                    showConfirmButton={true}
                                    confirmText="Close"
                                    confirmButtonColor="#25C3D9"
                                    onConfirmPressed={() => {
                                        hideAlert();
                                        setQuantityCurrent(1)
                                        setTotalCurrent(priceCurrent)
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }, 
    size: {
        borderWidth: 1, 
        borderColor: 'gray', 
        width: 35, height: 30, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    textSize: {
        color: 'gray'
    }
})
