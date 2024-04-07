import { Client,Databases,ID,Storage,Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: Error ::",error)
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: Error ::",error)
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: Error ::",error)
        }
    }

    async fetchPost(slug){
        try {
           return await this.databases.getDocument(
            conf.databaseId,
            conf.collectionId,
            slug
           ) 
        } catch (error) {
            console.log("Appwrite Service :: fetchPost :: Error ::",error)
            return false
        }
    }
    async fetchPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: fetchPosts :: Error ::",error)
            return false
        }

    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: Error ::",error)
        }
    }

    async updateFile(fileID){
        try {
            return await this.bucket.updateFile(conf.bucketId,fileID)
        } catch (error) {
            console.log("Appwrite Service :: updateFile :: Error ::",error)
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(conf.bucketId,fileID)
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: Error ::",error)
        }
    }

    async getFilePreview(fileID){
        try {
            return await this.bucket.getFilePreview(conf.bucketId,fileID)            
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: Error :: ",error)
        }
    }

}

const service = new Service()
export default service