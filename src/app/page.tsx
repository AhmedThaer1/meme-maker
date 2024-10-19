"use client";

/* eslint-disable @next/next/no-img-element */
import { IKImage } from "imagekitio-next";

export default function Home() {
  return (
    <div className="">
      <IKImage
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        path="photo_2024-04-20_16-07-01.jpg"
        width={400}
        height={400}
        transformation={[{ raw: "l-text,i-hello world,fs-50,l-end" }]}
        alt="Alt text"
      />
    </div>
  );
}
