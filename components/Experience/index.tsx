const Experience = () => {
  return (
    <div className="w-full p-5 border-2 border-gray-800 rounded-lg flex flex-col justify-between gap-2">
      <div>
        <div className="w-full p-2 text-left text-white rounded-md border-2 border-gray-800">
          Experience
        </div>
        <ul className="p-4 text-white">
          <li className="flex gap-2 flex-col md:flex-row">
            <span className="font-semibold">Ministry of Programming</span>
            <span>2022 - Present</span>
          </li>
          <li className="flex gap-2 flex-col md:flex-row">
            <span className="font-semibold">Authority Partners</span>
            <span>2021 - 2022</span>
          </li>
        </ul>
      </div>

      <div>
        <div className="w-full p-2 text-left text-white rounded-md border-2 border-gray-800">
          Education
        </div>
        <ul className="p-4 text-white">
          <li className="flex gap-2 flex-col md:flex-row">
            <span className="font-semibold">
              International Burch Univerisity (Master degree)
            </span>
            <span>2020 - 2023</span>
          </li>
          <li className="flex gap-2 flex-col md:flex-row">
            <span className="font-semibold">
              Faculty of information technologies (Bachelor degree)
            </span>
            <span>2017 - 2020</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
