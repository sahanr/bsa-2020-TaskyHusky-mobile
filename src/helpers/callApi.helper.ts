import qs from 'querystring';
import { FilePickerFile } from 'react-native-file-picker';
import { WebApiException } from '../typings/webApiException';
import { REACT_APP_BASE_URL } from 'react-native-dotenv';
import { getToken } from './jwtToken.helper';

const BASE_URL = REACT_APP_BASE_URL ?? '/';
const API = '/api/';

type Body = string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | null | undefined;
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestArgs {
	method: Method;
	endpoint: string;
	query?: Record<string, any>;
	attachment?: FilePickerFile;
	attachmentFieldName?: string;
	body?: any;
	skipAuthorization?: boolean;
}

export const callWebApi = async (args: RequestArgs) => {
	try {
		const res: Response = await fetch(getUrl(args), await getArgs(args));
		await throwIfFailed(res);
		return res;
	} catch (err) {
		throw err;
	}
};

export const throwIfFailed = async (res: Response) => {
	if (!res.ok) {
		const exception: WebApiException = {
			status: res.status,
			statusText: res.statusText,
			url: res.url,
			clientException: null,
		};

		try {
			exception.clientException = await res.json();
		} catch {
			// No action
		}

		throw exception;
	}
};

export const getUrl = (args: RequestArgs) =>
	`${BASE_URL}${API}${args.endpoint}${args.query ? `?${qs.stringify(args.query)}` : ''}`;

export const getArgs = async (args: RequestArgs): Promise<RequestInit> => {
	const headers: Headers | string[][] | Record<string, string> | undefined = {};
	const token = await getToken();
	let body: Body;

	if (token && !args.skipAuthorization) {
		headers.Authorization = `Bearer ${token}`;
	}

	if (args.attachment) {
		if (args.method === 'GET') {
			throw new Error('Get request does not support attachments');
		}

		const formData = new FormData();
		formData.append(args.attachmentFieldName ?? 'image', args.attachment);

		if (args.body) {
			Object.entries(args.body).forEach(([key, value]) => {
				formData.append(key, value);
			});
		}

		body = formData;
	} else if (args.body) {
		if (args.method === 'GET') {
			throw new Error('Get request does not support body');
		}

		body = JSON.stringify(args.body);
		headers['Content-Type'] = 'application/json';
		headers.Accept = 'application/json';
	}

	return {
		method: args.method,
		headers,
		...(args.method === 'GET' ? {} : { body }),
	};
};
