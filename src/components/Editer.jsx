import Draggable from 'react-draggable';
import { useState } from 'react';

const ControlledDraggableBox = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable position={position} onDrag={handleDrag}>
            <div className="w-[248px] border border-panel-border bg-[#f3f4f5] rounded-md shadow-xl z-10 relative" data-projection-id="50">
                <div className="px-2 py-1.5 rounded-t-md text-xs text-dark-soft tracking-wide bg-[#dadde0] shadow-inner flex items-center border-b border-divider-light cursor-grab active:cursor-grabbing select-none">
                    <span className="cursor-pointer mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#000" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="208 96 128 176 48 96" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
                        </svg>
                    </span>
                    <div className="handle flex items-center w-full space-x-1">
                        <div className="flex-shrink-0 select-none">Symphony Details</div>
                        <div className="scanlines-sm h-4 flex-grow"></div>
                    </div>
                </div>
                <div className="h-full w-full divide-y divide-solid divide-divider-light rounded-md">
                    <div className="px-3 py-3 hover:bg-white transition"><span className="block w-full text-dark-soft label" htmlFor="symphony-name">Name</span>
                        <div className="w-auto flex items-center group">
                            <div type="text" name="symphony-name" value="New Symphony" placeholder="e.g. Music to my ears" className="cursor-default -mx-1 w-full focus:outline-none text-sm bg-transparent rounded transition border border-transparent hover:border-input-border focus:bg-white focus:border-input-focus p-1"><span>New Symphony</span></div>
                        </div>
                    </div>
                    <div className="p-3"><span className="block  w-full text-dark-soft label" htmlFor="symphony-type">Type</span>
                        <div>Crypto</div>
                    </div>
                    <div className="px-3 py-3 hover:bg-white transition"><span className="block w-full text-dark-soft label" htmlFor="symphony-description">Description</span>
                        <div className="w-auto flex items-center group">
                            <div id="symphony-description" name="symphony-description" type="text" value="" placeholder="e.g. Describe your goals and logic behind your symphony" rows="5" className="cursor-default -mx-1 w-full focus:outline-none text-sm bg-transparent rounded transition border border-transparent hover:border-input-border focus:bg-white focus:border-input-focus p-1 whitespace-pre-wrap break-normal max-h-36 overflow-auto">
                                <span className="text-gray-800">e.g. Describe your goals and logic behind your symphony</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-3 hover:bg-white transition rounded-b-md"><span className="block w-full text-dark-soft label">Trading Setting</span><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rcs:" data-state="closed" className="flex justify-between items-center -mx-1 w-full focus:outline-none text-sm rounded transition border hover:border-input-border focus:bg-white focus:border-input-focus p-1 bg-transparent border-transparent">Threshold: 10%<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></button></div>
                    <div className="px-3 py-3 hover:bg-white transition rounded-b-md">
                        <div className="flex justify-between items-center"><span className="block text-dark-soft label">Investments</span></div>
                        <div className="mt-2">
                            <button type="button" className="w-full button btn-base-js gap-x-1.5 transition bg-action border border-action-dark text-white shadow-sm shadow-action-dark/20 disabled:bg-action/75 disabled:shadow-dark/10 hover:border-action-dark hover:bg-action-dark active:shadow-none justify-center text-xs px-2 py-1.5 rounded"
                            disabled="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="inline-flex items-center shrink-0"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                </svg>New Investment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};


const Backtest_mini = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable position={position} onDrag={handleDrag}>
            <div id="backtest-mini" className="backtest-panel shrink-0 panel w-panel border border-panel-border bg-panel-bg rounded-md shadow-sm overflow-hidden float-right" data-projection-id="5">
                <div className="px-2 py-1.5 rounded-t-md text-xs text-dark-soft tracking-wide bg-panel-header shadow-inner flex items-center border-b border-divider-light cursor-grab active:cursor-grabbing select-none">
                    <span className="cursor-pointer mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
                        </svg>
                    </span>
                    <div className="handle flex items-center w-full space-x-1">
                        <div className="flex-shrink-0 select-none">Backtest Preview</div>
                        <div className="scanlines-sm h-4 flex-grow"></div>
                    </div>
                </div>
                <div className="h-full w-full divide-y divide-solid divide-divider-light rounded-md">
                    <div className="bg-black text-light-soft flex items-center justify-center">
                        <div className="relative glare bg-black w-[246px] h-[162px]">
                            <div className="w-full h-[140px]">
                                <div className="flex flex-col justify-center items-center h-full m-3 relative text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <rect x="156" y="40" width="52" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                                        <rect x="48" y="40" width="52" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                                    </svg>
                                    <div className="text-xs w-full text-center mt-2">To run a backtest, fix the 2 issues in your symphony.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-2 pr-4 py-2 hover:bg-white transition text-xs text-dark-soft flex items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="mr-1">
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline points="176 152 224 104 176 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                            <polyline points="128 152 176 104 128 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                            <path d="M32,200a96,96,0,0,1,96-96h48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg> Jump to backtest
                    </div>
                </div>
            </div>
        </Draggable>
    );
}


