import React from "react";
import { Text } from "./..";

export default function SginUpFlowDividers({ content = "", ...props }) {
  return (
    <div {...props}>
      <div className="h-[28px] w-full py-1 relative">
        <div className="justify-center h-px w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-50 absolute" />
        <Text
          as="p"
          className="flex justify-center items-center w-max h-[20px] left-0 bottom-0 right-0 top-0 px-2 py-px m-auto !text-blue_gray-500 text-center !font-normal bg-white-A700 absolute"
        >
          {content}
        </Text>
      </div>
    </div>
  );
}
