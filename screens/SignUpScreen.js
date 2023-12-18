import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View } from 'react-native-web';
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { Touchable } from 'react-native';
import { useState } from 'react';


export default function SignUpScreen(){
const navigation = useNavigation();
const [email , setEmail] =useState('');
const [password , setPassword] =useState('');

const handleSubmit = async() =>{
    if(email && password){
        try {
       await createUserWithEmailAndPassword(auth , email , password);
        }catch(err) {
          console.log('got error:' + err.message);
        }
    }
}
return(
     <View className="flex-1 bg-white" style={{backgroundColor:themeColors.bg}} >
        <SafeAreaView className="flex">
            <View className = "flex-row justify-start">
            <TouchableOpacity
            onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
            <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>
        </SafeAreaView>
        <View className = "form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             value="john snow"
             placeholder="Enter Name"
             ></TextInput>

            <Text className="text-gray-700 ml-4">Email address</Text>
            <TextInput
             className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
             value={email}
             onChangeText = {value => setEmail(value)}
             placeholder="Enter Email"
             ></TextInput>
              
             <Text className="text-gray-700 ml-4">Password</Text>
             <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                value={password}
                onChangeText = {value => setPassword(value)}
                secureTextEntry
                placeholder='Enter Password'
            />
             <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl" 
                onPress = {handleSubmit}>
        <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
        </View>

)}