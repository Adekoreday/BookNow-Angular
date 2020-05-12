interface User {
   user: { 
    id: number;
    firstname: string;
    lastname: string;
    isPremium: boolean;
    password: string;
    email: string;
    createdAt: string;
    updatedAt: string;
   }
   token: string;
}
export default User;