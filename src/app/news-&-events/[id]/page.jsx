import { getNewsAndEvents, getSingleNewsAndEvents } from '@/services'
import NewsAndEventDetailsTemplate from '@/templates/NewsAndEventDetails'

const NewsAndEventDetails = async ({ params }) => {
    const data = await getNewsAndEvents()
    const content = await getSingleNewsAndEvents(params?.id)

    return (
        <>
            <NewsAndEventDetailsTemplate data={data} content={content?.[0]}/>
        </>
    )
}

export default NewsAndEventDetails