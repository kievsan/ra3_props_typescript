import Star from './Star'
import { StarProps } from '../../types'

import classes from './stars.module.css';


export default function Stars(props: StarProps): JSX.Element {
  const { count } = props;
  if (count < 0 || count > 5) return null;
  return (
    <ul className={`${classes["card-body-stars"]} ${classes["u-clearfix"]}`}>
      {Array(count).fill(0).map((_, idx) => (
          <li>
            <Star key={idx} />
          </li>
      ))}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}
