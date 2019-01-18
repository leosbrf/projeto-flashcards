import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { black, gray, green, orange, red, white } from '../utils/colors'

class Quiz extends Component {

    state = {
        index: 0,
        showAnswer: false,
        markedCorrect: 0,
        markedIncorrect: 0
    }

    resetState = () => {
        this.setState(() => ({
            index: 0,
            showAnswer: false,
            markedCorrect: 0,
            markedIncorrect: 0
        }))
    }

    handleShowAnswer = () => {
        this.setState((prevState) => ({ showAnswer: !prevState.showAnswer }))
    }

    handleCorrectAnswer = () => {
        const { markedCorrect, markedIncorrect } = this.state
        const mc = markedCorrect + 1
        this.setState(() => ({ markedCorrect: mc }))
        this.handleNextQuestion(mc, markedIncorrect)
    }

    handleIncorrectAnswer = () => {
        const { markedCorrect, markedIncorrect } = this.state
        const mi = markedIncorrect + 1
        this.setState(() => ({ markedIncorrect: mi }))
        this.handleNextQuestion(markedCorrect, mi)
    }

    handleNextQuestion = (markedCorrect, markedIncorrect) => {
        const { index } = this.state
        const { cards } = this.props.navigation.state.params
        const next = index + 1

        if (next < cards.length) {
            this.setState((prevState) => ({
                index: next,
                showAnswer: !prevState.showAnswer
            }))
        } else {
            this.resetState()
            this.props.navigation.navigate('QuizResult', { cards, markedCorrect, markedIncorrect, grade: ((markedCorrect / cards.length) * 100).toFixed(0) })
        }
    }

    renderActions = () => (
        <View style={styles.actions}>
            <TouchableOpacity
                onPress={this.handleCorrectAnswer}
                style={styles.correctButton}>
                <Text style={styles.correctButtonText}>
                    Correct
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.handleIncorrectAnswer}
                style={styles.incorrectButton}>
                <Text style={styles.incorrectButtonText}>
                    Incorrect
                </Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { index, showAnswer } = this.state
        const { cards } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <Text style={styles.pages}>
                    {`${index + 1}/${cards.length}`}
                </Text>
                <View style={styles.cardContainer}>
                    <TouchableOpacity
                        onPress={this.handleShowAnswer}
                        style={styles.card}>
                        <Text style={styles.showAnswerButtonText}>
                            {showAnswer ? 'Answer' : 'Question'}
                        </Text>
                        {showAnswer
                            ? <Text style={styles.answer}>
                                {cards[index].answer}
                            </Text>
                            : <Text style={styles.question}>
                                {cards[index].question}
                            </Text>
                        }
                    </TouchableOpacity>



                </View>
                <Text>
                    Tap inside the card to toggle
                </Text>

                {showAnswer ? this.renderActions() : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        margin: 8,
        alignItems: 'center'
    },
    pages: {
        paddingBottom: 16,
        color: gray,
        fontSize: 14
    },
    cardContainer: {
        width: '100%',
        height: '50%',
        margin: 8,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: gray
    },
    card: {
        flex: 1,
        justifyContent: 'flex-start',

    },
    question: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16,
    },
    answer: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16,
    },
    showAnswerButton: {
        marginTop: 8,
        backgroundColor: white
    },
    showAnswerButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: gray
    },
    actions: {
        width: '100%',
    },
    correctButton: {
        marginTop: 16,
        backgroundColor: green,
    },
    correctButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    },
    incorrectButton: {
        marginTop: 16,
        backgroundColor: red,
    },
    incorrectButtonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    }
})

export default Quiz
