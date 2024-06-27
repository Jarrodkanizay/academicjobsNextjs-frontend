import Jobs from "./jobs";
export async function generateMetadata({ params, searchParams }) {

    return {
        title: `${searchParams.l != undefined || searchParams.q != undefined ? searchParams.l + ' ' + searchParams.q + "|": ""}`,
    };
}
export default function Page({ searchParams }) {
    return (
        <div>
        <Jobs />
        </div>
    );
}
