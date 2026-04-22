export default function PasswordFormInput({
  errors,
  value,
  setValue,
}: {
  errors: string[];
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div className="w-2/10">
      <input
        type="password"
        placeholder="enter your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-fit mt-4 w-full px-2 py-1 border-1 border-black"
      />
      {errors.length > 0 && (
        <div className="text-left mx-auto text-sm">
          <p>password must:</p>
          <ul>
            {errors.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