const Editer = () => {
    return (
        <div className="editor-wrapper">
            <div id="sidebar" className="w-[248px] panel space-y-4 isolate">
                <div className="border border-panel-border rounded-md shadow-sm bg-[#f3f4f5] pt-4 pb-5 px-4 space-y-3">
                    <div className="flex rounded shadow-sm border select-none border-dark">
                        <button className="flex flex-grow items-center rounded-l-sm font-light space-x-1.5 py-2.5 px-2 leading-none transition focus:outline-none bg-action hover:bg-action-dark text-white shadow-inner-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline points="216 72 104 184 48 128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                            </svg>
                            <span>Save changes</span>
                        </button>
                        <button type="button" id="radix-:rao:" aria-haspopup="menu" data-state="closed" className="w-8 flex flex-shrink-0 items-center justify-center rounded-r-sm border-l transition focus:outline-none border-dark bg-action-dark text-white shadow-inner-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" className="opacity-100">
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline points="208 96 128 176 48 96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="rounded flex border border-asset-border shadow-sm bg-[#f3f4f5] divide-x divide-solid divide-asset-border">
                        <button className="w-full text-sm font-light flex items-center justify-center py-2 shadow-inner transition focus:outline-none leading-none select-none rounded-tl rounded-bl text-dark bg-white hover:bg-tab-light">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill=""></rect>
                                    <polyline points="79.8 99.7 31.8 99.7 31.8 51.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <path d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                </svg>
                                <span>Undo</span>
                            </span>
                        </button>
                        <button className="w-full text-sm font-light flex items-center justify-center py-2 shadow-inner transition focus:outline-none leading-none select-none rounded-tr rounded-br text-dark-soft bg-background" disabled="">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <polyline points="176.2 99.7 224.2 99.7 224.2 51.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <path d="M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                </svg>
                                <span>Redo</span>
                            </span>
                        </button>
                    </div>
                </div>
                <ControlledDraggableBox />
                <div className="flex border border-panel-border rounded-md shadow-sm bg-[#f3f4f5] p-4 items-center justify-around text-xs shrink-0">
                    <button className="w-full rounded-full border border-action-dark bg-white text-action-dark shadow-sm shadow-action-dark/20 hover:bg-action/25 disabled:border-input-border disabled:bg-white disabled:text-gray-500 active:shadow-none disabled:shadow-dark/10 px-2 py-2 font-medium btn-base" disabled="">
                        <span className="inline-flex self-center flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="44" cy="176" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                <polyline points="200 40 240 80 200 120" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                <path d="M72,176h8a48,48,0,0,0,48-48h0a48,48,0,0,1,48-48h64" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            </svg>
                        </span>
                        <div>
                            Watch  
                        </div>
                    </button>
                    <button className="w-full rounded-full border border-action-dark bg-white text-gray-600 shadow-sm shadow-action-dark/20 hover:bg-action/25 disabled:border-input-border disabled:bg-white disabled:text-gray-500 active:shadow-none disabled:shadow-dark/10 px-2 py-2 font-medium btn-base" disabled="">
                        <span className="inline-flex self-center flex-shrink-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline points="86 58 128 16 170 58" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                <line x1="128" y1="128" x2="128" y2="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                <path d="M176,96h24a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H80" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                            </svg>
                        </span>
                        <div>
                            Share
                        </div>
                    </button>
                </div>
            </div>
            
            <Backtest_mini />
        </div>
    )
}

export default Editer;
