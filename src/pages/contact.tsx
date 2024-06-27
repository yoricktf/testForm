import React from 'react';
import Link from 'next/link';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

interface ContactProps {
  userData: User;
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Contact({
  updateUserProperties,
  userData,
}: ContactProps) {
  const validateContactEmail = (value: string) => {};
  const validateContactPhone = (value: string) => {};

  return (
    <>
      <form onSubmit={(e) => updateUserProperties(e, 'salary')}>
        <label htmlFor='email'>Email:</label>
        <input
          required
          type='email'
          id='email'
          name='email'
          defaultValue={userData.email}
          onChange={(e) => validateContactEmail(e.target.value)}
        />
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          defaultValue={userData.phone}
          onChange={(e) => validateContactPhone(e.target.value)}
        />
        <button>next</button>
      </form>
      <Link href='/'>back</Link>
    </>
  );
}
