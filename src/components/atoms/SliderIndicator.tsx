
interface SliderIndicatorProps {
    index: number;
    activeSlide: number | boolean;
}
function SliderIndicator({ index, activeSlide }: SliderIndicatorProps) {
    return (
        <div
            key={index}
            className = {`${index === activeSlide ? 'bg-primary hover:bg-primary' : 'hover:bg-white '} indicator cursor-pointer ml-[10px] p-[5px] border-white border-[1px]`}>
        </div>
    )
}

export default SliderIndicator
