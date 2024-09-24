const Help = () => {
    return(
        <div className="help-bar fixed flex-row bottom-3 sm:bottom-6 right-3 sm:right-6 flex space-x-1 z-toolbar">
            <button className="flex items-center shrink-0 bg-black rounded-full shadow-sm text-action-secondary border border-dark-bright text-xs p-2 outline-none focus-visible:ring-2 focus-visible:ring-action-soft cursor-pointer transition hover:bg-dark-bright"
                id="helpscout" aria-label="Help">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </button>
        </div>
    )
}

export default Help;