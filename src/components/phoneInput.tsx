import { useEffect } from 'react';

export default function PhoneInput({
  userPhone,
  isPhoneValid,
  setIsPhoneValid,
}: any) {
  const validateContactPhone = (value: string) => {
    const germanPhoneRegex =
      /^(0|0049\s?|\+49\s?|\(\+49\)\s?)([1-9][0-9]{1,4})([\s\-\/]?[0-9]{3,10})$/g;
    setIsPhoneValid(germanPhoneRegex.test(value));
  };

  useEffect(() => {
    validateContactPhone(userPhone);
  }, [userPhone]);

  return (
    <>
      <label htmlFor='phone'>Phone Number:</label>
      <input
        type='tel'
        id='phone'
        name='phone'
        defaultValue={userPhone}
        onChange={(e) => validateContactPhone(e.target.value)}
        className={isPhoneValid ? 'valid' : 'invalid'}
      />
    </>
  );
}
