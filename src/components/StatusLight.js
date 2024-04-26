//import { defaultTheme, Provider, StatusLight } from "@adobe/react-spectrum";

const StatusLightComponent = ({ statusService }) => {
  const activeStatus = statusService !== "Service offline" ? true : false;
  /*   statusService === "Service online" ||
    statusService === "Transmission succesfull"
      ? "positive"
      : "negative"; */

  console.log(activeStatus, "Status", statusService);
  return (
    <label className="flex items-center">
      <span className={`w-2.5 h-2.5 rounded-full ${activeStatus ? 'bg-green-600' : 'bg-gray-500'}`}></span>
      <span className="gap-1 font-bold text-white text-lg mb-2 ml-2">{statusService}</span>
    </label>
  );
};

export default StatusLightComponent;

  /* <Provider theme={defaultTheme}>
      <div
        className=" gap-1 font-bold text-xl mb-2"
      >
        <StatusLight variant={"positive"} isDisabled={true}>{statusService}</StatusLight>
      </div>
    </Provider> */
