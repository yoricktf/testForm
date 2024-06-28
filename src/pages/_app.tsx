import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import useLocalStorageState from 'use-local-storage-state';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

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

  const links = ['/name', '/contact', '/salary', '/summary'];

  function updateUserProperties(
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productData = Object.fromEntries(formData);
    for (const property in productData) {
      const value = productData[property];

      if (typeof value === 'string') {
        productData[property] = value.trim();
      }
    }
    setUserData([{ ...userData[0], ...productData }]);
    router.push(nextpage);
  }

  return (
    <main className={` ${inter.className}`}>
      <Component
        {...pageProps}
        userData={userData[0]}
        updateUserProperties={updateUserProperties}
        links={links}
      />
    </main>
  );
}
