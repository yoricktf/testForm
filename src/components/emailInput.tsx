import { useEffect } from 'react';

export default function EmailInput({
  userEmail,
  isEmailValid,
  setIsEmailValid,
}: any) {
  const validateContactEmail = (value: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailRegex.test(value));
  };

  useEffect(() => {
    validateContactEmail(userEmail);
  }, [userEmail]);

  return (
    <>
      <label htmlFor='email'>Email:</label>
      <input
        required
        type='email'
        id='email'
        name='email'
        defaultValue={userEmail}
        onChange={(e) => validateContactEmail(e.target.value)}
        className={isEmailValid ? 'valid' : 'invalid'}
      />
    </>
  );
}
