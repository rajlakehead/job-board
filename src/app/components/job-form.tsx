'use client';
import { faEnvelope, faPhone, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import { CountrySelect, CitySelect, StateSelect } from "react-country-state-city";
import ImageUpload from "./image-upload";

export default function JobForm({orgId}:{orgId:string}) {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [countryName, setCountryName] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');

  return (
    <div className="container mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
      <form className="flex flex-col gap-6">
        <input className="w-full p-3 border border-gray-300 rounded-md" name="title" placeholder="Job title" />
        
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Remote?</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="radio" name="remote" value="onsite" className="mr-2" /> On-site
              </label>
              <label className="flex items-center">
                <input type="radio" name="remote" value="hybrid" className="mr-2" /> Hybrid-remote
              </label>
              <label className="flex items-center">
                <input type="radio" name="remote" value="remote" className="mr-2" /> Fully remote
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Full time?</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="radio" name="type" value="project" className="mr-2" /> Project
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" value="part" className="mr-2" /> Part-time
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" value="full" className="mr-2" /> Full-time
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Salary</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="p-2">$</span>
              <input className="w-full p-2 border-none outline-none" name="salary" />
              <span className="p-2">k/year</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
          <div className="flex flex-col sm:flex-row gap-4 font-sans">
            <CountrySelect
              onChange={(e:any) => {
                setCountryId(e.id);
                setCountryName(e.name);
              }}
              placeHolder="Select Country"
            />
            <StateSelect
              countryid={countryId}
              onChange={(e:any) => {
                setStateId(e.id);
                setStateName(e.name);
              }}
              placeHolder="Select State"
            />
            <CitySelect
              countryid={countryId}
              stateid={stateId}
              onChange={(e:any) => {
                setCityId(e.id);
                setCityName(e.name);
              }}
              placeHolder="Select City"
            />
          </div>
        </div>

        <div className="sm:flex">
          <div className="w-1/3">
            <h3 className="mb-2 text-sm font-medium text-gray-700">Job icon</h3>
            <ImageUpload name="jobIcon" icon={faStar} defaultValue='' />
          </div>
          <div className="grow">
            <h3 className="mb-2 text-sm font-medium text-gray-700">Contact person</h3>
            <div className="flex gap-4">
              <div>
                <ImageUpload name="contactPhoto" icon={faUser} defaultValue='' />
              </div>
              <div className="grow flex flex-col gap-3">
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FontAwesomeIcon icon={faUser} />
                  <input className="w-full ml-2 border-none outline-none" placeholder="John Doe" name="contactName" />
                </div>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <input className="w-full ml-2 border-none outline-none" placeholder="Phone" type="tel" name="contactPhone" />
                </div>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input className="w-full ml-2 border-none outline-none" placeholder="Email" type="email" name="contactEmail" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <textarea className="w-full p-3 border border-gray-300 rounded-md resize-vertical" placeholder="Job description" name="description"></textarea>
        
        <div className="flex justify-center">
          <button className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
        </div>
      </form>
    </div>
  );
}
