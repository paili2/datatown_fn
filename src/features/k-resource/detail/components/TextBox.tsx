import Badge from "@/shared/ui/badge/Badge";

type TextBoxProps ={
    badge?: string,
    text?:string
}

const TextBox = ({badge,text}:TextBoxProps) => {
    return (
            <div className="w-full h-[200px] flex flex-col bg-gray-200 font-bold p-5 relative">
                <strong>{text}</strong>
                <div className="absolute top-5 right-5">{ badge? <Badge>{badge}</Badge>:null}</div>
            </div>
                    );
}
 
export default TextBox;