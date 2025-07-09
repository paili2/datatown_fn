import { detailRowData } from "../data/kResourceDetailData";
import DetailRow from "./DetailRow";

const DetailSection = () => {
    return (
        <div className="flex flex-col gap-3">
            {detailRowData.map((data,index)=><DetailRow key={index} label={data.label} value={data.value}></DetailRow>)}
        </div>
            );
}
 
export default DetailSection;