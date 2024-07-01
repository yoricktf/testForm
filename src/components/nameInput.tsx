import { useEffect } from 'react';

type NameInputProps = {
  userName: string;
  nameType: string;
  setIsNameValid: React.Dispatch<React.SetStateAction<boolean>>;
  isNameValid: boolean;
  disabled?: boolean;
};

export default function NameInput({
  userName,
  nameType,
  setIsNameValid,
  isNameValid,
  disabled = false,
}: NameInputProps) {
  function validateUserName(value: string) {
    const nameRegex = /^[a-z ,.'-]+$/i;
    setIsNameValid(nameRegex.test(value));
  }

  useEffect(() => {
    validateUserName(userName);
  }, [userName]);

  return (
    <>
      <label htmlFor={nameType}>{nameType}:</label>
      <input
        type='text'
        id={nameType}
        name={nameType}
        defaultValue={userName}
        onChange={(e) => validateUserName(e.target.value)}
        className={isNameValid ? 'valid' : 'invalid'}
        disabled={disabled}
      />
    </>
  );
}
