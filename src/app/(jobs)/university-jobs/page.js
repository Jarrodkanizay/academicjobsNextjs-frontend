import Jobs from "./jobs";
import { universityJobsData } from '@/data/universityJobsData';
export async function generateMetadata({ params, searchParams }) {
    let { r } = searchParams;

    const {
        Name = '',
        Title = '',
        Description = '',
        Keyword = '',
        content: content1 = '',
        image = '',
    } = universityJobsData.find((item) => item.Name === r) || {};
    return {
        title: Title,
        description: Description,
        keywords: Keyword,
    };
}
// export async function generateMetadata({ params, searchParams }) {

//     return {
//         title: `${searchParams.l != undefined || searchParams.q != undefined ? searchParams.l + ' ' + searchParams.q + "|": ""}`,
//     };
// }
export default function Page({ searchParams }) {
    return (
        <div>
            <Jobs />
        </div>
    );
}
