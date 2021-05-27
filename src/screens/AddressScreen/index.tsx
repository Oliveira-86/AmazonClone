import React, { useState } from 'react';
import { Text, Alert, View } from 'react-native';

import countryList from 'country-list';

import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code );
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressComplete, setAddressComplete] = useState('');
    const [addressError, setAddressError] = useState('');
    const [city, setCity] = useState('');

    const onCheckout = () => {

        if(!fullname) {
            Alert.alert('Please fill in the fullname field')
            return; 
        }
        
        if(!phone) {
            Alert.alert('Please fill in the phone number field')
            return; 
        }

        if(!address) {
            Alert.alert('Please fill in the address field')
            return; 
        }

        if(!addressComplete) {
            Alert.alert('Please fill in the address field')
            return; 
        }

        if(!city) {
            Alert.alert('Please fill in the city field')
            return; 
        }
    }

    const validateAddress = () => {
        if(address.length < 5) {
            setAddressError('Address is too short');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {countries.map((country: any) => (
                        <Picker.Item value={country.code} label={country.name} />
                    ))}
                </Picker>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>
                    Full name (First and Last name)
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Full name"
                    value={fullname}
                    onChangeText={setFullname}
                />
            </View>     

            <View style={styles.row}>
                <Text style={styles.label}>
                    Phone number
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>
                    Address
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Street address or P.O. Box"
                    value={address}
                    onEndEditing={validateAddress}
                    onChangeText={(text) => {
                        setAddress(text);
                        setAddressError('');
                    }}
                />
               
                {!!addressError && (
                    <Text style={styles.errorLabel}>{addressError}</Text>
                )}
            </View>   

            <View style={styles.row}>
                <Text style={styles.label}>
                    City
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="City"
                    value={city}
                    onChangeText={setCity}
                />
            </View>  

            <Button text='Checkout' onPress={onCheckout} /> 
        </View>
    );
};

export default AddressScreen;
