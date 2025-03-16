import { BASE_API_URL } from '@/constants';
import { useToastNotification } from '@/hooks/useToastNotification';
import { useAuth0 } from '@auth0/auth0-react';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const { emitToast } = useToastNotification();
  const { getAccessTokenSilently } = useAuth0();
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = async (config: InternalAxiosRequestConfig<any>) => {
      const accessToken = await getAccessTokenSilently();
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    };

    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      if (error.response?.data) {
        const message = (error.response?.data as string[]).join('\n');
        emitToast(message, 'error');
      }

      return Promise.reject(error);
    };

    const axiosReqInterceptor =
      axiosInstance.interceptors.request.use(reqInterceptor);
    const axiosResInterceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    setIsSet(true);
    return () => {
      axiosInstance.interceptors.request.eject(axiosReqInterceptor);
      axiosInstance.interceptors.response.eject(axiosResInterceptor);
    };
  }, [navigate]);

  return isSet && children;
}

export default AxiosInterceptor;
