import Hero from "./components/hero";
import Jobs from "./components/jobs";
import mongoose from "mongoose";
import {getUser} from "@workos-inc/authkit-nextjs";
import { addOrgAndUserData, JobModel } from "@/models/job";




export default async function Home() {
  const {user} = await getUser();
  await mongoose.connect(process.env.MONGO_URI as string);
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({},{},{limit:5,sort:'-createdAt'}),
    user,
  );

  return (
    <>
      <Hero />
      <Jobs header="" jobs={latestJobs}  />
    </>
   
  );
}
