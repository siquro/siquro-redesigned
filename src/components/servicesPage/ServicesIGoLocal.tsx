import Image from 'next/image';

const ServicesGoLocal = () => {

    const content = [
        {
            title: "EXTENSIVE POSSIBILITIES",
            description: "No matter what your risk level is, we offer credit and debit cards, e-wallets, electronic payment systems, local direct debit systems – you name it!",
            icon: "services_icons/1.svg",
        },
        {
            title: "ON-DEMAND CUSTOMISATION",
            description: "With Shopify, BigCommerce, WHMCS, and other platforms and hosting services, as well as various CMS and CMRs, we offer technology to meet any business requirement.",
            icon: "services_icons/2.svg",
        },
        {
            title: "SECURE AND POTENT TECHNOLOGY",
            description: "Enjoy the convenience of 3D/non-3D terminals, repeated subscription payments, and deferred payments for mailed invoices with Siquuro.",
            icon: "services_icons/3.svg",
        },
        {
            title: "COOPERATION WITHOUT BORDERS",
            description: "Regardless of where your customers are located, they will be able to make online payments",
            icon: "services_icons/4.svg",
        },
        {
            title: "CHOOSING AN AFFILIATE SCHEME",
            description: "Flexible commission rates based on the order of cooperation, the client’s size, and the type of business.",
            icon: "services_icons/5.svg",
        },
        {
            title: "MONTHLY REPORTING",
            description: "Your commission and involved turnover are detailed in our statistics,",
            icon: "services_icons/6.svg",
        },
    ]

    const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
        return <div className='basis-full sm:basis-[48%] md:basis-[30%] lg:basis-[32%]'>
            <div className='h-full dark:bg-primaryLight bg-primaryDark rounded-[20px] pt-[15px] px-[25px] pb-[25px] md:pt-[45px] md:pb-[71px]'>
                <div className='mb-6 border-b-[3px] border-primaryLight dark:border-primaryDark'>
                    <Image className='my-0 mb-6 h-auto w-[45px] md:w-[70px] dark:invert-0 invert' src={icon} alt={""} width={75} height={75} />
                </div>
                <div>
                    <h4 className='title-h4  !text-primaryLight dark:!text-primaryDark mb-5 pe-5'>{title}</h4>
                    <p className='text !text-primaryLight dark:!text-primaryDark'>{description}</p>
                </div>

            </div>
        </div>
    }

    return (<section className="container flex flex-col md:py-[90px] pt-[40px] pb-[90px]">
        <div className="title--container mb-[40px]">
            <p className="badge text-center">payment</p>
            <h2 className="title-h2 mb-8 text-center">Forget trouble<br />with integration</h2>
        </div>

        <div className="flex flex-row flex-wrap h-full gap-5 justify-around">
            {content.map((item, index) => <Card key={index} title={item.title} description={item.description} icon={item.icon} />)}
        </div>



    </section >);
}

export default ServicesGoLocal;