import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import useLocalStorageState from 'use-local-storage-state';

export default function App({ Component, pageProps }: AppProps) {
  const [formData, setformData] = useLocalStorageState('formData', {
    defaultValue: [
      { firstName: '', lastName: '', email: '', phone: '', salary: '' },
    ],
  });
  return (
    <Component {...pageProps} setFormData={setformData} formData={formData} />
  );
}
