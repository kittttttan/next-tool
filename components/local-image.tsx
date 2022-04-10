import Image, { ImageProps } from 'next/image'

const loader = ({src}: {src: string}) => {
    return `${src}`;
}
  
export default function LocalImage(props: ImageProps) {
    return (
        <Image loader={loader} {...props} />
    )
}  