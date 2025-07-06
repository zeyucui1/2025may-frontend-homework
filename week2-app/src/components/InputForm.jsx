const InputForm = ({
  id,
  label,
  type,
  placeholder = '',
  rightLabel,
  rightLabelHref = '#',
  onChange,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
      >
        <span>{label}</span>
        {rightLabel && (
          <a
            href={rightLabelHref}
            className="text-sm text-blue-500 dark:text-blue-400 hover:underline transition-colors duration-300"
          >
            {rightLabel}
          </a>
        )}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 !text-gray-900 dark:!text-gray-100 !bg-white dark:!bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 ${
            type === 'password' ? 'pr-10' : ''
          } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300`}
          onChange={onChange}
          value={value}
          style={{
            color: 'var(--text-color)',
            backgroundColor: 'var(--bg-color)',
          }}
        />
      </div>
    </div>
  )
}

export default InputForm
