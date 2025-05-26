import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    const size = styles?.size || "medium";
    const shape = styles?.shape || "rounded-md"

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    }

    return (
        <button className={`bg-blue-600 text-white font-medium ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}>
            {title}
        </button>
    )
}

export default Button