const BtnContact = ({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className='bg-btn-primary cursor-pointer font-medium px-5 py-2 rounded-lg text-white transition-transform hover:scale-105 hover:bg-primary/90 hover:text-white' {...props}>
            {children}
        </button>
    );};
export default BtnContact;