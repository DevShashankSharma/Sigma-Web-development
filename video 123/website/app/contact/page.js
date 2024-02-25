import React from 'react'
import Script from 'next/script'

const page = () => {
    return (
        <div>
            <Script>
                {`
                    alert("Welcome to contact page")
                `}
            </Script>
            Contact
        </div>
    )
}

export default page

export const metadata = {
    title: "Contact Facebook - Connect to the world",
    description: "This is facebook and we can contact to facebook",
};