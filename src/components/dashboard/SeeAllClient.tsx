'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import useDashboard from '../../hooks/useDashboard';

export default function SeeAllClient() {

    const router = useRouter();
    const { seeAllData } = useDashboard();

    const searchParams = useSearchParams();
    const heading = searchParams?.get('heading');

    useEffect(() => {
        console.log(seeAllData, "seeallData");
    })

    return (
        <div className="p-4">
            <div className="flex items-center gap-24 mb-6">
                <IoArrowBackOutline onClick={() => router.back()} className='cursor-pointer' size={24} />
                <h2 className="text-lg font-semibold">{heading}</h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {seeAllData.map((item, idx) => (
                    <div key={idx} className="text-center">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={item.imgIrl}
                                alt={item.conName}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-2 right-2">
                                <Image src="/images/lightning.png" alt="Badge" width={24} height={24} />
                            </div>
                        </div>
                        <p className="mt-2 text-xs font-medium">{item.conName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
