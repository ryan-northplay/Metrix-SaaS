import { ChartPieIcon, PlusIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainTemplate from "../../components/Templates/Main";

export default function Home() {
  const Orders = []

  return (
    <MainTemplate title="Orders">
      <section className="flex flex-col h-full pb-4">
        <div className="mb-4 flex justify-between w-full">
          <h1 className="text-lg font-bold">Older Summary</h1>
          <button className="flex justify-between w-fit h-fit bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 content-center text-sm text-white">
            <PlusIcon className="fill-white" width={20} />
            Create a New Order
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <InfoCard bgIconColor="bg-amber-200" icon={<ChartPieIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
          <InfoCard bgIconColor="bg-amber-200" icon={<UsersIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
          <InfoCard bgIconColor="bg-amber-200" icon={<UsersIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
        </div>
        <InfoCard title="Recent Orders" className="mt-4 flex-grow">
          {Orders.length <= 0 ?
            <div className="flex flex-col justify-center flex-wrap flex-1">
              <div className="w-40 h-40 rounded-full border-2 border-gray-300 bg-gray-200 flex justify-center content-center mx-auto">
                <ShoppingBagIcon width={40} className="fill-gray-400" />
              </div>
              <h1 className="text-center mt-8 font-bold text-black">No Orders yet?</h1>
              <p className="text-center my-4">Add products to your store and start selling to see olders here</p>
              <button className="mx-auto flex justify-between w-36 bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 content-center text-sm text-white"><PlusIcon className="fill-white" width={20} />New Product</button>
            </div> :
            <div>

            </div>}
        </InfoCard>
      </section>
    </MainTemplate >
  )
}
