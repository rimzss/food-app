export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  address: {
    duureg: string;
    horoo: string;
  };
  orders: [];
  role: [string];
}
export interface IUpdateInfo {
  [key: string]: string;
}
