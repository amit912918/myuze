import { Suspense } from "react";
import DetailsClient from "../../../components/dashboard/DetailsClient";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function SeeAllPage() {
    return (
        <Suspense fallback={<div><AiOutlineLoading3Quarters /></div>}>
            <DetailsClient />
        </Suspense>
    );
}
