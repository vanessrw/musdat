import Link from 'next/link';

interface ButtonProps {
  text: string;
  destination: string;
  fade?: string;
  anchorTarget?: string;
}

export default function Button(props: ButtonProps) {
  const {text, destination, fade, anchorTarget = '_self'} = props;

  return (
    <Link href={destination} passHref>
      {/* <div className="button primary" tabIndex={0} data-aos={fade}> */}
      <a
        className="button button-text primary text-detail tabIndex={0} data-aos={fade}"
        target={anchorTarget}
      >
        {text}
      </a>
      {/* </div> */}
    </Link>
  );
}
