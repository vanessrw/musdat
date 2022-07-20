import cx from "classnames";

interface SubHeaderProps {
    title: string;
    subtitle: string;
    center?: boolean;
    left?: boolean;
    right?: boolean;
    fade?: string
}

export default function SubHeader(props: SubHeaderProps) {
    const { subtitle, title, center, left, right, fade } = props;
    const classTitle = cx({
      'subheader': true,
      'center' : center,
      'left' : left,
      'right' : right,
  
    })

  return (
    <div className={classTitle}>
        <h3 data-aos={fade}>{subtitle}</h3>
        <h2 data-aos={fade}>{title}</h2>
    </div>
  )
}
