import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { submitDeck } from '../utils/api'
import { submitDeck as submitDeckAction } from '../actions'
import { gray, orange, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'

class DecksList extends Component {

    state = {
        title: ''
    }

    onSubmit = () => {

        const key = uuidv1()
        
        const deck = {
            title: this.state.title,
            cards: []
        }
        //redux
        this.props.dispatch(submitDeckAction({
            [key]: deck
        }))

        this.setState(() => ({ title: '' }))

        //store
        submitDeck({ key, deck })

        //navigate to edit deck
        this.props.navigation.navigate('Deck', { key, deck })
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleHeader}>
                    What is the name of the new deck?
                </Text>
                <TextInput
                    autoFocus
                    value={this.state.title}
                    style={styles.titleInput}
                    onChangeText={(title) => this.setState({ title })} />
                <TouchableOpacity
                    onPress={this.onSubmit}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Create Deck
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
    titleHeader: {
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    titleInput: {
        height: 40,
        padding: 8,
        borderColor: gray,
        borderWidth: 1
    },
    button: {
        marginTop: 8,
        backgroundColor: orange
    },
    buttonText: {
        margin: 8,
        fontSize: 20,
        textAlign: 'center',
        color: white
    }
});


export default connect()(DecksList)
