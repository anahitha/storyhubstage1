import * as React from 'react';
import { Text, View, StyleSheet, Header, TextInput } from 'react-native';

export default class WriteScreen extends React.Component{
render(){
  return (
    <View>
    <Header>
        Story Hub
    </Header>
      <Text>
        Write Your Story!
      </Text>
      <TextInput style = {styles.inputBox}
        placeholder="Story Title">
      </TextInput>
      <TextInput style = {styles.inputBox}
        placeholder="Author's Name">
      </TextInput>
      <TextInput style = {styles.inputBox2}
        placeholder="Story">
      </TextInput>
    </View>
  );
}
}

const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height:40,
        borderWidth: 1.5,
        fontSize: 20
    },
    inputBox2: {
        width: 200,
        height:100,
        borderWidth: 1.5,
        fontSize: 20
    }
})