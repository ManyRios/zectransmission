import tuzi from "../assets/tuzi.webp";
import zecpages from "../assets/zecpages.webp";
import zecwiki from "../assets/ZecHub_blue_globe.webp";

export const sectionDetails = [
  {
    id: 0,
    label: "GALAXY 18",
    details:
      "North America\nLong: 123W\nBand: Ku\nFreq: 11913.40 MHz\nPol: Horizontal",
  },
  {
    id: 3,
    label: "TELSTAR 11N",
    details: "Europe\nLong: 37.5W\nBand: Ku\nFreq: 1142.10 MHz\nPol: Vertical",
  },
  {
    id: 5,
    label: "TELSTAR 18V",
    details:
      "Asia Pacific\nLong: 138E\nBand: Ku\nFreq: 11506.75 MHz\nPol: Horizontal",
  },
  {
    id: 1,
    label: "EUTELSAT 113",
    details:
      "South America\nLong: 113W\nBand: Ku\nFreq: 12066.90 MHz\nPol: Vertical",
  },
  {
    id: 2,
    label: "TELSTAR 11N",
    details:
      "Africa\nLong: 37.5W\nBand: Ku\nFreq: 11452.10 MHz\nPol: Horizontal",
  },
  {
    id: 4,
    label: "TELSTAR 18V",
    details:
      "Asia Pacific\nLong: 123W\nBand: C\nFreq: 11913.40 MHz\nPol: Horizontal",
  },
];

export const logos = [
  {
    name: "Zecwiki",
    src: zecwiki,
    url: "https://zechub.wiki/",
  },
  {
    name: "Free2Z",
    src: tuzi,
    url: "https://free2z.cash/",
  },
  {
    name: "ZecPages",
    src: zecpages,
    url: "https://zecpages.com/",
  },
];

export const statusConfig = {
  "Service online": "positive",
  "Transmission successful": "positive",
  "Service offline": "negative",
};
