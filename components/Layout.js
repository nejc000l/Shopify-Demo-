import React from 'react'
import Nav from '../components/Nav'
export default function Layout({children}) {
    return (
        <div className="flex flex-col justify-content-between min-h-screen">
            <Nav/>
            <main>
                {children}
            </main>
            <footer>
                Foot
            </footer>
        </div>
    )
}
