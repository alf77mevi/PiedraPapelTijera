import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRpsController } from '../hooks/Controller';

export default function GameView() {
const { score, playerMove, cpuMove, result, onSelect, onReset, MOVES } = useRpsController();
const RESULT_TEXT = {
player: 'JUGADOR',
cpu: 'COMPUTADORA',
draw: 'EMPATE',
null: '—',
};


const ICONS = {
rock: require('../assets/rock.png'),
paper: require('../assets/paper.png'),
scissors: require('../assets/scissors.png'),
question: require('../assets/question.png'),
};

return (
<View style={styles.screen}>
<Text style={styles.title}>Piedra, Papel, Tijeras</Text>


<View style={styles.scoreRow}>
<View style={styles.scoreBox}>
<Text style={styles.scoreLabel}>Jugador</Text>
<Text style={styles.scoreValue}>{score.player}</Text>
<View style={styles.divider} />
</View>
<View style={styles.scoreBox}>
<Text style={styles.scoreLabel}>Computadora</Text>
<Text style={styles.scoreValue}>{score.cpu}</Text>
<View style={styles.divider} />
</View>
</View>


<View style={styles.choicesRow}>
<ChoiceButton icon={ICONS[MOVES.ROCK]} onPress={() => onSelect(MOVES.ROCK)} />
<ChoiceButton icon={ICONS[MOVES.PAPER]} onPress={() => onSelect(MOVES.PAPER)} />
<ChoiceButton icon={ICONS[MOVES.SCISSORS]} onPress={() => onSelect(MOVES.SCISSORS)} />
</View>


<View style={styles.resultsBlock}>
<View style={styles.picksRow}>
<PickCard icon={ICONS[playerMove ?? 'question']} label="Jugador" />
<PickCard icon={ICONS[cpuMove ?? 'question']} label="Computadora" />
</View>


<View style={styles.resultPill}>
<Text style={styles.resultText}>R: {RESULT_TEXT[result ?? 'null']}</Text>
</View>


<TouchableOpacity style={styles.resetBtn} onPress={onReset}>
<Text style={styles.resetTxt}>Reiniciar marcador</Text>
</TouchableOpacity>
</View>
</View>
);
}


function ChoiceButton({ icon, onPress }) {
return (
<TouchableOpacity accessibilityRole="button" style={styles.choiceBtn} onPress={onPress}>
<Image source={icon} style={styles.choiceIcon} resizeMode="contain" />
</TouchableOpacity>
);
}


function PickCard({ icon, label }) {
return (
<View style={styles.pickCard}>
<Image source={icon} style={styles.pickIcon} resizeMode="contain" />
<Text style={styles.pickLabel}>{label}</Text>
</View>
);
}

const styles = StyleSheet.create({
screen: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
title: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginVertical: 6 },


scoreRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
scoreBox: { flex: 1, marginHorizontal: 6, alignItems: 'center' },
scoreLabel: { color: '#757575', fontSize: 13, marginBottom: 2 },
scoreValue: { fontSize: 28, fontWeight: '700', color: '#424242', marginBottom: 6 },
divider: { height: 1, alignSelf: 'stretch', backgroundColor: '#E0E0E0' },


choicesRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 },
choiceBtn: { width: 90, height: 90, backgroundColor: '#E0E0E0', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
choiceIcon: { width: 56, height: 56 },


resultsBlock: { marginTop: 28, alignItems: 'center' },
picksRow: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginBottom: 22 },
pickCard: { width: 140, height: 120, backgroundColor: '#EEEEEE', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 8 },
pickIcon: { width: 60, height: 60, marginBottom: 8 },
pickLabel: { color: '#616161', fontSize: 12 },


resultPill: { paddingHorizontal: 18, paddingVertical: 10, backgroundColor: '#F1F1F1', borderRadius: 22, marginBottom: 10 },
resultText: { fontWeight: '700', color: '#333' },


resetBtn: { marginTop: 6, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: '#E8EAF6', borderRadius: 8 },
resetTxt: { color: '#3F51B5', fontWeight: '600' },
});