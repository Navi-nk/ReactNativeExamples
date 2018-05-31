import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class Component1 extends Component {
    render() {
        console.log('hi naval')
        return (
            <Text>Inside Component1</Text>
        );
    }

}


AppRegistry.registerComponent('Component1', () => Component1);

