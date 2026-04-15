export default function SearchDropdown({
  filteredList,
  setCurGuess,
}: {
  filteredList: Array<any>;
  setCurGuess: any;
}) {
  return (
    <div className="bg-white w-60 overflow-scroll max-h-20">
      <ul className="list-group">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <li
              className="text-left px-1 border-gray-200 border-1 py-2 cursor-pointer hover:bg-gray-100"
              key={index}
              onClick={() => setCurGuess(item.name.common)}
            >
              {item.name.common}
            </li>
          ))
        ) : (
          <li className="text-left px-1 border-gray-200 border-1 py-2 cursor-pointer hover:bg-gray-100">
            no results found
          </li>
        )}
      </ul>
    </div>
  );
}
