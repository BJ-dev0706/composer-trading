import Draggable from 'react-draggable';
import { useState } from 'react';

const ControlledDraggableBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div className="w-[248px] border border-panel-border bg-[#f3f4f5] rounded-md shadow-sm z-10 relative" data-projection-id="50">
        <div className="px-2 py-1.5 rounded-t-md text-xs text-dark-soft tracking-wide bg-[#dadde0] shadow-inner flex items-center border-b border-divider-light cursor-grab active:cursor-grabbing select-none">
            <span className="cursor-pointer mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline points="208 96 128 176 48 96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
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
                <div className="mt-2"><button type="button" className="w-full button btn-base-js gap-x-1.5 transition bg-action border border-action-dark text-white shadow-sm shadow-action-dark/20 disabled:bg-action/75 disabled:shadow-dark/10 hover:border-action-dark hover:bg-action-dark active:shadow-none justify-center text-xs px-2 py-1.5 rounded"
                        disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="inline-flex items-center shrink-0"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>New Investment</button></div>
            </div>
        </div>
    </div>
    </Draggable>
  );
};


const Editer = () => {
    return(
        <div className="editor-wrapper">
            <div id="sidebar" className="w-[248px] panel space-y-4 isolate">
                <div className="border border-panel-border rounded-md shadow-sm bg-[#f3f4f5] pt-4 pb-5 px-4 space-y-3 hidden">
                    <div className="flex rounded shadow-sm border select-none border-dark"><button className="flex flex-grow items-center rounded-l-sm font-light space-x-1.5 py-2.5 px-2 leading-none transition focus:outline-none bg-action hover:bg-action-dark text-white shadow-inner-soft"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg><span>Save changes</span></button>
                        <button type="button" id="radix-:rao:" aria-haspopup="menu" data-state="closed" className="w-8 flex flex-shrink-0 items-center justify-center rounded-r-sm border-l transition focus:outline-none border-dark bg-action-dark text-white shadow-inner-soft"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" className="opacity-100"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></button>
                    </div>
                    <div className="rounded flex border border-asset-border shadow-sm bg-[#f3f4f5] divide-x divide-solid divide-asset-border"><button className="w-full text-sm font-light flex items-center justify-center py-2 shadow-inner transition focus:outline-none leading-none select-none rounded-tl rounded-bl text-dark bg-white hover:bg-tab-light"><span className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="79.8 99.7 31.8 99.7 31.8 51.7" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg><span>Undo</span></span></button>
                        <button className="w-full text-sm font-light flex items-center justify-center py-2 shadow-inner transition focus:outline-none leading-none select-none rounded-tr rounded-br text-dark-soft bg-background" disabled=""><span className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="176.2 99.7 224.2 99.7 224.2 51.7" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg><span>Redo</span></span>
                            </button>
                    </div>
                </div>
                <div className="w-[248px] border border-panel-border bg-[#f3f4f5] rounded-md shadow-sm z-10 relative" data-projection-id="50">
                    <div className="px-2 py-1.5 rounded-t-md text-xs text-dark-soft tracking-wide bg-[#dadde0] shadow-inner flex items-center border-b border-divider-light cursor-grab active:cursor-grabbing select-none"><span className="cursor-pointer mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline></svg></span>
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
                            <div className="mt-2"><button type="button" className="w-full button btn-base-js gap-x-1.5 transition bg-action border border-action-dark text-white shadow-sm shadow-action-dark/20 disabled:bg-action/75 disabled:shadow-dark/10 hover:border-action-dark hover:bg-action-dark active:shadow-none justify-center text-xs px-2 py-1.5 rounded"
                                    disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="inline-flex items-center shrink-0"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>New Investment</button></div>
                        </div>
                    </div>
                </div>
                <div className="settings-panel border border-panel-border rounded-md shadow-sm bg-[#f3f4f5] p-4 items-center justify-center text-xs space-x-3 shrink-0 hidden"><button className="w-full rounded-full border border-action-dark bg-white text-action-dark shadow-sm shadow-action-dark/20 hover:bg-action/25 disabled:border-input-border disabled:bg-white disabled:text-gray-500 active:shadow-none disabled:shadow-dark/10 px-2 py-2 font-medium btn-base"
                        disabled=""><span className="inline-flex self-center flex-shrink-0 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="44" cy="176" r="28" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><polyline points="200 40 240 80 200 120" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M72,176h8a48,48,0,0,0,48-48h0a48,48,0,0,1,48-48h64" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg></span>Watch</button>
                    <button className="w-full rounded-full border border-action-dark bg-white text-action-dark shadow-sm shadow-action-dark/20 hover:bg-action/25 disabled:border-input-border disabled:bg-white disabled:text-gray-500 active:shadow-none disabled:shadow-dark/10 px-2 py-2 font-medium btn-base"
                        disabled=""><span className="inline-flex self-center flex-shrink-0 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="86 58 128 16 170 58" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="128" y1="128" x2="128" y2="16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M176,96h24a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H80" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg></span>Share</button>
                </div>

                <ControlledDraggableBox />
            </div>
            <div id="editor" className="editor-nodes flex flex-wrap justify-center w-full max-w-min md:max-w-xl xl:max-w-screen-lg scroll-mt-24">
                <div className="symphony-editor w-full px-3">
                    <div className="parent blk blk--subsym rounded-md border group">
                        <div className="inner text-md pl-2 pr-4 py-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center ">
                                    <div className="flex gap-x-1 mr-2">
                                        <button className="w-4 focus-states shrink-0 transition duration-200 ease-out " aria-label="Toggle block">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 9.62037L11.024 6.59561C11.1313 6.4884 11.2767 6.42817 11.4283 6.42817C11.5799 6.42817 11.7253 6.4884 11.8326 6.59561C11.9398 6.70283 12 6.84824 12 6.99987C12 7.15149 11.9398 7.29691 11.8326 7.40412L8.40425 10.8324C8.35119 10.8855 8.28817 10.9277 8.21881 10.9564C8.14944 10.9852 8.07509 11 8 11C7.92491 11 7.85056 10.9852 7.78119 10.9564C7.71183 10.9277 7.64881 10.8855 7.59575 10.8324L4.16745 7.40412C4.06023 7.29691 4 7.15149 4 6.99987C4 6.84824 4.06023 6.70283 4.16745 6.59561C4.27466 6.4884 4.42008 6.42817 4.5717 6.42817C4.72333 6.42817 4.86874 6.4884 4.97596 6.59561L8 9.62037Z" fill="#fff"></path>
                                            </svg>
                                        </button>
                                        <button className="w-4 focus-states shrink-0 transition duration-200 ease-out  " aria-label="Toggle all blocks">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.64622 12.3534C4.59973 12.3069 4.56285 12.2518 4.53769 12.1911C4.51252 12.1304 4.49957 12.0653 4.49957 11.9996C4.49957 11.9339 4.51252 11.8688 4.53769 11.8081C4.56285 11.7474 4.59973 11.6923 4.64622 11.6459L7.64622 8.64586C7.69265 8.59937 7.7478 8.56249 7.8085 8.53733C7.8692 8.51216 7.93426 8.49921 7.99997 8.49921C8.06567 8.49921 8.13074 8.51216 8.19144 8.53733C8.25214 8.56249 8.30728 8.59937 8.35372 8.64586L11.3537 11.6459C11.4475 11.7397 11.5002 11.8669 11.5002 11.9996C11.5002 12.1323 11.4475 12.2595 11.3537 12.3534C11.2599 12.4472 11.1326 12.4999 11 12.4999C10.8673 12.4999 10.74 12.4472 10.6462 12.3534L7.99997 9.70648L5.35372 12.3534C5.30728 12.3998 5.25213 12.4367 5.19144 12.4619C5.13074 12.487 5.06567 12.5 4.99997 12.5C4.93426 12.5 4.86919 12.487 4.8085 12.4619C4.7478 12.4367 4.69265 12.3998 4.64622 12.3534Z" fill="#fff"></path>
                                                <path d="M7.99997 6.29273L10.6462 3.64586C10.74 3.55204 10.8673 3.49933 11 3.49933C11.1326 3.49933 11.2599 3.55204 11.3537 3.64586C11.4475 3.73968 11.5002 3.86692 11.5002 3.99961C11.5002 4.13229 11.4475 4.25954 11.3537 4.35336L8.35372 7.35336C8.30728 7.39984 8.25214 7.43672 8.19144 7.46189C8.13074 7.48705 8.06567 7.5 7.99997 7.5C7.93426 7.5 7.86919 7.48705 7.8085 7.46189C7.7478 7.43672 7.69265 7.39984 7.64622 7.35336L4.64622 4.35336C4.5524 4.25954 4.49969 4.13229 4.49969 3.99961C4.49969 3.86692 4.5524 3.73968 4.64622 3.64586C4.74004 3.55204 4.86728 3.49933 4.99997 3.49933C5.13265 3.49933 5.2599 3.55204 5.35372 3.64586L7.99997 6.29273Z" fill="#fff"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="w-6 h-6 mr-2 rounded bg-base flex items-center justify-center bg-background text-block-icon shrink-0">
                                        <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#fff">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.81111 1.17608C7.92787 1.10797 8.07225 1.10797 8.18901 1.17608L14.189 4.67608C14.3042 4.74329 14.3751 4.86662 14.3751 5C14.3751 5.13338 14.3042 5.25671 14.189 5.32392L8.18901 8.82392C8.07225 8.89203 7.92787 8.89203 7.81111 8.82392L1.81111 5.32392C1.6959 5.25671 1.62506 5.13338 1.62506 5C1.62506 4.86662 1.6959 4.74329 1.81111 4.67608L7.81111 1.17608ZM2.7443 5L8.00006 8.06586L13.2558 5L8.00006 1.93414L2.7443 5ZM1.67614 7.81105C1.7805 7.63215 2.01012 7.57173 2.18901 7.67608L8.00006 11.0659L13.8111 7.67608C13.99 7.57173 14.2196 7.63215 14.324 7.81105C14.4283 7.98994 14.3679 8.21956 14.189 8.32392L8.18901 11.8239C8.07225 11.892 7.92787 11.892 7.81111 11.8239L1.81111 8.32392C1.63221 8.21956 1.57179 7.98994 1.67614 7.81105ZM1.67614 10.811C1.7805 10.6322 2.01012 10.5717 2.18901 10.6761L8.00006 14.0659L13.8111 10.6761C13.99 10.5717 14.2196 10.6322 14.324 10.811C14.4283 10.9899 14.3679 11.2196 14.189 11.3239L8.18901 14.8239C8.07225 14.892 7.92787 14.892 7.81111 14.8239L1.81111 11.3239C1.63221 11.2196 1.57179 10.9899 1.67614 10.811Z" fill="#fff"></path>
                                        </svg>
                                    </div>
                                    <div className="w-auto flex items-center group">
                                        <div type="text" className="cursor-default flex-1 mr-2 border border-transparent transition active:border-dark focus:border-dark outline-none rounded px-0.5 hover:border-input-border flex flex-wrap" value="New Symphony" placeholder="Symphony Name"><span className="max-w-[250px] xl:max-w-xl truncate">New Symphony</span></div>
                                    </div>
                                    <div className="shrink-0 w-[48px]"></div>
                                </div>
                                <div className="ml-2">
                                    <button className="w-[119px] h-6 px-2 ml-auto flex items-center justify-center gap-1 text-xs border rounded-full cursor-pointer whitespace-nowrap shadow-sm transition text-action-dark border-action-dark hover:bg-action/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" viewBox="0 0 256 256">
                                            <rect width="256" height="256" fill="none"></rect>
                                            <path d="M138.7,175.5l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2a8,8,0,0,1,0,15l-52.1,19.2A8.1,8.1,0,0,0,138.7,175.5Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                            <line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                            <line x1="200" y1="40" x2="152" y2="40" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                            <line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                            <line x1="240" y1="88" x2="208" y2="88" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        </svg>
                                        <span>Create with AI</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="start">
                        <li>
                            <div className="group blk blk--function function--wt flex items-center function--wt-dynamic ">
                                <div className="inner relative flex items-center function py-1 pl-2 pr-3 mr-1 rounded-full border text-xs transition function--wt">
                                    <div className="flex gap-x-1 mr-2"><button className="w-4 focus-states shrink-0 transition duration-200 ease-out " aria-label="Toggle block"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.62037L11.024 6.59561C11.1313 6.4884 11.2767 6.42817 11.4283 6.42817C11.5799 6.42817 11.7253 6.4884 11.8326 6.59561C11.9398 6.70283 12 6.84824 12 6.99987C12 7.15149 11.9398 7.29691 11.8326 7.40412L8.40425 10.8324C8.35119 10.8855 8.28817 10.9277 8.21881 10.9564C8.14944 10.9852 8.07509 11 8 11C7.92491 11 7.85056 10.9852 7.78119 10.9564C7.71183 10.9277 7.64881 10.8855 7.59575 10.8324L4.16745 7.40412C4.06023 7.29691 4 7.15149 4 6.99987C4 6.84824 4.06023 6.70283 4.16745 6.59561C4.27466 6.4884 4.42008 6.42817 4.5717 6.42817C4.72333 6.42817 4.86874 6.4884 4.97596 6.59561L8 9.62037Z" fill="#fff"></path></svg></button></div>
                                    <button className="title focus-states rounded"><span className="keyword font-semibold uppercase tracking-wider cursor-default select-none">Weight </span><span className="value cursor-default select-none font-normal tracking-normal">Equal</span></button>
                                </div>
                                <div className="shrink-0 w-[48px]"></div>
                            </div>
                            <ul className="child">
                                <li>
                                    <div className="blk blk--asset blk--placeholder group flex items-center pl-2 5 pr-3 py-3 rounded-md border text-md border-incomplete-block-border"><button className="flex items-center space-x-2 focus-states overflow-hidden"><div className="ml-0.5 flex items-center justify-center rounded-full bg-action-secondary border border-dark-soft shadow-inner-drop text-dark w-5 h-5 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256" className="transition duration-200 hover:rotate-90"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg></div><div className="text-dark-soft w-full pr-1 truncate"><span className="text-dark">Add a Block </span>Assets, Weights, Conditions...</div></button></div>
                                </li>
                                <li>
                                    <div className="blk blk--function add-wt flex items-center"><button className="flex items-center justify-center inner function function--wt-sub w-6 h-6 rounded-full border hover:bg-action-secondary hover:shadow-inner-drop hover:border-dark-soft transition duration-300 group focus-states"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 256 256" className="transition duration-200 group-hover:rotate-90 group-hover:text-dark"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg></button></div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Editer;
