import Star from './Star'

type Props = {
  count: 0 | 1 | 2 | 3 | 4 | 5,
}

const Stars = ({count = 0}: Props): React.JSX.Element | null => {
  if (count > 0 && count < 6) {
    const starArray = [];
    for (let index = 0; index < count; index++) {
      starArray.push(<Star key={index}/>);    
    }

    return <ul className='card-body-stars'>{starArray}</ul>
  } 
  return null;

  // React.JSX.Element | null >> Компонент возвращает либо одно, либо другое
}

export default Stars