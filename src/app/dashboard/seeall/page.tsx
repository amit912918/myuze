import { Suspense } from 'react';
import SeeAllClient from '../../../components/dashboard/SeeAllClient'; // no dynamic()

export default function SeeAllPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SeeAllClient />
        </Suspense>
    );
}
