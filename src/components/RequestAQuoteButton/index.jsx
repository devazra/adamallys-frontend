import Link from 'next/link'

const RequestAQuoteButton = ({ Email }) => {
    return (
        <Link
            href={`mailto:${Email}`}
            // href={"/request-a-quote"} 
            // href={`mailto:adamallys@adamallys-llc.com`}
            className="rounded text-white hidden xl:block bg-[#2e368fbf] hover:bg-theme-main text-left px-[19px] py-[9px]">
            <p className="text-xs">Request a Quote</p>
            <h6 className="text-[15px]">{Email}</h6>
        </Link>
    )
}

export default RequestAQuoteButton