import React from 'react';
import Link from 'next/link';
import PhoneInput from '@/components/phoneInput';
import EmailInput from '@/components/emailInput';
import { useState } from 'react';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  salary: string;
};

interface ContactProps {
  userData: User;
  links: string[];
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Contact({
  updateUserProperties,
  userData,
  links,
}: ContactProps) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  return (
    <>
      <ProgressBar progress={33} links={links} />
      <h2 className='formTitle'>Enter Your Contact Details</h2>
      <p className='disclaimer'>
        we currently only accept German phone numbers
      </p>

      <form onSubmit={(e) => updateUserProperties(e, 'salary')}>
        <EmailInput
          setIsEmailValid={setIsEmailValid}
          isEmailValid={isEmailValid}
          userEmail={userData.email}
        />
        <PhoneInput
          setIsPhoneValid={setIsPhoneValid}
          isPhoneValid={isPhoneValid}
          userPhone={userData.phone}
        />
        <button disabled={!isEmailValid || !isPhoneValid}>next</button>
      </form>
    </>
  );
}
