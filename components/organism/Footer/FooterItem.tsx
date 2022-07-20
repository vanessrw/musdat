import Link from 'next/link';

interface FooterItemProps {
  title: string;
  link1: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
  link6?: string;
  destination1: string;
  destination2?: string;
  destination3?: string;
  destination4?: string;
  destination5?: string;
  destination6?: string;
  anchorTarget?: string;
}

export default function FooterItem(props: FooterItemProps) {
  const {
    title,
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    destination1,
    destination2 = '/#',
    destination3 = '/#',
    destination4 = '/#',
    destination5 = '/#',
    destination6 = '/#',
    anchorTarget = '_self',
  } = props;

  return (
    <div className="footer-info-item">
      <p>{title}</p>
      <Link href={destination1}>
        <a className="text-detail-link" target={anchorTarget}>
          {link1}
        </a>
      </Link>
      <Link href={destination2}>
        <a className="text-detail-link">{link2}</a>
      </Link>
      <Link href={destination3}>
        <a className="text-detail-link">{link3}</a>
      </Link>
      <Link href={destination4}>
        <a className="text-detail-link">{link4}</a>
      </Link>
      <Link href={destination5}>
        <a className="text-detail-link">{link5}</a>
      </Link>
      <Link href={destination6}>
        <a className="text-detail-link">{link6}</a>
      </Link>
    </div>
  );
}
