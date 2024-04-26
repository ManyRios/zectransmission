import { logos } from "../utils/constants";

const Navigation = () => {
  return (
    <div className="flex justify-between p-4 px-6 w-full h-30">
        {logos.map(({ name, src, url }) => (
          
            <div
              key={name}
              className="relative w-20 h-20 overflow-hidden p-1 bg-slate-600 rounded-full  hover:scale-110 hover:bg-slate-50"
            >
              <a href={url} target="_blank" rel="noreferrer">
                <img src={src} alt={name} className=" W-20 H-20"/>
              </a>
            </div>
        ))}
    </div>
  );
};

export default Navigation;