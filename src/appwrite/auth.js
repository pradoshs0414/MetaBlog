import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {

    client = new Client();
    account;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                this.login({email,password})
            }
            
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrnetUser(){
        try {
            
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser ::error ", error)
        }

        return null
    }

    async logout(){
        try {
            this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite Service :: logout :: error ",error)
        }
    }
}

const authService = new AuthService();
export default authService