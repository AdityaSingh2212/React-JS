                 //This code can be used in every auth service projects
//**Important**

import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {  //class name -> AuthService
    client = new Client();  //creating client acc. to syntax
    account; 

    constructor() {
        this.client //reference to client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client); //add account to the client
            
    }

    async createAccount({email, password, name}) {  //method->createAccount with values
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); //await->jab tak account na ban jaye, this.account- reference, then after this everything is according to syntax, unique->method, ID-> importing from appWrite
            if (userAccount) { // if user account exist
                // call another method
                return this.login({email, password}); //call login
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {  //createEmailSession--> method used in login part
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() { // this method is made to check whether we are login or not.
        try {
            return await this.account.get(); // .get-> to get account and check whether it is there or not
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);// another optimizing method for (throw error)
                }

        return null; //account jab mila hi nhi to return null krdo
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            //deleteSession-> delete one session, value should be provided
            //deleteSessions-> delete all session, value is not provided
        }
    }
}

const authService = new AuthService();  //object -> authService

export default authService //exporting authService which is a object and we can access all login, logout etc