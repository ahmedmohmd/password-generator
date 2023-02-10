interface Props {
  label: string;
  handleCheck?: () => void;
  value: boolean;
}

const Checkbox = ({ label, handleCheck, value }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id="checkbox"
        type="checkbox"
        checked={value}
        onChange={handleCheck}
        className="w-4 h-4 text-[#a4ffaf] bg-red-500 border-[3px] p-3  border-[#9c9ba3]"
      />
      <label
        htmlFor="checkbox"
        className="ml-6 text-lg font-medium text-light-gray dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
