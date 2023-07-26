import { Billboard as BillboardType } from "@/app/types";

interface BillboardProps {
  data: BillboardType
}

export const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  return (
    <div className="h-[32rem] max-w-sreen-xl overflow-hidden flex justify-center items-center">
      <div 
        className="h-full w-full flex justify-center items-center aspect-square md:aspect-[2.4/1] bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="w-1/2 flex flex-col justify-center items-center text-center gap-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard