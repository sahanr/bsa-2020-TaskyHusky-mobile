import AsyncStorage from '@react-native-community/async-storage';
import { LocalStorageKeys } from '../constants/LocalStorageKeys';

export const setToken = (token: string) => AsyncStorage.setItem(LocalStorageKeys.SESSION_TOKEN, token);
export const getToken = () => AsyncStorage.getItem(LocalStorageKeys.SESSION_TOKEN);
