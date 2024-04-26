import Navigation from "../components/Navigation";
import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Faq = () => {
  return (
    <div className="bg-slate-700">
      <Navigation />
      <div className="flex flex-col items-center justify-center h-full py-10 z-30">
        <Accordion className="w-full md:w-1/2 bg-slate-600 border-4 shadow-2xl">
          <h1 className="text-white text-center text-3xl font-bold p-8">
            Frequently asked Questions
          </h1>

          <Accordion.Panel className="w-1/2">
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              What is ZECTransmission?
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2">
                ZECTransmission is a simple application that allows messages to
                be sent (nearly) anywhere in the world using a Zcash shielded
                wallet. Blockstream satellite is accessible via their website,
                however it is limited!
              </p>
              <p className="mb-2">Using Blockstreams Website:</p>
              <ul className="list-disc pl-5">
                <li>Messages can only be sent in plaintext.</li>
                <li>IP may be leaked, linking sender to message.</li>
              </ul>
              <br />
              <p>
                Using a Zcash Shielded Wallet a message can be sent with full
                anonymity and relayed to an unknown receiver within seconds, all
                paid for in ZEC.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              How Does It Work??
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2">
                ZECTransmission serves as a relay between a Zcash full node and
                the Blockstream Satellite API. Transmissions are paid for by
                automated invoices via Bitcoin Lightning Network.
              </p>
              <p className="mb-2">
                Our service checks for new messages every 2 minutes. Once a
                message has been received the status light will change to
                "Transmission Received", once it has been successfully relayed a
                status indicator "Transmission Sent" will be displayed.
              </p>
              <p className="mb-2">
                The IPFS version of the app does not have functional status
                light indicators. We hope to integrate IPFS pubsub or Orbitdb
                for decentralised status updates. Let us know if you can help!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              The Map
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2">
                The map is split into 6 Regions. Each region/section selects a
                satellite of the Blockstream Satellite constellation that serves
                a specific region. Select a single or multiple regions you wish
                to send your transmission to. Selcting no regions will send the
                transmission to *all* regions.
              </p>
              <p className="mb-2">
                More info:{" "}
                <a
                  href="https://blockstream.com/satellite"
                  className="hover:text-blue-700"
                >
                  https://blockstream.com/satellite
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              Encrypt Toggle
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2 ">
                This toggle encrypts the transmission. Message content can only
                be decrypted by receivers using a GPG private key (contact at
                bottom of page). This increases the total size/cost of the API
                message + invoice in LN satoshi - therefore the cost in ZEC
                increases by 0.05 zatoshi when selected.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              FEC Toggle
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2">
                Forward Error Correction (FEC) adds redundancy to the
                transmitted data so that receivers can recover the original
                message even if some parts are missing. This increases the total
                size/cost of the API message + invoice in LN satoshi - therefore
                the cost in ZEC increases by 0.05 zatoshi when selected.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              Where is my message?
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2">
                You can check the status of your transmission using the status
                light indicators. You can also check the status of new
                transamissions in the satellite queue:
                <a
                  href="https://blockstream.com/satellite-queue/"
                  target="_blank"
                  className="text-white hover:text-blue-700 ml-2"
                  rel="noreferrer"
                >
                  https://blockstream.com/satellite-queue/
                </a>
              </p>
              <p className="mb-2  dark:text-gray-400">
                If you sent without encryption your message can be viewed on the
                Blockstream Satellite Telegram channel:{" "}
                <a
                  href="https://t.me/blockstream_satellite_feed"
                  target="_blank"
                  className="text-white hover:text-blue-700 ml-2"
                  rel="noreferrer"
                >
                  https://t.me/blockstream_satellite_feed
                </a>
              </p>

              <p className="mb-2  dark:text-gray-400">
                The backend service does not store your messages, it is only a
                relay.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              New Features?
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2 ">
                It is possible to define a specific recipient for a
                transmission.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              Receiver Kit
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="mb-2 ">Hardware:</p>
              <ul className="list-disc pl-5 mb-2">
                <li>{"Satellite Dish >45cm"}</li>
                <li>{"RTL-SDR USB Dongle"}</li>
                <li>{"Ku band PLL LNB"}</li>
                <li>{"21V Power Inserter"}</li>
                <li>{"Portable Power Supply"}</li>
                <li>{"Laptop/Notebook"}</li>
              </ul>
              <p className="mb-2">Software:</p>
              <ul className="list-disc pl-5 mb-2">
                <li>{"Blocksat CLI - sudo pip3 install blocksat-cli"}</li>
                <li>
                  {"GQRX - "}
                  <a
                    href="https://gqrx.dk/"
                    target="_blank"
                    className="text-white hover:text-blue-700"
                    rel="noreferrer"
                  >
                    https://gqrx.dk/
                  </a>
                </li>
              </ul>
              <p>
                Blockstream Satellite User Guide:
                <a
                  href="https://blockstream.github.io/satellite/"
                  target="_blank"
                  className="text-white hover:text-blue-700"
                  rel="noreferrer"
                >
                  {" "}
                  https://blockstream.github.io/satellite/
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-white font-bold hover:text-slate-700 focus:text-slate-700">
              Contact
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <p className="break-all mb-2">
                Contact:{" "}
                <span className="font-bold">
                  zs18eaw4ydluma74k35ny7nz3sh44e4fkk2xg57a6t87jneu00lfczpnrfr3pjrj99kgsgy652n5zv
                </span>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="flex text-white font-bold flex-row p-1 items-center text-center hover:border-b-2 hover: cursor-pointer mt-3">
          <BiArrowBack className="h-auto mr-2" />
          <Link to={"/"} className="">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
