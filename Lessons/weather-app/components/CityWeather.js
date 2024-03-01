import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import '../assets/css/tailwind.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/citySlice';

const CityWeather = ({ route, navigation }) => {

    const { city } = route.params

    const dispatch = useDispatch()
    const weatherData = useSelector(state => state.city.weatherData)

    const [temp, setTemp] = useState(0)

    useEffect(() => {
        dispatch(getWeatherData(city))
    }, [])

    useEffect(() => {
        setTemp(weatherData.main.temp)
    },[weatherData])

    return (
        <View className="flex-1 items-center justify-center">
            <View>
                <Text>{weatherData.name}</Text>
                <Text>{temp}C*</Text>
            </View>

            <View>
                <View>
                    <Text>Sunrise</Text>
                    <Text>8:12</Text>
                </View>
                <View>
                    <Text>Sunset</Text>
                    <Text>18:12</Text>
                </View>
            </View>

        </View>
    );
}

export default CityWeather