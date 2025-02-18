import Image from "next/image";

const info = [
    {
        image: '/assets/images/contract.png',
        title: "Non-Disclosure Agreement.pdf",
        signed: "signed on 12/6/2024"
    },
    {
        image: '/assets/images/contract.png',
        title: "Scope of work and payment.pdf",
        signed: "signed on 12/6/2024"
    },
    {
        image: '/assets/images/contract.png',
        title: "Non-Disclosure Agreement.pdf",
        signed: "signed on 12/6/2024"
    },
]



const ContractInformation = () => {
    return ( <div className="flex flex-wrap gap-5">
        {info.map((info, index) => (
            <div key={index} className="flex flex-col gap-3 cursor-pointer">
                <div className="w-[312px] h-[189px] shrink-0 rounded-lg overflow-hidden relative">
                    <div className='absolute bg-[#00000099] top-0 w-full h-full flex justify-center items-center'>
                        <p className='text-gray-25'>Tap to open</p>
                    </div>
                    <Image 
                        src={info.image} 
                        alt={info.title}
                        width={400}
                        height={200}
                        className='w-full object-cover'
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className='text-Text-xl text-gray-900 font-semibold'>{info.title}</p>
                    <p className="text-Text-sm text-gray-500">{info.signed}</p>
                </div>
            </div>
        ))}

    </div> );
}
 
export default ContractInformation;