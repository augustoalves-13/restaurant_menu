import { baseUrl } from "@/api/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FetcherOptions extends RequestInit {
  token?: boolean
  body?: any
}

const fetcher = async (url: string, options: FetcherOptions = {}): Promise<any> => {
  const { token, ...fetchOptions } = options;

  let tokenValue = '';

  if (token) {
    tokenValue = await AsyncStorage.getItem('authToken') || '';
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  if (tokenValue) {
    headers['Authorization'] = `Bearer ${tokenValue}`;
  }

  const body = fetchOptions.body
    ? JSON.stringify(fetchOptions.body) 
    : undefined;

  const response = await fetch(baseUrl + url, {
    ...fetchOptions,
    headers,
    body,
  });

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error.detail.message || 'An error occurred');
  }

  if (response.headers.get('Content-Type')?.includes('application/json')) {
    return response.json();
  }

  return response.text();
};

export default fetcher;
