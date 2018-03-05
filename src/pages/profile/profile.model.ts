export class UserModel {
  url: string;
  isPhoto: string;
  height: number;
  weight: number;
  dob: string;
  doj: string;
  bloodGroup: string;
  pincode: string;
  religion: string;
  caste: string;
  roll: string;
  class: number;
  division: string;
  stream: string;
  section: string;
  gender: string;
  fatherName: string;
  fatherEmail: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherEmail: string;
  motherOccupation: string;
  motherPhone: string;
  contactAddress: string;
  city: string;
  location: string;
  phone: string;
  name: string;
}

export class ProfileModel {
  error: string;
  errorCode: string;
  status: boolean;
  user: UserModel = new UserModel();
}
