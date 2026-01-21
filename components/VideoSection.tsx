"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import SectionWrapper from "./SectionWrapper";

const VIDEO_MAP: Record<string, string> = {
  default: "/videos/default.mp4",
  test1: "/videos/test1.mp4",
  test2: "/videos/test2.mp4",
};

const VideoSection = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "default";

  const videoSrc = useMemo(() => {
    return VIDEO_MAP[token];
  }, [token]);

  return (
    <SectionWrapper title="Um pequeno video">
      <video src={videoSrc} controls autoPlay className="rounded-4xl" />
    </SectionWrapper>
  );
};

export default VideoSection;
