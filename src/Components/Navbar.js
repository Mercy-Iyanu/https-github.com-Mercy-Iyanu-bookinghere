import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
                <a href="/" className="bookings-logo">
                    <img
                        src="/images/booking.com.png"
                        alt="bookings-logo"
                        className="w-32 h-32"
                    />
                </a>
                <ul className="md:flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-200">NGN</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-200"></a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-200">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}