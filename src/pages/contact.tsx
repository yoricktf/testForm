import React from 'react';
import Link from 'next/link';

export default function contact({ updateUser, userData, setUserData }: any) {
  const updateContactEmail = (property: string, value: string) => {
    const updatedUserObject = { ...userData, [property]: value };
    setUserData([updatedUserObject]);
  };
  const updateContactPhone = (property: string, value: string) => {
    const updatedUserObject = { ...userData, [property]: value };
    setUserData([updatedUserObject]);
  };

  return (
    <>
      <form>
        <label htmlFor='email'>Email:</label>
        <input
          required
          type='email'
          id='email'
          name='email'
          defaultValue={userData.email}
          onChange={(e) => updateContactEmail('email', e.target.value)}
        />
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          defaultValue={userData.phone}
          onChange={(e) => updateContactPhone('phone', e.target.value)}
        />
      </form>
      <Link href='/salary'>Next Page</Link>
    </>
  );
}
