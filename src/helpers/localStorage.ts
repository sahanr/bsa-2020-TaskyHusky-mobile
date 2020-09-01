import AsyncStorage from '@react-native-community/async-storage';
import { LOCAL_STORAGE_NS } from '../constants/LocalStorageKeys';

class LocalStorage {
	private ns: string;

	public constructor(ns: string) {
		this.ns = ns;
	}

	private getKeyName(key: string) {
		return `@${this.ns}:${key}`;
	}

	public set(key: string, value: string) {
		return AsyncStorage.setItem(this.getKeyName(key), value);
	}

	public get(key: string) {
		return AsyncStorage.getItem(this.getKeyName(key));
	}
}

const localStorage = new LocalStorage(LOCAL_STORAGE_NS);
export default localStorage;
