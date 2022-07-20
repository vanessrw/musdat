import cx from 'classnames';

interface EventTitleProps {
    line1:  string;
    line2?: string;
    line3?: string;
    right?: boolean;
}

export default function EventTitle(props: EventTitleProps) {
    const { line1, line2, line3, right } = props
    const classTitle = cx({
        "event-title-image": true,
        "right": right,
        "left": !right
    })
    const wrapperClassTitle = cx({
        "event-title-wrapper": true,
        "wrapper": true,
        "right": right,
        "left": !right
    })

  return (
    <div className="event-title-container">
        <div className={wrapperClassTitle}>
            <div className="text-wrapper">
                <span className="h2">{line1}<br />{line2}<br />{line3}</span>
            </div>
        </div>
        <div className={classTitle}></div>
    </div>
  )
}
