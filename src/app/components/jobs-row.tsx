'use client';
import { Job } from "@/models/job";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import TimeAgo from "./TImeAgo";


export default function JobRow({jobDoc}:{jobDoc:Job}) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center w-12 basis-12 shrink-0">
            <img
              className="size-12"
              src={jobDoc?.jobIcon} alt=""/>
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div>
                <Link href={`/jobs/${jobDoc.orgId}`} className="hover:underline text-gray-500 text-sm">{jobDoc.orgName || '?'}</Link>
              </div>
              <div className="font-bold text-lg mb-1">
                <Link className="hover:underline" href={'/show/'+jobDoc._id}>{jobDoc.title}</Link>
              </div>
              <div className="text-gray-400 text-sm capitalize">
                {jobDoc.remote}
                {' '}&middot;{' '}
                {jobDoc.city}, {jobDoc.state} {jobDoc.country}
                {' '}&middot;{' '}
                {jobDoc.type}-time
                {jobDoc.isAdmin && (
                  <>
                    {' '}&middot;{' '}
                    <Link href={'/jobs/edit/'+jobDoc._id}>Edit</Link>
                    {' '}&middot;{' '}
                    <button
                      type="button"
                      onClick={async () => {
                        await axios.delete('/api/jobs?id='+jobDoc._id);
                        window.location.reload();
                      }}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
            {jobDoc.createdAt && (
              <div className="content-end text-gray-500 text-sm">
                <TimeAgo createdAt={jobDoc.createdAt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}