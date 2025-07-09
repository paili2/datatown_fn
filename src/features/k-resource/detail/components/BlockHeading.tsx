type BlockHeadingProps = {
    title:string
}

const BlockHeading = ({title}:BlockHeadingProps) => {
    return <h3 className="font-bold text-lg">{title}</h3>;
}
 
export default BlockHeading;