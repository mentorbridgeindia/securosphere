export interface IUserEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    lastLoggedinDate: string;
    provider: string;
}
export interface IUserMutation {
    emailList: string[];
}