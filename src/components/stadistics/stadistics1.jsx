import {Stadistics} from 'components/stadistics/stadistics';
import data from './data.json';

export const STadistics = () => {
return(
<>
<Stadistics title="Upload stats" stats={data} />
<Stadistics stats={data} />
</>
);
};