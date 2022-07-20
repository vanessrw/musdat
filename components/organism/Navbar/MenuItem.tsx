import Link from 'next/link'

interface MenuItemProps {
    destination: string;
    link: string
}

export default function MenuItem(props: MenuItemProps) {
    const { destination, link } = props;

  return (
    <li className="menu-item">
      <Link href={link}>
        <a className="link text-detail">{destination}</a>
      </Link>
    </li>
  )
}
