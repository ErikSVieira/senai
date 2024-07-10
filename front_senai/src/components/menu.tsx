import Button from "./button";

const Menu = () => {

    const handlesClick = () => {
        alert('ok');
    }

    return (
        <div className="container bg-white max-w-senai-full h-[68px] flex items-center justify-center">
            <div className="flex gap-10">
                <Button
                    text="Sobre o Projeto"
                    onClick={handlesClick}
                />
                <Button
                    text="Painel BI"
                    onClick={handlesClick}
                />
                <Button
                    text="Fazer logoff"
                    onClick={handlesClick}
                />
            </div>
        </div>
    );
}

export default Menu;