import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import useLocalStorageState from 'use-local-storage-state';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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

  function updateUserProperties(
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productData = Object.fromEntries(formData);
    setUserData([{ ...userData[0], ...productData }]);
    router.push(nextpage);
  }

  return (
    <Component
      {...pageProps}
      userData={userData[0]}
      updateUserProperties={updateUserProperties}
    />
  );
}
