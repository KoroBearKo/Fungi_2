import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Импорт NavigationContainer

//импортируем нижнее меню
import TabMenu from './components/TabMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabMenu />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Обеспечивает правильный растягивание контейнера на весь экран
    backgroundColor: '#452929', // Ваш желаемый цвет фона
  },
});