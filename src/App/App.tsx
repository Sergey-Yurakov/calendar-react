import  {FC, useState} from 'react';

import { Calendar } from '../components';
import { formatDate } from '../utils/helpers/date';

import '../static/css/global.css';

export const App: FC = () => {
  const [selectedDate, setSelectedDay] = useState(new Date());

  return (
    <div className='app__container'>
      <div className='date__container'>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>

      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </div>
  );
};

export default App;
