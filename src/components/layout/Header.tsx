import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// ui
import BtnContact from '../ui/BtnContact';
import logo from '../../assets/logoOscar1.jpeg';

const classNames = (...classes: string[]) => {
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
        <Disclosure as="nav" className="relative w-full text-text-primary border-b border-slate-200/60"> 
                <div className="w-full sm:pr-2 lg:px-16">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo y nombre */}
                        <div className="flex gap-1 pl-2 w-full sm:items-stretch lg:pl-0">
                                <img
                                    className='rounded-lg size-9 h-8 w-auto' 
                                    src={logo}
                                    alt='logo' 
                                />
                                <span className='font-bold text-xl tracking-tight text-text-primary'>LineaSoftTech</span> 
                        </div>
                        <div className="sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-btn-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-btn-primary">
                            <span className="absolute -inset-0.5" />
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>                        
                        {/* Desktop Navigation */}
                        <div className="hidden sm:flex items-center justify-center md:w-full lg:justify-end">
                                <div className="flex space-x-3 lg:space-x-8">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                            item.current ? 'hover:text-btn-primary text-text-secondary transition-colors' : 'text-text-secondary hover:bg-dark-card hover:text-btn-primary transition-colors',
                                            'rounded-md py-2 md:text-sm lg:text-xl lg:px-2 font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                {/* Language Switcher - Desktop */}
                                <div className="flex ml-4">
                                    <BtnContact>
                                        Contactar
                                    </BtnContact>                                     
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
                            item.current ? 'flex justify-end text-text-secondary' : 'flex justify-end text-text-secondary hover:text-btn-primary',
                            'block rounded-md px-3 py-2 font-medium transition-colors',
                        )}
                        >
                        {item.name}
                        </DisclosureButton>
                    ))}
                        {/* Language Switcher - Mobile */}
                        <div className="flex gap-2 px-3 py-2 justify-end">
                            <BtnContact>
                                Contactar
                            </BtnContact>                            
                        </div>
                    </div>
                </DisclosurePanel>                                
        </Disclosure>
    );
};
export default Navbar; 