/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1,backgroundColor:'yellow'}}>
                    <Text style={{fontSize:30,textAlign:'center'}}>React Demo</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={{fontSize:20,color:'teal'}}>This is the first program....</Text>
                    </View>
                    <View style={{flex: 2,alignItems:'center'}}>
                        <FlatList
                            data={[
                                {key:'1. Monday'},
                                {key:'2. Tuesday'},
                                {key:'3. Wednesday'},
                                {key:'4. Thrusday'},
                                {key:'5. Friday'},
                                {key:'6. Saturday'},
                                {key:'7. Sunday'},
                            ]}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                        />
                    </View>
                </View>
                <Button style={{fontSize:10}}
                        title="Next"
                />
                <Text></Text>
                <Button style={{fontSize:10}}
                        title="Previous"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop:0,

    },
    item:{
        padding:10,
        fontSize: 18,
        height: 44,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});
