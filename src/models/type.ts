type Gender = 'male' | 'female' | 'other' | 'prefer not to mention';
type AccountType = 'personal' | 'pro' | 'business';

export type User = {
  name: string,
  lastName: string,
  birthdate: string,
  gender: Gender | '',
  email: string,
  newsLetter: boolean,
  userName: string,
  password: string,
  accountType: AccountType | '',
}
