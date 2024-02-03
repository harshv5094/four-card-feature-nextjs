import Image from 'next/image'
import SupervisorIcon from './img/icon-supervisor.svg'
import TeamBuildingIcon from './img/icon-team-builder.svg'
import CalculatorIcon from './img/icon-calculator.svg'
import KarmaIcon from './img/icon-karma.svg'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center mt-16 text-very-dark-blue space-y-2 max-mobile:space-y-1 text-center '>
        <h1 className='text-3xl max-mobile:text-2xl font-extralight'>
          Reliable, efficient delivery
        </h1>
        <h1 className='text-3xl max-mobile:text-2xl font-bold'>
          Powered by Technology
        </h1>

        <div className='mx-[25em] pt-6 max-laptop:mx-[10em] max-tablet:mx-10 max-mobile:mx-5 text-grayish-blue'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </div>

        <div className='mt-20 max-mobile:mt-5 grid grid-cols-3 gap-10 max-laptop:gap-4 max-laptop:grid-cols-1 max-mobile:grid-cols-1 mx-20 max-mobile:mx-2'>
          <div className='w-[25em] max-mobile:w-[20em] h-[15em] mt-[10em] max-laptop:my-5 max-laptop:mt-10 cols-span-1 border-t-cyan border-t-4 rounded-md shadow-lg bg-white text-left p-8 space-y-5'>
            <h1 className='font-bold text-xl'>Supervisor</h1>
            <h2 className='text-grayish-blue text-normal'>
              Monitors activity to identify project roadblocks
            </h2>
            <div className='flex justify-end'>
              <Image src={SupervisorIcon} alt='Supervisor Icon' />
            </div>
          </div>

          <div className='cols-span-2 max-laptop:cols-span-1 max-mobile:cols-span-1 gap-10 grid-rows-2 max-mobile:grid-rows-none'>
            <div className='w-[25em] max-mobile:w-[20em] h-[15em] mt-10 max-laptop:mt-0 border-t-red border-t-4 rounded-md shadow-lg bg-white text-left p-8 space-y-5'>
              <h1 className='font-bold text-xl'>Team Builder</h1>
              <h2 className='text-grayish-blue text-normal'>
                Scans our talent network to create the optimal team for your
                project
              </h2>
              <div className='flex justify-end'>
                <Image src={TeamBuildingIcon} alt='Team Building Icon' />
              </div>
            </div>

            <div className='w-[25em] max-mobile:w-[20em] h-[15em] mt-10 border-t-orange border-t-4 rounded-md shadow-lg bg-white text-left p-8 space-y-5'>
              <h1 className='font-bold text-xl'>Karma</h1>
              <h2 className='text-grayish-blue text-normal'>
                Regularly evaluates our talent to ensure quality
              </h2>
              <div className='flex justify-end'>
                <Image src={KarmaIcon} alt='Karma Icon' />
              </div>
            </div>
          </div>

          <div className='w-[25em] max-mobile:w-[20em] h-[16em] mt-[10em] max-laptop:mt-10 cols-span-1 border-t-blue border-t-4 rounded-md shadow-lg bg-white text-left p-8 space-y-5'>
            <h1 className='font-bold text-xl'>Calculator</h1>
            <h2 className='text-grayish-blue text-normal'>
              Uses data from past projects to provide better delivery estimates
            </h2>
            <div className='flex justify-end'>
              <Image src={CalculatorIcon} alt='Calculator Icon' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
