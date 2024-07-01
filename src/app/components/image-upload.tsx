'use client';
import { faSpinner, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function ImageUpload({
  name, icon, defaultValue = '',
}: {
  name: string;
  icon: IconDefinition;
  defaultValue: string;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [url, setUrl] = useState(defaultValue);

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const input = ev.target as HTMLInputElement;
    if (input && input.files?.length && input.files.length > 0) {
      setIsUploading(true);
      const file = input.files[0];
      const data = new FormData();
      data.set('file', file);
      const response = await axios.post('/api/upload', data);
      if (response.data.url) {
        setUrl(response.data.url);
        setIsUploading(false);
        setIsImageLoading(true);
      }
    }
  }

  const imgLoading = (isUploading || isImageLoading);

  return (
    <>
      <div className="bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center">
        {imgLoading && (
          <FontAwesomeIcon icon={faSpinner} className="text-gray-400 animate-spin" />
        )}
        {(!isUploading) && url && (
          <Image src={url} alt={'uploaded image'} width={1024} height={1024}
            onLoadingComplete={() => setIsImageLoading(false)}
            className="w-auto h-auto max-w-24 max-h-24" />
        )}
        {!imgLoading && !url && (
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        )}
      </div>
      <input type="hidden" value={url} name={name} />
      <div className="mt-2">
        <input
          onChange={ev => upload(ev)}
          ref={fileInputRef}
          type="file"
          className="hidden" />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Select file
        </button>
      </div>
    </>
  );
}
