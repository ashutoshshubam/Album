import React,{Component} from 'react';
import { AppRegistry } from 'react-native';
import AlbumList from './src/component/AlbumList';
import Header from './src/component/header';

const App=()=>{
    return(
        <View style={{flex:1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>

    );
};

AppRegistry.registerComponent('RAlbum', () => App);
