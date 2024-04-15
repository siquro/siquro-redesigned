'use client'

import { divider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import institutionsData from '../../../data/institutions.json';
import { useSearchParams } from 'next/navigation';


const Institutions = ({ data }: any) => {
  const [userParams, setUserParams] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('txId')
  const { data: institutions } = institutionsData;

  useEffect(() => {
    if (search) {
      setUserParams(search)
    }
  }, [])

  const chosenBankHandler = async (institutionId: string) => {
    try {
      const response = await fetch('/api/authorize-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ institutionId, userParams }),
      });

      if (!response.ok) {
        console.error('Server responded with non-200 status:', response.status);
        return;
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);  // Check what you receive

      if (responseData && responseData.paymentMethods) {
        localStorage.setItem('authorize-data', JSON.stringify(responseData.paymentMethods));
        setTimeout(() => {
          window.location.href = responseData.redirectUrl;
        }, 500);
      } else {
        console.error('No data available to store in localStorage');
      }
    } catch (error) {
      console.error('Failed to complete the operation:', error);
    }
  }

  const Card = ({ icon, name, fullName, id }: { id: string; icon: string; name: string; fullName: string }) => {
    return <div className='w-1/2 p-5 relative cursor-pointer' onClick={() => chosenBankHandler(id)}>
      <h4 className='badge mb-5 text-center'>{name}</h4>
      <Image height={220} width={220} src={icon} alt={`${name} icon`} className='w-1/2 h-auto mx-auto' />
    </div>
  }

  return (
    <>
      <section className="container py-24 sm:py-24">
        <h1 className='title-h1 text-center'>Select your bank</h1>
        <div className='item flex flex-row flex-wrap rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2 mx-auto px-[15px] py-[19px] '>
          {institutions.map(institution => (
            <Card key={institution.id} id={institution.id} name={institution.name} icon={institution.media[0].source} fullName={institution.fullName} />
          ))}
        </div>
      </section>
    </>
  )
}


export default Institutions;