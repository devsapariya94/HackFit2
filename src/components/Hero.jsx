import './Hero.css'
import img from '../images/hero.jpg'

const Hero = () => {
    return (
        <div className="flex flex-row justify-center items-center ">
            <div className="w-1/2 mt-5">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="w-1/2">
                <div className='mt-10 ml-5 mr-20 pr-40'>
                    <div>
                        <span className='text-2xl self-center font-bold  text-gray-800'>No act of kindness, no matter how small, is ever wasted.</span>
                    </div>
                    <div className=' flex flex-row mt-10'>
                        <div className='flex flex-col pl-5 pr-5'>
                            <span className='text-blue-500 font-bold text-4xl'>0%</span>
                            <span className='text-gray-500 font-semibold'>PLATFORM FEES</span>
                        </div>
                        <div className='flex flex-col pl-5 pr-5'>
                            <span className='text-blue-500 font-bold text-4xl'>15</span>
                            <span className='text-gray-500 font-semibold'>DONORS</span>
                        </div>
                        <div className='flex flex-col pl-5 pr-5'>
                            <span className='text-blue-500 font-bold text-4xl'>5</span>
                            <span className='text-gray-500 font-semibold'>FUNDRAISERS</span>
                        </div>
                    </div>
                    <div className='mt-10 '>
                        <div>
                        <button type="button" class="text-white bg-blue-500 hover:bg-blue-600  font-bold rounded-lg text-lg px-7 py-5 text-center mr-3 md:mr-0">Start a Fundraiser</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;