import BagIcon from "./icons/BagIcon";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-200">
      <h1 className="text-lg font-bold tracking-wide">
        Branded
      </h1>
      <div>
        <BagIcon />
      </div>
    </div>
  )
}
