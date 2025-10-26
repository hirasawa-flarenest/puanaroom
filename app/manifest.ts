import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "おやこの広場 はないろ",
    short_name: "はないろ",
    description: "横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろば",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea89b",
    icons: [
      {
        src: "/images/Puana-Logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/Puana-Logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
