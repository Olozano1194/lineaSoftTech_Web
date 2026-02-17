import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logoOscar1.jpeg';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

const Navbar = () => {
    const navigation = [
        { name: 'Servicios', href: '#servicios', current: true},
        { name: 'Cómo trabajamos', href: '#comoTrabajamos', current: false},
        { name: 'Portafolio', href: '#portafolio', current: false },
        { name: 'FAQ', href: '#faq', current: false }        
    ]; 
    
    return (
        <Disclosure as="nav" className="relative w-full text-text-primary "> 
                <div className="w-full sm:pr-2 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo y nombre */}
                        <div className="flex sm:items-stretch justify-between w-full">
                            <div className="flex shrink-0 items-center">
                                <img
                                    className='logo rounded-lg size-9 h-8 w-auto' 
                                    src={logo}
                                    alt='logo' 
                                />
                                <span>LineaSoftTech</span>    
                            </div>
                        </div>
                        <div className="sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 dark:text-dark-text-primary hover:bg-dark-text-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-primary">
                            <span className="absolute -inset-0.5" />
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>                        
                        {/* Desktop Navigation */}
                        <div className="hidden sm:flex ml-auto justify-end">
                                <div className="flex space-x-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                            item.current ? 'hover:bg-text-primary text-bg-section dark:hover:bg-text-secondary' : 'text-bg-card hover:bg-dark-card hover:text-dark-text dark:hover:bg-text-secondary',
                                            'rounded-md py-2 md:text-sm lg:text-xl lg:px-2 font-medium linkNav',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                {/* Language Switcher - Desktop */}
                                <div className="flex gap-2 ml-4">
                                    <button>
                                        Contactar
                                    </button>                                    
                                </div>
                        </div>
                    </div>                    
                </div>
                {/* Mobile menu panel */}
                <DisclosurePanel className="sm:hidden absolute right-0 top-16 shadow-lg p-4">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'text-dark-text-primary dark:text-primary' : 'text-text-primary dark:text-dark-text-primary hover:text-primary',
                            'block rounded-md px-3 py-2 text-lg font-medium transition-colors',
                        )}
                        >
                        {item.name}
                        </DisclosureButton>
                    ))}
                        {/* Language Switcher - Mobile */}
                        <div className="flex gap-2 px-3 py-2">
                            <button>
                                Contactar
                            </button>                            
                        </div>
                    </div>
                </DisclosurePanel>
                {/* Dark/Light */}
                <button>
                                      
                </button>
        </Disclosure>
    );
};
export default Navbar;