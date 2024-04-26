import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QRCodeComponent from "../components/QrCodeComponents";
import { BsWallet2, BsGlobe2 } from "react-icons/bs";
import StatusLightComponent from "../components/StatusLight";
import Layout from "./Layout";
import { sectionDetails } from "../utils/constants";

function Home() {
  const [prefix, setPrefix] = useState("");
  const [encrypt, setEncrypt] = useState(false);
  const [fec, setFec] = useState(false);
  const [memo, setMemo] = useState("");
  const [activeSections, setActiveSections] = useState(new Set());
  const [statusMessage, setStatusMessage] = useState("Transmission succesfull");
  const characterLimit = 485; // Define characterLimit

  useEffect(() => {
    const ws = new WebSocket("wss://yourbackendurl");

    ws.onopen = () => {
      console.log("WebSocket Connected");
      ws.send("Hello Server!");
    };

    ws.onmessage = (event) => {
      console.log("Message from server ", event.data);
      setStatusMessage(event.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error ", error);
    };

    ws.onclose = () => {
      console.log("WebSocket Disconnected");
      setStatusMessage("Service offline");
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    const newPrefix = Array.from(activeSections)
      .map((id) => `r${id}`)
      .join(" ");
    setPrefix(newPrefix);
  }, [activeSections]);

  const handleSectionClick = (sectionId) => {
    const updatedSections = new Set(activeSections);
    updatedSections.has(sectionId)
      ? updatedSections.delete(sectionId)
      : updatedSections.add(sectionId);
    setActiveSections(updatedSections);
  };

  const shouldBlurQRCode = memo.length > characterLimit || memo.length === 0;

  return (
    <div>
      <Layout>
        <div className="flex flex-col w-100 min-h-screen items-center justify-center py-10 sm:px-3 z-10">
          <div className="flex-col text-center w-50 p-3 bg-slate-600 border-4 border-slate-100 bg-opacity-80 rounded-md shadow-md">
            <header>
              <h1 className="text-5xl text-slate-100 font-bold my-4">
                ZEC Transmission
              </h1>
              <Link
                to={"/faq"}
                className="font-bold text-slate-100 text-lg hover:text-blue-700"
              >
                FAQ Page
              </Link>
            </header>
            <div className="flex flex-col items-center justify-center w-100 mt-20 gap-8">
              <div className="relative w-auto h-auto my-auto mx-0 overflow-hidden p-1 bg-slate-200 border-slate-100 rounded-md">
                <img
                  src="https://i.ibb.co/4NVWHdq/squaredottedmap.jpg"
                  alt="Map"
                  className="block w-100 h-auto"
                />
                <div className="map-sections">
                  {sectionDetails.map((section) => (
                    <button
                      key={section.id}
                      className={`map-section section-${section.id} ${
                        activeSections.has(section.id) ? "active" : ""
                      }`}
                      onClick={() => handleSectionClick(section.id)}
                    >
                      {activeSections.has(section.id)
                        ? section.details
                        : section.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center max-w-80 border-5 p-1 mt-5 border-gray-700 z-20 ">
                <QRCodeComponent
                  className="flex items-center w-full h-auto p-2"
                  prefix={prefix}
                  memo={memo}
                  encrypt={encrypt}
                  fec={fec}
                  shouldBlur={shouldBlurQRCode}
                />
              </div>

              <div className="flex justify-center">
                <StatusLightComponent statusService={statusMessage} />
              </div>
            </div>
            <textarea
              id="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="start typing your message"
              className="w-2/3 h-60 p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div
              className={`${
                memo.length > characterLimit ? "text-red-600" : "text-slate-100"
              }`}
            >
              {memo.length}/{characterLimit}
            </div>
            <div className="toggles">
              <div className="toggle-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={encrypt}
                    onChange={() => setEncrypt(!encrypt)}
                  />
                  <span className="slider round"></span>
                </label>
                <div className="toggle-label">Encrypt</div>
              </div>
              <div className="toggle-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={fec}
                    onChange={() => setFec(!fec)}
                  />
                  <span className="slider round"></span>
                </label>
                <div className="toggle-label">FEC</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start w-full h-30 py-3">
          <div className="inline-flex ml-5 space-x-6 w-60 text-center p-4 h-20 text-slate-100 mt-3">
            <div className="flex flex-col items-center hover:-translate-y-3">
              <a
                href="https://zechub.wiki/wallets "
                target="_blank"
                rel="noreferrer"
              >
                <BsWallet2 className="w-auto h-10 " />
              </a>
              <span className="font-bold">Wallets</span>
            </div>
            <div className="flex flex-col items-center hover:-translate-y-3">
              <a
                href="https://zcashblockexplorer.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGlobe2 className="w-auto h-10 " />
              </a>
              <span className="font-bold">Block Explorer</span>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
