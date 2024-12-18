import Logo from "../../assets/website/Vector.svg";

export default function ApplicationLogo(props) {
    return (
        <>
            <div className="flex justify-between items-center space-x-4">
                <img src={Logo} style={
                    {
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '4rem',
                        maxWidth: '4rem',
                    }
                } alt="MT Fuji Logo" {...props} />
                <span className="mr-2 pl-0 font-semibold text-2xl sm:text-3xl"> {/* Added padding */}
                    AI Solution
                </span>
            </div>
        </>
    );
}
