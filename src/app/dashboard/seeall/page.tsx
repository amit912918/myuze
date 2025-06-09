import { Suspense } from 'react';
import SeeAllClient from '../../../components/dashboard/SeeAllClient'; // no dynamic()
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function SeeAllPage() {
    return (
        <Suspense fallback={<div><AiOutlineLoading3Quarters /></div>}>
            <SeeAllClient />
        </Suspense>
    );
}
