import Image from "next/image";
import ProfileImage from "@/public/profile.png"
import ProfileBackgroundImage from "@/public/profile backgroud.jpg"

export default function CardProfile() {
    return (
        <div
            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <Image className="object-cover object-top w-full" src={ProfileBackgroundImage} alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <Image className="object-cover object-center h-32" src={ProfileImage} alt='Woman looking front' />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">KIYOUNG KWON</h2>
                <p className="text-gray-500">Back-end Engineer</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <a href="https://velog.io/@kkywalk2" target="_blank">
                        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 192">
                                <path fillRule="evenodd"
                                    d="M24 0h144c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V24C0 10.745 10.745 0 24 0Zm25 57.92v7.56h18l13.68 77.04 17.82-1.26c17.52-22.2 29.34-38.82 35.46-49.86 6.24-11.16 9.36-20.46 9.36-27.9 0-4.44-1.32-7.8-3.96-10.08-2.52-2.28-5.7-3.42-9.54-3.42-7.2 0-13.2 3.06-18 9.18 4.68 3.12 7.86 5.7 9.54 7.74 1.8 1.92 2.7 4.5 2.7 7.74 0 5.4-1.62 11.52-4.86 18.36-3.12 6.84-6.54 12.9-10.26 18.18-2.4 3.36-5.46 7.5-9.18 12.42L88.06 57.2c-.96-4.8-3.96-7.2-9-7.2-2.28 0-6.66.96-13.14 2.88-6.48 1.8-12.12 3.48-16.92 5.04Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <a href="https://www.linkedin.com/in/ki-young-kwon-168381193/" target="_blank">
                        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </span>
                    </a>
                </li>
            </ul>
        </div >
    )
}
