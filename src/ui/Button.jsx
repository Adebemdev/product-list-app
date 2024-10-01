function Button({ children, onClick, type }) {
  const base =
    'absolute border-2 bg-rose50 flex items-center gap-2 hover:text-red border-rose400 hover:shadow-lg w-48 top-2/3 left-1/2  px-8 py-4 transform -translate-x-1/2 -translate-y-1/2 flex items-center rounded-full desktop:top-2/3';
  const styles = {
    primary: base + '',
    secondary:
      'absolute border-2 bg-red border-rose400 hover:shadow-lg text-rose900 w-48 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between gap-2 px-8 py-4 rounded-full desktop:top-2/3',
    tertiary:
      'bg-red border-rose400 hover:shadow-lg px-2 py-2 w-full text-rose50 capitalize rounded-full',
    subTertiary:
      'bg-rose100 w-full flex items-center justify-center px-4 py-2 hover:shadow-lg rounded-md desktop:px-4 desktop:py-2 desktop:gap-2 text-rose500',
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
