import { useRouter } from 'next/router';
import { useState } from 'react';
import ProgressBar from '@/components/progressBar';
import NameInput from '@/components/nameInput';
import EmailInput from '@/components/emailInput';
import PhoneInput from '@/components/phoneInput';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

interface SummaryProps {
  userData: User;
  links: string[];
}

export default function Summary({ userData, links }: SummaryProps) {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const router = useRouter();

  function userSubmission(e: any) {
    e.preventDefault();
    if (
      confirm(
        'Thank you for your submission, we have everything we need to get started, feel free to look around our home page for more information.'
      )
    ) {
      router.push('/');
    }
  }

  return (
    <>
      <h1 className='formTitle'>Summary</h1>
      <p className='disclaimer'>
        Thank you {userData.firstName} for taking the time to give us your
        information. Please take a moment to double check it now to make sure
        there are no mistakes.
      </p>
      <ProgressBar progress={100} links={links} />
      <form onSubmit={userSubmission}>
        <NameInput
          nameType='firstName'
          userName={userData.firstName}
          isNameValid={isFirstNameValid}
          setIsNameValid={setIsFirstNameValid}
          disabled
        />
        <NameInput
          nameType='lastName'
          userName={userData.lastName}
          isNameValid={isLastNameValid}
          setIsNameValid={setIsLastNameValid}
          disabled
        />
        <EmailInput
          setIsEmailValid={setIsEmailValid}
          isEmailValid={isEmailValid}
          userEmail={userData.email}
          disabled
        />
        <PhoneInput
          setIsPhoneValid={setIsPhoneValid}
          isPhoneValid={isPhoneValid}
          userPhone={userData.phone}
          disabled
        />
        <label htmlFor='salary'>Salary:</label>
        <input
          type='text'
          id='salary'
          name='salary'
          value={userData.salary}
          disabled
        />
        <button>Looks Good!</button>
      </form>
    </>
  );
}
