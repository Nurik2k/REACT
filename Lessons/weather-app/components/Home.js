import { useEffect } from "react"
import { Pressable } from "react-native"
import { View, Text } from "react-native-web"

const Home = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => { navigation.navigate('CityWeather', {city: 'Almaty'}) }}><Text>Weather in Almaty</Text></Pressable>
            )
        })
    })

    return (
        <View className="flex-1 items-center justify-center">
            <Text className="py-2 rounded border-solid border-2 border-black hover:border-sky-500">Home</Text>

            <Pressable className="py-2 rounded border-solid border-2 border-black hover:border-sky-500"
                onPress={() => { navigation.navigate('Weather') }}
            ><Text>Weather</Text></Pressable>
        </View>
    )
}

export default Home