import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { black, gray, orange, white } from '../utils/colors'

class Deck extends Component {

    handleAddCard = () => {
        const { key, deck } = this.props.navigation.state.params

        this.props.navigation.navigate('AddCard', { key, deck })
    }
    handleStartQuiz = () => {
        const { deck } = this.props.navigation.state.params

        this.props.navigation.navigate('Quiz', { cards: deck.cards })
    }

    render() {
        const { deck } = this.props.navigation.state.params

        let numberOfCards = deck.cards && deck.cards.length > 0 ? `${deck.cards.length} cards` : 'No cards'

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
                <Text style={styles.subtitle}>
                    {numberOfCards}
                </Text>
                <TouchableOpacity
                    onPress={this.handleAddCard}
                    style={styles.addCardButton}>
                    <Text style={styles.addCardButtonText}>
                        Add Card
                    </Text>
                </TouchableOpacity>
                {deck.cards && deck.cards.length > 0
                    ? <TouchableOpacity
                        onPress={this.handleStartQuiz}
                        style={styles.startQuizButton}>
                        <Text style={styles.startQuizButtonText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    : null}

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        margin: 8,

    },
    title: {
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 18,
        margin: 8,
        textAlign: 'center',
        color: gray
    },
    addCardButton: {
        marginTop: 8,
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black
    },
    addCardButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: black
    },
    startQuizButton: {
        marginTop: 8,
        backgroundColor: orange
    },
    startQuizButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    }
})

export default Deck
