import React from 'react'
import Image from 'next/image'
function Header() {
    return (
        <div>
            <header class="bg-white dark:bg-gray-900">
                <div class="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Image src='/logo.svg' width={350} height={200} />

                    <div class="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        Careers
                                    </a>
                                </li>

                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        History
                                    </a>
                                </li>

                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a class="relative text-gray-500 dark:text-white transition duration-300 
        hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-orange-500 
        after:transition-all after:duration-300 hover:after:w-full" href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <a
                                    class="rounded-md bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2.5 text-sm font-medium text-white 
transition-all duration-300 transform 
hover:from-cyan-500 hover:to-pink-400 
hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
                                    href="/files">
                                    Get Started
                                </a>
                            </div>

                            <button class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                                <span class="sr-only">Toggle menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
