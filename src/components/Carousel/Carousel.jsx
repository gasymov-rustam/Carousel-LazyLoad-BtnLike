import React from 'react';

const Carousel = ({ children = [], delay = 1000 }) => {
  const [count, setCount] = React.useState(0);
  // const children = useMemo(() => children || ["one", "two", "three", "four"], [children]);
  // const sides = ["previous", "next"];
  // const ms = delay || 1000;

  React.useEffect(() => {
    let timer = null;
    if (children?.length) {
      timer = setTimeout(() => {
        if (count === children?.length - 1) setCount(0);
        else setCount((prev) => prev + 1);
      }, delay);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [count, children]);
  // }, []);

  const increment = () => {
    if (children.length > 0) {
      if (count === children.length - 1) setCount(0);
      else setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (children.length > 0) {
      if (count === 0) setCount(children.length - 1);
      else setCount((prev) => prev - 1);
    }
  };

  if (!children?.length > 0 && !delay) {
    return <></>;
  }

  return (
    <div className="carousel">
      <div className='current'>{children[count]}</div>
      {children?.length > 1 && <div className="buttons">
        <button className="button-previous" onClick={decrement}>
          previous
        </button>
        <button className="button-next" onClick={increment}>
          next
        </button>
      </div>}
    </div>
  );
};

export default Carousel;
