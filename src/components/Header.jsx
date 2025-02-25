
const Header = () => {
    return (
        <nav className="py-1.5 fixed sm:sticky top-0 sm:top-1 w-full border-b border-black/10 shadow-inner justify-between flex z-toolbar h-[60px] bg-[#ecedee]" style={{transition: "0.2s ease-in, background 0.2s ease-in, height 0.33s ease-in-out"}}>
            <div className="h-12 flex items-center justify-between w-full mx-4 gap-x-3 md:gap-x-3">
                <a className="min-w-max focus:outline-none focus-visible:ring-2 focus-visible:ring-action-soft rounded-sm transition sm:opacity-100" href="/portfolio" aria-label="Navigate to Home">
                    <img src="/logo-nav.png" className="w-[22px]" alt="Composer Logo" />
                </a>
                <div className="hidden sm:flex space-x-1">
                    <a className="leading-none select-none cursor-pointer text-center rounded-full px-2 py-1 outline-none transition focus-visible:ring-2 focus-visible:ring-action-soft hover:bg-slate-300 focus:bg-slate-300" href="/portfolio">
                        <div className="flex space-x-1.5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                <line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                <path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            </svg>
                            <span>Portfolio</span>
                        </div>
                    </a>
                    <a className="leading-none select-none cursor-pointer text-center rounded-full px-2 py-1 outline-none transition focus-visible:ring-2 focus-visible:ring-action-soft hover:bg-slate-300 focus:bg-slate-300" href="/watch">
                        <div className="flex space-x-1.5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="44" cy="176" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                <polyline points="200 40 240 80 200 120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                <path d="M72,176h8a48,48,0,0,0,48-48h0a48,48,0,0,1,48-48h64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            </svg>
                            <span>Watchlist</span>
                        </div>
                    </a>
                    <a className="leading-none select-none cursor-pointer text-center rounded-full px-2 py-1 outline-none transition focus-visible:ring-2 focus-visible:ring-action-soft hover:bg-slate-300 focus:bg-slate-300" href="/discover">
                        <div className="flex space-x-1.5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                <path d="M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                <path d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            </svg>
                            <span>Discover</span>
                        </div>
                    </a>
                    <div className="leading-none flex">
                        <div className="relative group rounded-l-full text-[#ecedeeb3] hover:!text-light">
                            <div className="text-center outline-none transition bg-black text-light-soft group-hover:!text-[#fff] rounded-l-full flex items-center justify-center">
                                <button className="select-none focus:outline-none rounded-full focus-visible:ring-2 focus-visible:ring-action-soft" disabled="">
                                    <div className="px-2 py-1 flex items-center justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                            <rect width="256" height="256" fill="none"></rect>
                                            <path d="M220,175.3V80.7a8.1,8.1,0,0,0-4.1-7l-84-47.5a7.8,7.8,0,0,0-7.8,0l-84,47.5a8.1,8.1,0,0,0-4.1,7v94.6a8.1,8.1,0,0,0,4.1,7l84,47.5a7.8,7.8,0,0,0,7.8,0l84-47.5A8.1,8.1,0,0,0,220,175.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                            <circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                        </svg>
                                        <span>Create</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                            <rect width="256" height="256" fill="none"></rect>
                                            <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="pt-1 absolute cursor-pointer">
                                <div className="dd-fadein-down w-60 bg-white border-[1px] border-black shadow-sm rounded-md hidden z-1 group-hover:flex">
                                    <div className="w-full">
                                        <button className="select-none text-black w-full p-2 gap-x-1 rounded-t-md flex items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                                <rect width="256" height="256" fill="none"></rect>
                                                <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                                <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                            </svg>
                                            New Symphony
                                        </button>
                                        <a href="/drafts" className="select-none text-black w-full p-2 gap-x-1 rounded-b-md flex items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                                <rect width="256" height="256" fill="none"></rect>
                                                <path d="M72,224H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                                <polyline points="120 32 152 32 208 88 208 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                                <path d="M48,64V40a8,8,0,0,1,8-8H80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                                <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                                <path d="M208,176v40a8,8,0,0,1-8,8h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                                <line x1="48" y1="104" x2="48" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                                <line x1="112" y1="224" x2="152" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                            </svg> Drafts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 border-l text-white bg-black text-light rounded-r-full">
                            <button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-action-soft">Editor</button>
                            <span className="mx-1 text-xs text-light-soft cursor-default">•</span>
                            <button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-action-soft">Backtest</button>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden transition opacity-100">
                    <span className="flex items-center space-x-1 leading-none cursor-default select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            <circle cx="128" cy="76" r="12"></circle>
                            <circle cx="83" cy="102" r="12"></circle>
                            <circle cx="83" cy="154" r="12"></circle>
                            <circle cx="173" cy="102" r="12"></circle>
                        </svg>
                        <span className="font-medium">Create</span>
                    </span>
                </div>
                <span className="hidden sm:inline w-full">
                    <div className="grid space-y-1.5 content-center h-16 w-full">
                        <div className="pb-px border-b border-[#B4B4B5]" style={{boxShadow: "rgb(244, 244, 245) 0px 1px 0px"}}></div>
                        <div className="pb-px border-b border-[#B4B4B5]" style={{boxShadow: "rgb(244, 244, 245) 0px 1px 0px"}}></div>
                        <div className="pb-px border-b border-[#B4B4B5]" style={{boxShadow: "rgb(244, 244, 245) 0px 1px 0px"}}></div>
                        <div className="pb-px border-b border-[#B4B4B5]" style={{boxShadow: "rgb(244, 244, 245) 0px 1px 0px"}}></div>
                    </div>
                </span>
                <div className="flex items-center gap-2 shrink-0">
                    <button type="button" className="button btn-base-js gap-x-1 transition bg-action border border-black text-white shadow-sm shadow-action-dark/20 disabled:bg-action/75 disabled:shadow-slate-300 hover:bg-action-dark active:shadow-none items-center justify-center rounded-full px-2 hidden sm:flex shrink-0"
                        aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:raf:" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="inline-flex items-center shrink-0">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="200" y1="136" x2="248" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                            <line x1="224" y1="112" x2="224" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                            <circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle>
                            <path d="M22.2,200a112,112,0,0,1,171.6,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg>
                        <span>
                            Invite 
                            <span className="hidden md:inline"> friends</span>
                        </span>
                    </button>
                    <div className="group relative">
                        <button type="button" id="profile-menu-button" aria-haspopup="menu" data-state="closed" aria-label="User Menu" className="rdx-state-open:bg-slate-300 flex items-center rounded-full px-1 py-1 cursor-pointer outline-none min-w-max transition hover:bg-slate-300 focus:bg-slate-300 duration-300 select-none sm:flex focus:outline-none focus-visible:ring-2 focus-visible:ring-action-soft">
                            <span className="inline-flex items-center justify-center overflow-hidden align-middle select-none w-6 h-6 rounded-full bg-[#187710]">
                                <span className="flex items-center justify-center w-full h-full font-medium text-white bg-function-wt-sub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle>
                                        <path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    </svg>
                                </span>
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-dark-soft ml-1">
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                            </svg>
                        </button>
                        <div className="pt-1 absolute -left-[350%] cursor-pointer w-auto">
                            <div className="dd-fadein-down w-60 bg-white border-[1px] border-black shadow-sm rounded-md hidden z-1 group-hover:flex text-sm">
                                <div className="w-full flex flex-col">
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        Accounts & Funding
                                    </a>
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        What is new
                                    </a>
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        Learn
                                    </a>
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        Support
                                    </a>
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        Feedback
                                    </a>
                                    <a href="/" className="select-none text-black p-2 items-center transition hover:bg-gray-500 hover:text-white focus:bg-gray-500 outline-none leading-none">
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-state="closed" className="sm:hidden">
                        <button type="button" aria-controls="radix-:rak:" aria-expanded="false" data-state="closed" className="hamburger" aria-label="Open Menu">
                            <span className="lettuce"></span>
                        </button>
                        <div data-state="closed" id="radix-:rak:" hidden="" className="sm:hidden w-full absolute mt-1 left-0 right-0 overflow-y-scroll h-0" style={{transition: "1s ease-in, background 0.3s ease-in"}}></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
