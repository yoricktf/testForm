import Link from 'next/link';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  salary: string;
};

interface SalaryProps {
  userData: User;
  links: string[];
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}
export default function Salary({
  updateUserProperties,
  userData,
  links,
}: SalaryProps) {
  return (
    <>
      <ProgressBar progress={66} links={links} />
      <h2 className='formTitle'>Enter Your Salary Details</h2>
      <p className='disclaimer'>Please enter your salary range.</p>
      <form onSubmit={(e) => updateUserProperties(e, 'summary')}>
        <div className='radioForm'>
          <div>
            <input
              type='radio'
              id='0-1000'
              name='salary'
              value='0-1000'
              required
              defaultChecked={userData.salary === '0-1000'}
            />
            <label htmlFor='0-1000'>0-1000</label>
          </div>
          <div>
            <input
              type='radio'
              id='1000-2000'
              name='salary'
              value='1000-2000'
              defaultChecked={userData.salary === '1000-2000'}
            />
            <label htmlFor='1000-2000'>1000-2000</label>
          </div>
          <div>
            <input
              type='radio'
              id='2000-3000'
              name='salary'
              value='2000-3000'
              defaultChecked={userData.salary === '2000-3000'}
            />
            <label htmlFor='2000-3000'>2000-3000</label>
          </div>
          <div>
            <input
              type='radio'
              id='3000-4000'
              name='salary'
              value='3000-4000'
              defaultChecked={userData.salary === '3000-4000'}
            />
            <label htmlFor='3000-4000'>3000-4000</label>
          </div>
          <div>
            <input
              type='radio'
              id='4000'
              name='salary'
              value='4000'
              defaultChecked={userData.salary === '4000'}
            />
            <label htmlFor='4000'>More Than 4000</label>
          </div>
        </div>

        <button>To The Summary</button>
      </form>
    </>
  );
}
