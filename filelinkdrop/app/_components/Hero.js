import React from 'react'
import Constant from '../_utils/Constant.js'
function Hero() {
    return (
        <div>
            <section class="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
                <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
                    <div class="max-w-prose text-left">
                        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                            <strong class="text-indigo-600"> Upload , Save </strong>
                            and Easily
                            <strong class="text-rose-400"> Share </strong>
                            your
                            <strong class="text-cyan-400"> Files </strong>
                            in one place
                        </h1>

                        <p class="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                            {Constant.desc}
                        </p>

                        <div class="mt-4 flex gap-4 sm:mt-6">
                            <a class="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300" href="#">
                                Get Started
                            </a>

                            <a class="px-6 py-3 rounded-lg border border-gray-600 text-orange-300 font-medium hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="/photo.jpg"
                            className="w-[600px] height-[600px] max-w-full drop-shadow-2xl hover:scale-108 transition-transform duration-300"
                        />
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Hero
