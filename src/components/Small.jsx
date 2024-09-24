
const Small = () => {
    return(
        <div className="sm:hidden absolute top-14 left-0 z-500 bg-white h-full w-full flex items-start justify-center">
            <div className="text-xl font-light text-center px-8 pt-14">
                <span className="flex justify-center space-x-1 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></rect>
                        <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                        <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                        <line x1="128" y1="192" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                        <path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                        <line x1="144" y1="88" x2="112" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                    </svg>
                </span>
                <p>The symphony editor is only available on a desktop computer or laptop.</p><br />
                <p>If {" you’re "} already using one, make your browser window bigger!</p>
            </div>
        </div>
    )
}

export default Small;