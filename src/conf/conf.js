const conf ={
    appwriteUrl:String(process.env.APPWRITE_URL),
    databaseId:String(process.env.APPWRITE_DATABASE_ID),
    collectionId:String(process.env.APPWRITE_COLLECTION_ID),
    projectId:String(process.env.APPWRITE_PROJECT_ID),
    bucketId:String(process.env.APPWRITE_BUCKET_ID)
}


export default conf