import { type ReactNode } from "react"

type ButtonProps = {
    type: 'primary' | 'secondary';
    content: string;
    children: ReactNode;
}

const Button = ({ type, content, children, ...props}: ButtonProps) => {
    return (
        <button className={type} {...props}>
            {content}
            {children}
        </button>
    )
}

export default Button