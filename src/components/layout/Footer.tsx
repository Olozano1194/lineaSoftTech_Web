// utils
import { scrollToSection } from '../../utils/scrollToSection';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import logo from '../../assets/logoOscar1.jpeg'

const Footer = () => {
    return (
        <footer className="w-full bg-bg-footer text-white pt-15 pb-10 px-3.5 md:px-5 lg:px-16">
            <section className="gap-12 grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4 lg:w-5xl lg:m-auto lg:pb-10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} className="font-bold text-3xl text-btn-primary rounded-lg" alt='LineaSoftTech logo'></img>
                        <span className="font-bold text-xl tracking-tight">LineaSoftTech</span>

                    </div>                    
                    <p className="leading-relaxed text-text-footer-primary text-sm">
                        Desarrollamos soluciones tecnológicas prácticas para emprendedores, pequeños negocios y proyectos en crecimiento.
                    </p>
                    {/* redes */}
                    <div className="flex gap-4">
                        <a href="www.linkedin.com/in/olozanobocanegra" target='_blanck' className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-primary transition-colors">
                           <FaLinkedin />
                        </a>
                        <a href="https://github.com/Olozano1194" target='_blanck' className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-primary transition-colors">
                           <FaGithub />
                        </a>
                        {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-primary transition-colors">
                            <FaInstagram />
                        </a> */}
                    </div>
                </div>
                {/* Services */}
                <div>
                    <h5 className="font-bold mb-6">Servicios</h5>
                    <ul className="flex flex-col items-start space-y-4 text-text-footer-primary text-sm">
                        <button className='cursor-pointer' onClick={() => scrollToSection('servicios')}>Software a Medida</button>
                        <button className='cursor-pointer' onClick={() => scrollToSection('servicios')}>Landing Pages</button>
                        <button className='cursor-pointer' onClick={() => scrollToSection('servicios')}>Automatización de Procesos</button>
                        <button className='cursor-pointer' onClick={() => scrollToSection('servicios')}>Optimización Web</button>
                        <button className='cursor-pointer' onClick={() => scrollToSection('servicios')}>Mantenimiento de Equipos</button>
                    </ul>
                </div> 
                {/* Company */}
                <div>
                    <h5 className="font-bold mb-6">Compañía</h5>
                    <ul className="space-y-4 text-text-footer-primary text-sm">
                        <li>Sobre nosotros</li>
                        <li>Cómo trabajamos</li>
                        <li>Portafolio</li>                        
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h5 className="font-bold mb-6">Contacto</h5>
                    <ul className="space-y-4 text-text-footer-primary text-sm">
                        <li className='flex gap-1 items-center'>
                            <MdEmail />contacto@lineasofttech.com
                        </li>
                        <li className='flex gap-1 items-center'>
                            <CiLocationOn />Purificación, Colombia
                        </li>                                                
                    </ul>
                </div>
            </section>
            <section className="pt-6 border-t border-white/10 flex flex-col justify-between items-center gap-6 text-xs text-text-footer-secondary font-medium md:flex-row lg:text-sm">
            <p>@ {new Date().getFullYear()} LineaSoftTech. Todos los derechos reservados.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-slate-300">Términos y Condiciones</a>
                <a href="#" className="hover:text-slate-300">Política de Privacidad</a>
                <a href="#" className="hover:text-slate-300">Cookies</a>
            </div>
            </section>
        </footer>
    );
};
export default Footer;