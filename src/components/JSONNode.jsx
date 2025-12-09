import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const JSONNode = ({ data, path = "", depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 2);
  const isObject = data !== null && typeof data === "object";

  if (isObject) {
    const items = Array.isArray(data) ? data.map((value, index) => [index, value]) : Object.entries(data);

    return (
      <div className="ml-2 sm:ml-4">
        <div className="flex items-center cursor-pointer hover:bg-gray-800/50 px-1 py-1 rounded" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronDown className="text-gray-400 w-4 h-4 flex-shrink-0" /> : <ChevronRight className="text-gray-400 w-4 h-4 flex-shrink-0" />}
          <span className="text-blue-400 font-medium ml-1 break-words">{path.split(".").pop() || "about me"}</span>
          <span className="text-gray-500 ml-1 text-sm flex-shrink-0">{Array.isArray(data) ? `[${data.length}]` : "{...}"}</span>
        </div>

        {isOpen && (
          <div className="border-l-2 border-gray-700 pl-2 ml-1 sm:ml-2">
            {items.map(([key, value], index) => (
              <JSONNode key={`${path}.${key}-${index}`} data={value} path={`${path}${path ? "." : ""}${key}`} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="ml-2 sm:ml-4 flex items-start hover:bg-gray-800/50 px-1 py-1 rounded break-words">
      <span className="text-blue-400 font-medium flex-shrink-0">{path.split(".").pop()}</span>
      <span className="ml-1 text-gray-400 flex-shrink-0">:</span>
      <span className={`ml-1 break-all ${typeof data === "string" ? "text-green-400" : typeof data === "number" ? "text-purple-400" : typeof data === "boolean" ? "text-red-400" : "text-gray-400"}`}>
        {data === null ? "null" : typeof data === "string" ? `"${data}"` : String(data)}
      </span>
    </div>
  );
};

export default JSONNode;
