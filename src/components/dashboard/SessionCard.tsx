import React, { useState, useEffect, useRef } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
import { BsGraphUp } from "react-icons/bs";

export const SessionCard = (props: any) => {
  return (
    <div className="card w-64 p-4 bg-base-100 shadow-xl ml-4 hover:bg-slate-200">
      <div className="flex justify-between items-center">
        <h6
          className="text-base font-medium tooltip tooltip-bottom border-dotted border-b-2 border-grey-900"
          data-tip="Your online store's traffic volume, shown in a sessions."
        >
          {props.cardName}
        </h6>
        <ul className="menu lg:menu-horizontal !p-1 !border-hidden">
          <li>
            <details>
              <summary className="no-underline after:hidden">
                <MdModeEditOutline />
              </summary>
              <ul className="absolute z-[20] w-60">
                <li className="flex">
                  <a>
                    <BsGraphUp />
                    Average Order Value
                  </a>
                </li>
                <li>
                  <a>
                    <BsGraphUp />
                    Conversation rate
                  </a>
                </li>
                <li>
                  <a>
                    <BsGraphUp />
                    Gross sales
                  </a>
                </li>
                <li>
                  <a>
                    <BsGraphUp />
                    Net return value
                  </a>
                </li>
                <li>
                  <a>
                    <BsGraphUp />
                    Store search conversion
                  </a>
                </li>
                <li>
                  <a>
                    <BsGraphUp />
                    Return rate
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <h3 className="text-lg mr-2 font-bold">25,156</h3>
        <TiArrowSortedUp />
        <h4>8%</h4>
      </div>
    </div>
  );
};
