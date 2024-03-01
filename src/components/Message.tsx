function Message({ message, className }) {
  return (
    <span
      className={`font-bold text-xl border-b-2 border-b-emerald-300 pb-1 ${className}`}
    >
      {message}
    </span>
  );
}

export default Message;
