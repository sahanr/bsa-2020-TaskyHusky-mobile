import React from 'react';
import styles from '../styles.module';
import { TextInput, TextStyle, ViewStyle, ImageStyle, View } from 'react-native';
import validator from 'validator';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

interface Props {
	onChange?: (email: string) => void;
	onChangeValid?: (isValid: boolean) => void;
	value?: string;
	style?: TextStyle | ViewStyle | ImageStyle;
	isValid?: boolean;
	placeholder?: string;
}

const EmailInput: React.FC<Props> = ({
	onChange = () => {},
	onChangeValid = () => {},
	value = '',
	style = {},
	isValid = true,
	placeholder = 'Email',
}) => {
	const handleChange = (email: string) => {
		onChange(email);
		onChangeValid(validator.isEmail(email));
	};

	const getColorStyle = () => {
		return { color: !isValid ? 'red' : 'black' };
	};

	return (
		<View style={[styles.inputContainer, style]}>
			<TextInput
				onChangeText={handleChange}
				placeholder={placeholder}
				value={value}
				style={[styles.input, getColorStyle()]}
			/>
			<FAIcon name="at" style={styles.icon} />
		</View>
	);
};

export default EmailInput;
