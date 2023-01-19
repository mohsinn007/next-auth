import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId : "9d058508b9c53ec69976",
            clientSecret: "6ed87b4c2fd4e054ac52f60ca09210694013e783"
        }),
    ],
};
 export default NextAuth(authOptions);