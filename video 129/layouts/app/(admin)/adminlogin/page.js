import React from 'react'

const page = () => {
    return (
        <div>
            Admin login
            <p>Feel free to login</p>
        </div>
    )
}

export default page


export async function generateMetadata({ params }) {
    return {
        title: 'Admin Login - Facebook - Connect with friends and the world around you',
        description: 'Admin page : Facebook is a social networking service for everyone.',
    }
}