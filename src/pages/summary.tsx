import { useRouter } from 'next/router';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

export default function Summary({ userData }: { userData: User }) {
  const router = useRouter();

  function userSubmission(e: any) {
    e.preventDefault();
    if (confirm('Thank you for your submission')) {
      router.push('/');
    }
  }

  return (
    <>
      <h1>Summary</h1>
      <p>
        Thank you {userData.firstName} for taking the time to give us your
        information. Please take a moment to double check it now to make sure
        there are no mistakes.
      </p>
      <ProgressBar progress={95} />
      <form onSubmit={userSubmission}>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={userData.firstName}
          disabled
        />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={userData.lastName}
          disabled
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={userData.email}
          disabled
        />
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={userData.phone}
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
