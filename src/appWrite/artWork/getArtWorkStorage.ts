import {Client, Storage} from "appwrite"

const projectID= import.meta.env.VITE_PROJECT_ID
const artWorkBucketID = import.meta.env.VITE_ART_WORK_BUCKET_ID

if (!projectID || !artWorkBucketID) {
    throw new Error("Missing required environment variables: VITE_PROJECT_ID or VITE_ARTWORK_BUCKET_ID");
  }

const getArtWorkStorage = ()=>{
    const client =new Client()
.setEndpoint("https://cloud.appwrite.io/v1")

.setProject(projectID)
return new Storage (client )
}  

export default{getArtWorkStorage}

