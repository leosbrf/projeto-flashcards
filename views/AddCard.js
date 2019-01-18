import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { gray, orange, white } from '../utils/colors'
import { submitDeck } from '../utils/api'
import { submitDeck as submitDeckAction } from '../actions'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleAddCard = () => {
        const { key, deck } = this.props.navigation.state.params
        const { question, answer } = this.state

        if (!question || !answer) {
            alert('Fill all fields')
            return
        }

        if (!deck.cards)
            deck.cards = []

        deck.cards.push({ question, answer })

        //redux
        this.props.dispatch(submitDeckAction({
            [key]: deck
        }))

        this.setState(() => ({ question: '', answer: '' }))

        //store
        submitDeck({ key, deck })

        //navigate to deck
        this.props.navigation.navigate('Deck', { key, deck })
    }

    render() {

        const { deck } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <Text style={styles.mainHeader}>
                    {deck.title}
                </Text>
                <Text style={styles.header}>
                    Question
                </Text>
                <TextInput
                    autoFocus
                    value={this.state.question}
                    style={styles.textInput}
                    onChangeText={(question) => this.setState({ question })} />
                <Text style={styles.header}>
                    Answer
                </Text>
                <TextInput
                    value={this.state.answer}
                    style={styles.textInput}
                    onChangeText={(answer) => this.setState({ answer })} />
                <TouchableOpacity
                    onPress={this.handleAddCard}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Add Card
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        margin: 24
    },
    mainHeader: {
        fontSize: 24,
        margin: 8,
        marginBottom: 16,
        textAlign: 'center'
    },
    header: {
        fontSize: 18,
        margin: 8,
        textAlign: 'center'
    },
    textInput: {
        height: 40,
        padding: 8,
        borderColor: gray,
        borderWidth: 1
    },
    button: {
        marginTop: 24,
        backgroundColor: orange
    },
    buttonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    }
});

export default connect()(AddCard)
