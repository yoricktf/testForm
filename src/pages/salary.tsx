import Link from 'next/link';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
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
      <form onSubmit={(e) => updateUserProperties(e, 'summary')}>
        <input
          type='radio'
          id='0-1000'
          name='salary'
          value='0-1000'
          required
          // checked={userData.salary === '0-1000'}
        />
        <label htmlFor='0-1000'>0-1000</label>
        <input type='radio' id='1000-2000' name='salary' value='1000-2000' />
        <label htmlFor='1000-2000'>1000-2000</label>
        <input type='radio' id='2000-3000' name='salary' value='2000-3000' />
        <label htmlFor='2000-3000'>2000-3000</label>
        <input type='radio' id='3000-4000' name='salary' value='3000-4000' />
        <label htmlFor='3000-4000'>3000-4000</label>
        <input type='radio' id='4000' name='salary' value='4000' />
        <label htmlFor='4000'>More Than 4000</label>

        <button>To The Summary</button>
      </form>
      <Link href='/contact'>Contact</Link>
    </>
  );
}
