import starLogo from '../assets/star.svg'

type Props = {
  key: number,
}
const Star = ({key}: Props): React.JSX.Element => {
  return <li key={key}><img src={starLogo} alt='starSvg'/></li>
}

export default Star