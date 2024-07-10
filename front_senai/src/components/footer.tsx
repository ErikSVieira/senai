const Footer = () => {
    return ( 
        <div className="container max-w-senai-full flex flex-col items-center">
            <div className="container flex justify-center max-w-senai-full bg-white py-8">
                <img src="/public/images/image%201.png" alt="" />
            </div>

            <div className="flex justify-around w-full bg-senai-600">
                <div className="flex justify-start items-center text-white">
                    <p>Termos de Uso | Política de Privacidade</p>
                </div>
                <div className="bg-white ">
                    <img src="/public/images/senai_logo_foot.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;