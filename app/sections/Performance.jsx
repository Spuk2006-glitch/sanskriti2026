'use client'
import React from 'react';
import HoverExpand from '../components/HoverExpand';

export default function Performance() {
    const items = [
        {
            src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
            alt: "Curtain Raiser",
            date: "5/4/25",
            title: "Curtain Raiser",
            artist: "Alchemy",
        },
        {
            src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
            alt: "Eastern Night",
            date: "10/4/25",
            title: "Eastern Night",
            artist: "Purbayan Chatterjee and Co.",
        },
        {
            src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
            alt: "Western Night",
            date: "11/4/25",
            title: "Western Night",
            artist: "Girish and The Chronicles",
        },
        {
            src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
            alt: "Reunion Night",
            date: "12/4/25",
            title: "Reunion Night",
            artist: "Agnee",
        },
        {
            src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
            alt: "Final Night",
            date: "13/4/25",
            title: "Final Night",
            artist: "Agam",
        },
    ];

    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-center text-8xl font-bold mb-20" style={{ fontFamily: 'samarkan, serif' }}>
                    <span className="text-white">: Past </span>
                    <span style={{ color: '#F59E0B' }}>Performances </span>
                    <span className="text-white">:</span>
                </h1>

                {/* Hover Expand Component */}
                <HoverExpand items={items} className="" />
            </div>
        </div>
    );
}
