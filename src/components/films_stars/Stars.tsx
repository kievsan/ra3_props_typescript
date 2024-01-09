import Star from './Star'
import { StarProps } from '../../types'

import classes from './stars.module.css';


function Stars(props: StarProps) {
  const { count } = props;
  return (validatedStars(count) === 0) ? ( <></> ) : (
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

function validatedStars(count: number): number {
  return count > 0 && count < 6 && count % 1 === 0 ? count : 0
}

/* Stars.propTypes = {
  count: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
} */

export default Stars;
