import { Suspense } from "react";
import DetailsClient from "../../../components/dashboard/DetailsClient";

export default function SeeAllPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsClient />
        </Suspense>
    );
}
