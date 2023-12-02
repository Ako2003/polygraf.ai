'use client';

import * as React from 'react';
import { useEdgeStore } from '../lib/edgestore';
import { FileUploader } from 'react-drag-drop-files';
import { Input, Button, Progress } from '@nextui-org/react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const fileTypes = [
    // Only images and vides are supported
    'jpeg',
    'png',
    'gif',
    'mp4',
    'webm',
]

export default function Page() {
  const [file, setFile] = React.useState();
  const [progress, setProgress] = React.useState(0);
  const { edgestore } = useEdgeStore();

  const stack2 = (
    <div className='border-dashed border-2 border-sky-500 rounded-2xl mb-5'>
        <h1 className='text-xl text-sky-500 p-16'>{file && process != 100 ? file.name : "drop & drag or click to upload"}</h1>
    </div>
  );

  return (
    <div className='text-center'>
        <h1 className='header m-10 lg:text-5xl'>Upload File</h1>
        <SignedIn>
            <div className='flex flex-col max-md:mx-20 lg:mx-96'>
                <FileUploader
                    multiple={false}
                    className='h-screen'
                    type="file"
                    types={fileTypes}
                    handleChange={(file) => {
                        setFile(file);
                        console.log(file)
                    }}
                    children={stack2}
                    />
                    <Progress  
                        color="success" 
                        aria-label="Loading..." 
                        value={progress} 
                        className={`max-w-md m-5 ${progress === 0 || progress === 100  ? 'hidden' : ""}`}
                    />
                <Button
                    color='success'
                    className={`text-white ${process != 0 || process != 100  ? '' : "hidden"}`}
                    onClick={async () => {
                    if (file) {
                        const res = await edgestore.publicFiles.upload({
                        file,
                        onProgressChange: (progress) => {
                            setProgress(progress);
                        },
                        });
                        // you can run some server action or api here
                        // to add the necessary data to your database
                        console.log(res);
                    }
                    }}
                >
                    Upload
                </Button>
            </div>
        </SignedIn>
        <SignedOut>
                <div className='flex flex-col max-md:mx-20 lg:mx-96'>
                    <h1 className='text-xl text-sky-500 p-16'>You must be 
                    <SignInButton>
                        <Button variant='light' className='text-xl text-sky-500 underline'>
                            signed in
                        </Button>
                    </SignInButton>
                    to upload files</h1>
                </div>
        </SignedOut>
    </div>
  );
}