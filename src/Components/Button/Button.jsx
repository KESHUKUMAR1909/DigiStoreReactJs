function Button({ onClick, text, bgColor, padding, width, height , borderRadius }) {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: bgColor, padding, width, height , borderRadius  , border:"2px Solid pink" , cursor:"pointer"}}
        >
            {text}
        </button>
    );
}

export default Button;
