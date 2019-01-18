import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { black, gray, green, orange, red, white } from '../utils/colors'
import { AntDesign } from '@expo/vector-icons'

class QuizResult extends Component {

    handleTryAgain = () => {
        const { cards } = this.props.navigation.state.params

        this.props.navigation.navigate('Quiz', { cards })
    }

    handleTryAnotherDeck = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        const { markedCorrect, markedIncorrect, grade } = this.props.navigation.state.params

        let gradeIcon = <AntDesign name='smileo' size={60} />

        if (grade < 50) {
            gradeIcon = <AntDesign name='frowno' size={60} />
        } else if (grade >= 50 && grade < 70) {
            gradeIcon = <AntDesign name='meh' size={60} />
        }

        return (
            <View style={styles.container}>
                {gradeIcon}
                <Text style={styles.gradeText}>Grade: {grade}%</Text>
                <Text style={styles.correctText}>Correct Questions: {markedCorrect}</Text>
                <Text style={styles.inCorrectText}>Incorrect Questions: {markedIncorrect}</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        onPress={this.handleTryAgain}
                        style={styles.tryAgainButton}>
                        <Text style={styles.tryAgainButtonText}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleTryAnotherDeck}
                        style={styles.tryAnotherDeckButton}>
                        <Text style={styles.tryAnotherDeckButtonText}>
                            Try Another Deck
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actions: {
        width: '100%',
    },
    correctText: {
        fontSize: 24,
        margin: 24,
        color: green
    },
    inCorrectText: {
        fontSize: 24,
        margin: 24,
        color: red
    },
    gradeText: {
        fontSize: 24,
        margin: 24,
    },
    tryAgainButton: {
        margin: 16,
        backgroundColor: orange
    },
    tryAgainButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    },
    tryAnotherDeckButton: {
        margin: 16,
        backgroundColor: white,
        borderWidth: 1,

    },
    tryAnotherDeckButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: black
    }
})

export default QuizResult
