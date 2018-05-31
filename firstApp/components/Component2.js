import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Component2 extends Component {

	constructor() {
		super();
		this.state = {
			isClicked: [false, false]
		}
		this.click = this.click.bind(this);
	}
	click(index) {
		flags = this.state.isClicked;
		flags[index] = !flags[index]
		this.setState({
			isClicked: flags
		})
	}
	render() {
		console.log(this.state)
		return (
			<View>
				<Text>Inside Component2</Text>
				<View style={styles.container}>
					<TouchableHighlight
						style={this.state.isClicked[0] ? styles.c1_red : styles.c1_yellow}
						underlayColor='blue'
						onPress={() => this.click(0)}>
						<Text >Text1</Text>
					</TouchableHighlight>
					<TouchableOpacity
						style={this.state.isClicked[1] ? styles.c1_red : styles.c1_yellow}
						onPress={() => this.click(1)}>
						<Text>Text2</Text>
					</TouchableOpacity>
					<TouchableHighlight
						style={this.state.isClicked[0] && this.state.isClicked[1]  ? styles.c1_red : styles.c1_yellow}>
						<Text >Text3</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 100
	},
	c1_red: {
		flex: 1,
		alignSelf: 'center',
		backgroundColor: 'red'
	},
	c1_yellow: {
		flex: 1,
		alignSelf: 'center',
		backgroundColor: 'yellow'
	},
	c2: {
		flex: 1,
		alignSelf: 'center'
	},
	c3: {
		flex: 1,
		alignSelf: 'center'
	}
});


AppRegistry.registerComponent('Component2', () => Component2);

