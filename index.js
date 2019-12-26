//Import library to create a component
import React from 'react';
import ReactNative, { View } from 'react-native';

// import App from './App';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create component
function index() {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	);
}

//Render Component
ReactNative.AppRegistry.registerComponent('dinder', () => index);
