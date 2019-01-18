import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { gray, orange } from '../utils/colors'

const DeckListItem = ({ uuid, deck, onPress }) => {

    const { title, cards } = deck
    let numberOfCards = cards && cards.length > 0 ? `${cards.length} cards` : 'No cards'
    return (
        <TouchableOpacity onPress={() => onPress(uuid)}>
            <Text style={styles.cardTitle}>
                {title}
            </Text>
            <Text style={styles.cardSubtitle}>
                {numberOfCards}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    button: {
        marginTop: 8,
        backgroundColor: orange
    },
    cardSubtitle: {
        margin: 8,
        fontSize: 18,
        textAlign: 'center',
        color: gray
    }
});

export default DeckListItem
