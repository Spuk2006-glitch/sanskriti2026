'use client'
import React from 'react';

const TimelineEvent = ({ date, title, description, position = 'left' }) => {
    return (
        <div id="events" className="scroll-mt-32 relative flex items-center mb-10 last:mb-0">
            {/* Left side content */}
            <div className={`${position === 'left' ? 'text-right pr-12' : ''} `} style={{ width: '47%' }}>
                {position === 'left' && (
                    <div className="animate-fadeIn flex flex-col items-end gap-4">
                        <h3 className="font-semibold text-2xl mb-3" style={{ color: '#F59E0B' }}>{date}</h3>
                        <h4 className="text-red-600 font-bold text-5xl mb-4" style={{ fontFamily: 'samarkan, serif' }}>{title}</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
                    </div>
                )}
            </div>

            {/* Center line and dot */}
            <div className="flex justify-center" style={{ width: '6%' }}>
                <div className="relative flex flex-col items-center">
                    {/* Dot */}
                    <div className="w-4 h-4 rounded-full z-10 shadow-lg" style={{ backgroundColor: '#F59E0B', boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}></div>
                </div>
            </div>

            {/* Right side content */}
            <div className={`${position === 'right' ? 'text-left pl-12' : ''}`} style={{ width: '47%' }}>
                {position === 'right' && (
                    <div className="animate-fadeIn">
                        <h3 className="font-semibold text-2xl mb-3" style={{ color: '#F59E0B' }}>{date}</h3>
                        <h4 className="text-red-600 font-bold text-5xl mb-4" style={{ fontFamily: 'samarkan, serif' }}>{title}</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Timeline = ({ events }) => {
    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-center text-8xl font-bold mb-20" style={{ fontFamily: 'samarkan, serif' }}>
                    <span className="text-white">:</span>
                    <span style={{ color: '#F59E0B' }}> timeline </span>
                    <span className="text-white">:</span>
                </h1>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style={{ backgroundColor: 'rgba(245, 158, 11, 0.3)' }}></div>

                    {/* Events */}
                    {events.map((event, index) => (
                        <TimelineEvent
                            key={index}
                            date={event.date}
                            title={event.title}
                            description={event.description}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
        </div>
    );
};

// Example usage component
export default function FestivalTimeline() {
    const events = [
        {
            date: '28th March, 2026',
            title: 'Curtain Raiser',
            description: 'Jadavpur University Salt Lake Campus'
        },
        {
            date: '29th March, 2026',
            title: 'Prelims',
            description: 'OAT, Jadavpur Campus'
        },
        {
            date: '30th March, 2026',
            title: 'Students Performance',
            description: 'OAT, Jadavpur Campus'
        },
        {
            date: '31st March, 2026',
            title: 'Dance Night',
            description: 'OAT, Jadavpur Campus'
        },
        {
            date: '1st April, 2026',
            title: 'All Events Day',
            description: 'OAT, Jadavpur Campus'
        },
        {
            date: '2nd April, 2026',
            title: 'Eastern Night',
            description: 'Genre: Eastern Music. OAT Jadavpur University'
        },
        {
            date: '3rd April, 2026',
            title: 'Western Night',
            description: 'Genre: Western Music. OAT Jadavpur University'
        },
        {
            date: '4th April, 2026',
            title: 'Reunion Night',
            description: 'Genre: World Music. OAT Jadavpur University'
        },
        {
            date: '5th April, 2026',
            title: 'Final Night',
            description: 'OAT Jadavpur University'
        }
    ];

    return <Timeline events={events} />;
}