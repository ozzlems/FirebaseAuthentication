import { TouchableOpacity , View , Text} from "react-native";
import { SafeAreaView } from "react-native-web";




export default function HomeScreen() {
    const handleLogout = async()=> {
      await signOut(auth);  
    }
    return(
        <SafeAreaView className = "flex-1 flex-row justify-center items-center">
            <Text className = "text-lg">Home Page - </Text>
            <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400" >
                <Text className="text-white text-lg font-bold">Logout</Text>
                </TouchableOpacity>   
        </SafeAreaView>
    )
}