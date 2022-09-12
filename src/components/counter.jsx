const styles = {
  badge: {
    width: 90 + "px",
  },
  btn: {
    width: 45 + "px",
  },
};

const Counter = (props) => {
  const { value } = props;

  const formatValue = () => {
    return value <= 0 ? "empty" : value;
  };

  const getBadgeClasses = () => {
    const classes = "badge py-2 m-2";
    return `${classes} ${value <= 0 ? "bg-warning" : "bg-primary"}`;
  };

  return (
    <div className="d-flex m-2 align-items-center shadow-sm p-1 ps-3">
      <span className=" fs-3 w-50">{props.name}</span>
      <span className={getBadgeClasses()} style={styles.badge}>
        {formatValue()}
      </span>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
        style={styles.btn}
      >
        +
      </button>
      <button
        className="btn btn-dark btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
        style={styles.btn}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2 px-3"
        onClick={() => props.onDelete(props.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default Counter;
