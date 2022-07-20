import cx from 'classnames';

import Button from 'components/atoms/Button';
import SubHeader from 'components/atoms/SubHeader';
import {url} from 'inspector';

interface EventProps {
  left?: boolean;
  right?: boolean;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonDestination: string;
  illustrationPath: string;
  anchorTarget?: string;
}

export default function Event(props: EventProps) {
  const {
    left,
    right,
    title,
    subtitle,
    description,
    buttonText,
    buttonDestination,
    illustrationPath,
    anchorTarget = '_self',
  } = props;
  const classTitle = cx({
    'event-wrapper': true,
    'wrapper': true,
    'right': right,
  });

  return (
    <section className="event">
      <div className={classTitle}>
        <div
          className="event-illustration"
          data-aos="fade-down"
          style={{backgroundImage: `url(${illustrationPath})`}}
        ></div>
        <div className="event-content">
          <div className="content">
            <h2 data-aos="fade-down">{title}</h2>
            <h3 data-aos="fade-down">{subtitle}</h3>
            <p data-aos="fade-down">{description}</p>
          </div>
          <Button
            text={buttonText}
            destination={buttonDestination}
            fade="fade-down"
            anchorTarget={anchorTarget}
          />
        </div>
      </div>
    </section>
  );
}
