'use client'
import React, { useState, useEffect } from 'react';
import SettingsBtn from './SettingsBtn';
import SignOutBtn from './SignOutBtn';
import Link from 'next/link';
import axios from 'axios';

const SuppliesSideBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [salesData, setSalesData] = useState([]);

    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search?query=${query}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleItemClick = async (item) => {
        setSelectedItem(item);
        setSearchQuery('');
        setSearchResults([]);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sales/productID?product=${item._id}`);
            setSalesData(response.data);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    return (
        <div className='w-[285px] bg-MediumBlue fixed h-full px-4 py-2'>
            <div>
                <Link href='/portal' className='text-2x text-NeonGreen text-4xl font-bold font-Montserrat mb-[50px] mt-[65px] ml-8 flex justify-center hover:text-Goldy transition-all ease-in'>
                    INFINITE ERP
                </Link>
            </div>
            <div className="mt-8 px-3">
                <h1 className="text-white text-lg font-bold font-Montserrat mb-2">Search for Items</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 bg-white text-gray-800 rounded-md mb-4"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="bg-white p-4 rounded-md h-[20rem] mb-2 overflow-y-auto font-Roboto">
                    {searchResults.length > 0 && (
                        <ul className='border border-gray-300 font-bold rounded-lg bg-gray-300'>
                            {searchResults.map((item) => (
                                <li
                                    key={item._id}
                                    className="cursor-pointer p-2 hover:bg-gray-300 rounded"
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item.productName}
                                </li>
                            ))}
                        </ul>
                    )}
                    {selectedItem && (
                        <div className='font-Roboto'>
                            <h2 className="text-xl font-bold">{selectedItem.productName}</h2>
                            <p><strong>ID:</strong> {selectedItem.idNumber}</p>
                            <p><strong>Cost:</strong> ${selectedItem.price}</p>
                            <h3 className="text-lg font-bold">Sales</h3>
                            <ul>
                                {salesData.length > 0 ? (
                                    salesData.map((sale) => (
                                        <li key={sale._id}>
                                            <p><strong>Quantity Sold:</strong> {sale.quantitySold}</p>
                                            <p><strong>Total Price:</strong> ${sale.totalPrice}</p>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <p><strong>Quantity Sold:</strong> 0</p>
                                        <p><strong>Total Price:</strong> $0</p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <hr className='border-Goldy' />
            <ul className='mt-5'>
                <li className='mb-2 py-2'>
                    <SettingsBtn />
                    <SignOutBtn />
                </li>
            </ul>
            <div className='flex justify-center mt-[10px] mb-5 drop-shadow-[1px_9px_12px_rgba(0,0,0,0.75)]'>
                <img src="/images/1712197531125.jpg" alt='Profile Pic' className='w-16 h-16 rounded-full' />
            </div>
            <div className='flex justify-center text-Goldy font-Playfair'>
                j3remyz1on@gmail.com
            </div>
        </div>
    );
};

export default SuppliesSideBar;
