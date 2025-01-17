import { useAppSelector } from "@/store/hooks";
import { selectFirstDevice } from "@/store/slices/orderedDevices";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";
import DeviceCard from "./DeviceCard";

const DevicesMobile = () => {
  const firstDevice = useAppSelector(selectFirstDevice);

  if (!firstDevice) {
    return (
      <>
        <h3 className="mb-2 text-[1rem] font-semibold leading-[1.31]">
          Your Devices
        </h3>
        <div>
          <InfoCard
            title="No Devices"
            description="Order a device first and it will show up here."
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="mb-2 text-[1rem] font-semibold leading-[1.31]">
          Your Devices
        </h3>
        <Link to="/devices/my">
          <span className="text-[0.75rem] text-primary">See all</span>
        </Link>
      </div>
      <DeviceCard {...firstDevice} />
    </>
  );
};

export default DevicesMobile;
