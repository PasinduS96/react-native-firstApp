import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';

const AlbumDetails = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}>{title}</Text>
					<Text style={styles.artistNameStyle}>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image source={{ uri: image }} style={styles.albumArtStyle} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerTextStyle: {
		fontSize: 20
	},
	albumArtStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetails;
