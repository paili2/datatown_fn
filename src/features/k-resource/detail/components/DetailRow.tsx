import { DetailRowProps } from "../types";


const DetailRow = ({label,value}:DetailRowProps) => {
    return (
    <div className="grid grid-cols-2 justify-between place-items-start">
        <span>{label}</span>
        <span>{value}</span>
    </div>
    );
}
 
export default DetailRow;