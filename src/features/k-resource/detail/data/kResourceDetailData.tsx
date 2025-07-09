import Badge from "@/shared/ui/badge/Badge";
import { CheckCircle } from "lucide-react";
import { DetailRowProps } from "../types";


export const tagData = ["아티스트","라이즈"];


export const detailRowData: DetailRowProps[]= [
    {label:"유형", value:"아티스트"},
    {label:"상태", value:<Badge startIcon={<CheckCircle size={14} />} color="success">섭외가능</Badge>},
    {label:"소유 파트너", value:"SM 엔터테인먼트"}
]


