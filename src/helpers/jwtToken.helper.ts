import { LocalStorageKeys } from '../constants/LocalStorageKeys';
import localStorage from './localStorage';

export const setToken = (token: string) => localStorage.set(LocalStorageKeys.SESSION_TOKEN, token);
export const getToken = () => localStorage.get(LocalStorageKeys.SESSION_TOKEN);
