import Image from "next/image";
import pic from '@/app/assets/dessert-bg.jpeg'

const AlbumPage = () => {
    return (
        <div>
            <h2 className="text-center text-red-600 text-4xl font-bold mb-3">This is image component</h2>
            <Image src="https://i.ibb.co/mHD05Fq/c08484411.png" alt="laptop"  width={500} height={500}/>
            <Image src={pic} alt="laptop"  width={500} height={500}/>
        </div>
    );
};

export default AlbumPage;