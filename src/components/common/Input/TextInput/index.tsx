import React from 'react';
import styles from '../styles.module';
import { TextInput as TextInputUI, TextStyle, ViewStyle, ImageStyle, View, TouchableOpacity } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

interface Props {
	onChange?: (email: string) => void;
	onIconClick?: () => void;
	value?: string;
	style?: TextStyle | ViewStyle | ImageStyle;
	isValid?: boolean;
	icon?: string;
	placeholder?: string;
	secure?: boolean;
}

const TextInput: React.FC<Props> = ({
	onChange = () => {},
	onIconClick,
	value = '',
	style = {},
	isValid = true,
	icon,
	secure,
	placeholder = undefined,
}) => {
	const getBorderStyle = () => {
		return { borderBottomColor: isValid ? 'black' : 'red' };
	};

	return (
		<View style={[styles.inputContainer, style, getBorderStyle()]}>
			<TextInputUI
				secureTextEntry={secure}
				onChangeText={onChange}
				placeholder={placeholder}
				value={value}
				style={[styles.input]}
			/>
			{icon ? (
				onIconClick ? (
					<TouchableOpacity onPress={onIconClick}>
						<FAIcon name={icon as any} style={styles.icon} />
					</TouchableOpacity>
				) : (
					<FAIcon name={icon as any} style={styles.icon} />
				)
			) : (
				''
			)}
		</View>
	);
};

export default TextInput;
