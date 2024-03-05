import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found text-center">
            <h3 className="text-3xl">Not Found</h3>
            <p className="text-xl text-blue-300">Could not find requested resource</p>
            <Link className="text-xl text-blue-600 underline" href="/">Return Home</Link>
        </div>
    )
}