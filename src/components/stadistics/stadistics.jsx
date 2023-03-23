import React from "react";
import css from "./Statistic.module.css";
import PropTypes from "prop-types";
const Stadistics = ({stats,title}) => {
 return(
 <>
 <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}  

  <ul className={css.statList}>
   {stats.map((e) => (
    <><li key={e.id} className={css.item}>
           <span className={css.label}>{e.label}</span>
           <span className={css.percentage}>{e.percentage}%</span>
       </li><li key={e.id} className={css.item}>
               <span className={css.label}>{e.label}</span>
               <span className={css.percentage}>{e.percentage}%</span>
           </li><li key={e.id} className={css.item}>
               <span className={css.label}>{e.label}</span>
               <span className={css.percentage}>{e.percentage}%</span>
           </li><li key={e.id} className={css.item}>
               <span className={css.label}>{e.label}</span>
               <span className={css.percentage}>{e.percentage}%</span>
           </li></>
    ))}
  </ul>
 </section>
</>
);
};
Stadistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
export default Stadistics;