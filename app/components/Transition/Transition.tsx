import React, { useEffect, useState } from "react";
import Styles from "./styles.css"
const AnimatedTransition = (props:any) => {
  const [shouldRender, setRender] = useState(props.show);

  useEffect(() => {
    if (props.show) setRender(true);
  }, [props.show]);

  const onAnimationEnd = () => {
    if (!props.show) {
    setRender(false);
    if(props.onComplete)props.onComplete()
  }
  };

  return (
    shouldRender && (
      <div
        className={Styles.animatedTransition}
        style={{ animation: `${props.show ? Styles.fadeIn : Styles.fadeOut} 500ms` }}
        onAnimationEnd={()=>onAnimationEnd()}
        onClick= {props.onClick}
      >
        {props.children}
      </div>
    )
  );
};

export default AnimatedTransition;
