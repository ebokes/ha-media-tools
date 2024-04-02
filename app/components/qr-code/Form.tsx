import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  url: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ onSubmit, url, onChange }: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center"
    >
      <input
        type="text"
        value={url}
        onChange={onChange}
        placeholder="e.g. www.google.com"
        className="border border-gray-300 px-4 py-2 w-full mb-8 mx-0 text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 text-sm sm:text-xl rounded"
      >
        Generate QR Code
      </button>
    </form>
  );
};

export default Form;
