'use server';

import { JobModel } from "@/models/job";
import mongoose from "mongoose"
import { json } from "stream/consumers";

export async function saveJobAction(data: FormData){
    await mongoose.connect(process.env.MONGO_URI as string);
    const jobDoc = await JobModel.create(Object.fromEntries(data));
    return JSON.parse( JSON.stringify(jobDoc));
}
    
