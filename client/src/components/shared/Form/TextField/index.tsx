import { FC, InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
}

const TextField: FC<TextFieldProps> = ({ error, ...rest }) => {
  return (
    <div className="mb-6">
      <input
        className="input w-full max-w-xs input-primary bg-gray-50 border-none"
        {...rest}
      />
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
};

export default TextField;
