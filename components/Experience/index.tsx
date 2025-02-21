"use client";

import { Disclosure } from "@headlessui/react";

const Experience = () => {
  return (
    <div className="w-full p-5 border-2 border-gray-800 rounded-lg">
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button className="w-full p-4 text-left text-white rounded-md">
              {open ? "Minimise experience" : "Experience"}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-white">
              <ul>
                <li>
                  <span>Ministry of Programming</span>
                  <span>2022 - Present</span>
                </li>
                <li>
                  <span>Authority Partners</span>
                  <span>2021 - 2022</span>
                </li>
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button className="w-full p-4 text-left text-white rounded-md">
              {open ? "Minimise education" : "Education"}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-white">
              <ul>
                <li className="flex gap-2">
                  <span>International Burch Univerisity (Master degree)</span>
                  <span>2020 - 2023</span>
                </li>
                <li className="flex gap-2">
                  <span>
                    Faculty of information technologies (Bachelor degree)
                  </span>
                  <span>2017 - 2020</span>
                </li>
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Experience;
