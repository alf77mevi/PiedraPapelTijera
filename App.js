import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import GameView from './app/GameForm';


export default function App() {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>PPT</Text>
</View>
<GameView />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#fff' },
header: {
height: 56,
backgroundColor: '#6200EE',
justifyContent: 'center',
paddingHorizontal: 16,
paddingTop: 6,
},
headerTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
});