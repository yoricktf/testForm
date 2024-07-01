import { useState } from 'react';
import NameInput from '@/components/nameInput';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  salary: string;
};

interface HomeProps {
  userData: User;
  links: string[];
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Home({
  updateUserProperties,
  userData,
  links,
}: HomeProps) {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  return (
    <>
      <ProgressBar progress={0} links={links} />
      <h2 className='formTitle'>Enter Your Name</h2>
      <p className='disclaimer'>Please enter the name you use on your deed.</p>
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
