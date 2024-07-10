interface ButtonProps {
    text: string;
    onClick: () => void;
  }

const Button = ({text, onClick}: ButtonProps) => {
    return ( 
        <div className="bg-white px-4 pt-[6px] h-9 rounded-[24px] shadow-lg">
            <button className="flex items-center justify-center" onClick={onClick}>
                {text}
            </button>
        </div>
     );
}
 
export default Button;