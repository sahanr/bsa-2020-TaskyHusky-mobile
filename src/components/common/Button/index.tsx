import React from 'react';

import {
	Text,
	TextStyle,
	ViewStyle,
	ImageStyle,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	View,
	StyleSheet,
} from 'react-native';

export enum PressResponse {
	highlignt,
	opacity,
	native,
	no,
}

interface Props {
	onPress: () => void;
	onLongPress?: () => void;
	title: string;
	disabled?: boolean;
	pressResponse?: PressResponse;
	style?: TextStyle | ViewStyle | ImageStyle;
}

const getTouchable = (response: PressResponse) => {
	switch (response) {
		case PressResponse.opacity:
			return TouchableOpacity;
		case PressResponse.highlignt:
			return TouchableHighlight;
		case PressResponse.native:
			return TouchableNativeFeedback;
		case PressResponse.no:
			return TouchableWithoutFeedback;
	}
};

const Button: React.FC<Props> = ({
	onPress,
	onLongPress = () => {},
	title,
	disabled,
	pressResponse = PressResponse.native,
	style = {},
}) => {
	const Touchable = getTouchable(pressResponse);

	const renderContent = (
		<View style={[styles.basic, style, disabled ? styles.disabled : {}]}>
			<Text>{title}</Text>
		</View>
	);

	if (disabled) {
		return renderContent;
	}

	return (
		<Touchable onPress={onPress} onLongPress={onLongPress}>
			{renderContent}
		</Touchable>
	);
};

const styles = StyleSheet.create({
	basic: {
		color: '#333',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	disabled: {
		opacity: 0.4,
	},
});

export default Button;
