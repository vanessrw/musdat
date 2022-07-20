import Image from 'next/image';

interface BenefitCardProps {
    title: string;
    description: string;
    iconPath: string;
}

export default function BenefitCard(props: BenefitCardProps) {
    const { title, description, iconPath } = props;
  return (
    <div className="benefit-card" data-aos="fade-down">
        <Image src={iconPath} alt="benefit icon" width={74} height={74}></Image>
        <span className='text h3'>{title}</span>
        <p>{description}</p>
    </div>
    )
}
