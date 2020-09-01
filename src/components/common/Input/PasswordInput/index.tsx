import React, { useState } from 'react';
import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
import TextInput from '../TextInput';

interface Props {
	onChange?: (password: string) => void;
	value?: string;
	style?: TextStyle | ViewStyle | ImageStyle;
	placeholder?: string;
}

const PasswordInput: React.FC<Props> = ({ onChange = () => {}, value, style, placeholder = 'Password' }) => {
	const [canShow, setCanShow] = useState<boolean>(false);
	const icon: 'eye-slash' | 'eye' = canShow ? 'eye-slash' : 'eye';

	return (
		<TextInput
			value={value}
			style={style}
			placeholder={placeholder}
			onChange={onChange}
			secure={!canShow}
			icon={icon}
			onIconClick={() => setCanShow(!canShow)}
		/>
	);
};

export default PasswordInput;
