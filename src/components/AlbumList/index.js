import React, { Component } from 'react';
import ReactNative, { ScrollView } from 'react-native';

//import axios
import axios from 'axios';

//Import Components
import AlbumDetails from '../AlbumDetails/index';

class AlbumList extends Component {
	state = {
		albums: []
	};

	componentWillMount() {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((res) => {
			this.setState({
				albums: res.data
			});
		});
	}

	renderAlbums() {
		return this.state.albums.map((album) => <AlbumDetails key={album.title} album={album} />);
	}

	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
