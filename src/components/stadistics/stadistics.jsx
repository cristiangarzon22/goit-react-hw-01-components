import React from "react";
const Stadistics = ({stats,title}) => {
 return(
 <>
 <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
   {stats.map((e) => (
    <><li key={e.id} className="item">
           <span className="label">{e.label}</span>
           <span className="percentage">`${e.percentage}%`</span>
       </li><li key={e.id} className="item">
               <span className="label">{e.label}</span>
               <span className="percentage">`${e.percentage}%`</span>
           </li><li key={e.id} className="item">
               <span className="label">{e.label}</span>
               <span className="percentage">`${e.percentage}%`</span>
           </li><li key={e.id} className="item">
               <span className="label">{e.label}</span>
               <span className="percentage">`${e.percentage}%`</span>
           </li></>
    ))}
  </ul>
 </section>
</>
);
};
export default Stadistics;