import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
const AlbumDetails=({album})=>{
    const{title,artist,thumbnail_image,image}=album;
    //const {thumbnailStyle,headerContainStyle}=styles;
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{uri:thumbnail_image}}
                    />
                </View>
                <View style={styles.headerContainStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{uri:image}}/>
            </CardSection>
        </Card>
    );

};
const styles={
    headerContainStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18

    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10

    },
    imageStyle:{
        height:300,
        width:null,
        flex:1
    }

};
export default AlbumDetails;