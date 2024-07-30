/* eslint-disable indent */
import { Divider } from '@nextui-org/react';

// eslint-disable-next-line react/prop-types
const Card = ({ title, type, github, description, background, webSiteLink, gitHubLink }) => {
    return (
        <>
            <div className='w-[400px] h-[400px] text-left'>
                <h4 className='font-bold text-3xl text-mygray mb-3 w-60'>{title}</h4>

                <div className={`${background} space-y-1 h-60 w-90 bg-cover bg-no-repeat rounded-xl`} />
                <div className=' flex flex-row flex-wrap w-auto '>
                    <Divider className='my-3 dividerHorizontal bg-red-600' />

                    <div className='flex h-5 items-center space-x-4 text-small text-mygray'>
                        <div className='hover:text-orange-500'><a href={webSiteLink} target='_blanck'>{type} </a></div>
                        <Divider orientation='vertical' className='bg-red-600 -mt-1 ' />
                        <div className=' hover:text-orange-500'><a href={gitHubLink} target='_blanck'>{github}</a></div>

                        <Divider orientation='vertical' className='bg-red-600 -mt-1' />
                        <div>{description}</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card;
