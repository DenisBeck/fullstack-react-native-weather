import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
        this.setState({ text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;
        
        onSubmit(text);
        this.setState({ text: '' });
    };


    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    value={text}
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    style={styles.textInput}
                    clearButtonMode="always"
                    underlineColorAndroid="transparent"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    height: 40,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
   }
});