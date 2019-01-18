import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, resetStorage } from '../utils/api'
import { receiveDecks } from '../actions'
import { gray, white } from '../utils/colors'
import DeckListItem from '../components/DeckListItem'

class DecksList extends Component {



    componentDidMount() {

        const { dispatch } = this.props

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))

    }

    goToDeck = (key) => {
        const { decks } = this.props
        this.props.navigation.navigate('Deck', { key, deck: decks[key] })
    }

    renderDeckListItem = ({ item: key }) => {

        const { decks } = this.props
        const deck = decks[key]

        return <DeckListItem uuid={key} deck={deck} onPress={this.goToDeck} />
    }

    render() {

        const { decks } = this.props

        const keys = Object.keys(decks)

        return (
            <View style={styles.container}>

                {keys && keys.length > 0
                    ? <FlatList
                        data={keys}
                        renderItem={this.renderDeckListItem}
                        keyExtractor={(key, index) => key.toString()}
                    />
                    : <Text style={styles.emptyText}>No decks registered</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: white
    },
    emptyText: {
        margin: 16,
        fontSize: 24,
        color: gray,
        textAlign: 'center'
    }
});

const mapStateToProps = (decks) => ({
    decks
})

export default connect(mapStateToProps)(DecksList)
