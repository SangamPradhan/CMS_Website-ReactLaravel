import Logo from "../../assets/website/Vector.svg";

export default function ApplicationLogo(props) {
    return (
        <img src={Logo} style={
            {
                width: 'auto',
                height: 'auto',
                maxHeight: '4rem',
                maxWidth: '4rem',
            }
        } alt="MT Fuji Logo" {...props} />
    );
}
