import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetils from './AlbumDetails';
class AlbumList extends Component{
    state={albums:[]};

    componentWithMount(){
        fetch('https://http://rallycoding.herokuapp.com/api/music_albums').
        then(response =>this.setState({albums:this.response.data}));
    }
    renderAlbums(){
        return this.state.albums.map(album=>
            <AlbumDetils key={album.title} album={album}/>
        );
    }

    render(){Albums;
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}
export default AlbumList;