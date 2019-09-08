import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";

class RestaurantEmpty extends Component {
    render() {
        const {text} = this.props;

        return (
            <View style={ styles.restaurantEmptyView }>
                <Text style={styles.restauratEmptyText}>
                    {text}
                </Text>
            </View>
        );
    }
}

export default RestaurantEmpty;

const styles = StyleSheet.create({
    restaurantEmptyView: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 10,
        marginTop: 10
    },
    restauratEmptyText: {
        backgroundColor: 'rgba(10, 255, 10, 0.8)',
        color: 'white',
        textAlign: 'center',
        padding: 20
    }
});
