import Image from 'next/image'
import Style from './profile.module.css'
import { Bitter } from 'next/font/google'
const bitter = Bitter({
  weight:["400","400"],
  subsets:["latin"]
})
const Profile = () => {
  return (
    <main className={` pb-52 flex justify-center  text-white`}>

          <div className={` ${Style.homePage} flex flex-col justify-between p-5 relative  rounded-md h-3/6 lg:w-5/6 md:w-full max-md:w-full`}>
           
            <div className=" absolute right-0 left-0  top-0 ">
              <Image src={"/profile_images/explore_2.png"} alt='Image' width={500} height={500} />
            </div>

              <div className={`${bitter.className} text-2xl`}>
                <h1>Explore Yourself</h1>
                <p className=' text-base mt-5 opacity-80'>
                  Let's do it <br/> together.We will<br/> never stop.
                </p>
              </div>
              <div className={` ${bitter.className} flex justify-end`}>
                <p className=' text-base'>
                    We will learn<br/> toghter.
                </p>
              </div>
          </div>

    </main>
  )
}

export default Profile