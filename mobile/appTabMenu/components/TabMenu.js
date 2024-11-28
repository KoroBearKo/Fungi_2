import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Импорт библиотеки для работы с навигацией
import { Image } from 'react-native'; // импорт библиотеки для работы с изображениями - иконками

//импортируем экраны-примеры. Данныем импорты следует заменить на нужные экраны приложения
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

//Импортируем иконки
import NewsIcon from '../assets/icons/iconNews.png'
import UserIcon from '../assets/icons/iconUser.png'
import BookIcon from '../assets/icons/iconBook.png'

const Tab = createBottomTabNavigator(); // Создаём экземпляр нижней панели навигации

export default function TabMenu() {
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size})=>{
            if(route.name==='Encyclopedia'){
              return <Image source={NewsIcon} style={{ width: '80%', height: '80%', resizeMode: 'contain', tintColor: color }} />;
            } else if (route.name==='Publications') {
              return <Image source={UserIcon} style={{ width: '80%', height: '80%', resizeMode: 'contain', tintColor: color }} />;
            }else if (route.name==='Profile') {
              return <Image source={BookIcon} style={{ width: '80%', height: '80%', resizeMode: 'contain', tintColor: color }} />;
            }
          },
          tabBarShowLabel:false,
          tabBarStyle: {
            position: 'absolute',
            bottom: '3%',
            height: 40,
            backgroundColor: '#452929',
            borderRadius: 20,
            marginHorizontal: '5%',
          },
          borderTopWidth: 0,
          tabBarActiveTintColor: '#ffffff', // Цвет активной иконки
          tabBarInactiveTintColor: '#C79078', // Цвет неактивной иконки
      })}
      >
        {/* В переменной name записыванием название экрана, которое будет использоваться в Tab.Navigator выше
        component - то, что мы импортировали как нужные экраны приложения */}
      <Tab.Screen name="Encyclopedia" component={Screen1}  />
      <Tab.Screen name="Publications" component={Screen2}  />
      <Tab.Screen name="Profile" component={Screen3}  />
    </Tab.Navigator>
  );
}
