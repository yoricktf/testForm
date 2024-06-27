import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import useLocalStorageState from 'use-local-storage-state';

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useLocalStorageState('userData', {
    defaultValue: [
      {
        firstName: 'helllo',
        lastName: 'lastname',
        email: 'email',
        phone: +4915212345678,
        salary: '0-1000',
      },
    ],
  });

  return (
    <Component
      {...pageProps}
      setUserData={setUserData}
      userData={userData[0]}
    />
  );
}
