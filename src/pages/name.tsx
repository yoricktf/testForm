import { useState } from 'react';
import NameInput from '@/components/nameInput';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

interface HomeProps {
  userData: User;
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Home({ updateUserProperties, userData }: HomeProps) {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  return (
    <>
      <form onSubmit={(e) => updateUserProperties(e, 'contact')}>
        <NameInput
          nameType='firstName'
          userName={userData.firstName}
          isNameValid={isFirstNameValid}
          setIsNameValid={setIsFirstNameValid}
        />
        <NameInput
          nameType='lastName'
          userName={userData.lastName}
          isNameValid={isLastNameValid}
          setIsNameValid={setIsLastNameValid}
        />
        <button disabled={!isFirstNameValid || !isLastNameValid}>next</button>
      </form>
    </>
  );
}
