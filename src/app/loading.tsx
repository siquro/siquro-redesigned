import Image from 'next/image';

const Loading = () => {
    return (
        <div className='w-full container h-dvh flex items-center justify-center'>
            <div className='w-[90px] h-[90px] my-0 mx-auto'>
                <Image src={"/loading.png"} alt="loading" width={80} height={80} className='w-full h-auto' />
            </div>
        </div>
    )
}


export default Loading;