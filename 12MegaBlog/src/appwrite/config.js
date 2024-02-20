import conf from '../conf/conf.js'; //environment variables
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;   //storage
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    
                                           //POST SERVICES
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(  //createDocument is part of syntax and it is method
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  //document id ki jagah le rhe h hum ise
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){ //we have given slug as a first parameter for identifying the post which should be updates. It works as a document id
        try {
            return await this.databases.updateDocument(  //updateDocument is part of syntax and it is method
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            
            )
            return true  // delete ho gya hai
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){   //if one post needed
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false //agar kuch post nhi mila hai
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){  //Only those posts are required whose status is active, otherwise those posts whose status is deactivated will also be included in all the posts, therefore, we will use query.
        //queries -> variable
        //status-> key which we made in articles section in appwrite
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries, //passing the queries acc. to syntax
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }



                                    // FILE SERVICES
    async uploadFile(file){
        try {
            return await this.bucket.createFile(  //createFile-> method acc. to syntax in documentation
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){  //for deleting we need file id
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true //if it is deleted
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service