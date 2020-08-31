import React, { useState } from 'react';
import styles from '../styles.module';
import { TextInput, TextStyle, ViewStyle, ImageStyle, View, TouchableOpacity } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

interface Props {
	onChange?: (password: string) => void;
	value?: string;
	style?: TextStyle | ViewStyle | ImageStyle;
	placeholder?: string;
}

const PasswordInput: React.FC<Props> = ({ onChange = () => {}, value = '', style = {}, placeholder = 'Password' }) => {
	const [canShow, setCanShow] = useState<boolean>(false);
	const icon: 'eye-slash' | 'eye' = canShow ? 'eye-slash' : 'eye';

	return (
		<View style={[styles.inputContainer, style]}>
			<TextInput
				onChangeText={onChange}
				placeholder={placeholder}
				value={value}
				style={styles.input}
				secureTextEntry={!canShow}
			/>
			<TouchableOpacity onPress={() => setCanShow(!canShow)}>
				<FAIcon name={icon} style={styles.icon} />
			</TouchableOpacity>
		</View>
	);
};

export default PasswordInput;
