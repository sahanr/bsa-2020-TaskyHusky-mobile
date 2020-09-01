import React from 'react';
import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
import validator from 'validator';
import TextInput from '../TextInput';

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
	value,
	style,
	isValid,
	placeholder = 'Email',
}) => {
	const handleChange = (email: string) => {
		onChange(email);
		onChangeValid(validator.isEmail(email));
	};

	return (
		<TextInput
			icon="at"
			value={value}
			style={style}
			isValid={isValid}
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};

export default EmailInput;
