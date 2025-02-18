const documents = [
    {
        subject: "James made a correction",
        date: "Monday, 3rd July 2023",
        content: "Can you please make the hero section pop more, my wife said she’s not feeling it. Add more colours please."
    },
    {
        subject: "James made a correction",
        date: "Monday, 3rd July 2023",
        content: "Can you please make the hero section pop more, my wife said she’s not feeling it. Add more colours please."
    },
    {
        subject: "James made a correction",
        date: "Monday, 3rd July 2023",
        content: "Can you please make the hero section pop more, my wife said she’s not feeling it. Add more colours please."
    },
    {
        subject: "James made a correction",
        date: "Monday, 3rd July 2023",
        content: "Can you please make the hero section pop more, my wife said she’s not feeling it. Add more colours please."
    },
    {
        subject: "James made a correction",
        date: "Monday, 3rd July 2023",
        content: "Can you please make the hero section pop more, my wife said she’s not feeling it. Add more colours please."
    },
]

const ProgressReview = () => {
    return (
        <div className="flex flex-col gap-5 h-[calc(100vh-300px)] overflow-scroll">
            {documents.map((docs, index) => (
                <div key={index} className='shrink-0 flex min-h-28 rounded-xl justify-between gap-3 p-6 bg-secondary-purple-10'>
                    <div className="flex flex-col gap-2">
                        <div className='flex gap-3 items-center'>
                            <p className='text-Text-xl text-gray-900 font-medium'>
                                {docs.subject}
                            </p>
                            <p className='text-Text-xs text-gray-700'>{docs.date}</p>
                        </div>
                        <p className='text-Text-sm text-gray-700 max-w-[730px]'>
                            {docs.content}
                        </p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                            <path
                                d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z'
                                stroke='#423366'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <button className='flex px-4 py-2 justify-center items-center gap-2.5 rounded bg-primary-purple-60 text-center text-Text-sm text-gray-25'>
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProgressReview;
