import { Suspense } from 'react';
import PodcastClient from '../../../components/dashboard/PodcastClient';

export default function Podcast() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PodcastClient />
        </Suspense>
    );
}
