import React from "react";
import Layout from "@theme/Layout";
import QuickLink from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

export const BuilderList = [
  {
    title: "Why build on MultiversX ?",
    content:
      "Discover the power of our technology and the benefits of building in our ecosystem.",
    docName: "builder-journeys/tools-and-sdk-overview",
    icon: "🛠️",
  },
  {
    title: "Build a DApp",
    content:
      "Learn how to build your decentralized application step by step on MultiversX.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "🌍",
  },
  {
    title: "Build a Smart Contract",
    content: "Follow detailed guides to develop and deploy smart contracts.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "📜",
  },
  {
    title: "Integrate a Platform",
    content:
      "Integrate exchanges, wallets, and other platforms with our detailed guides.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "🏛",
  },
  {
    title: "Manage a Wallet",
    content:
      "Learn how to create, manage, and use a MultiversX wallet with availables technologies.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "📱",
  },
  {
    title: "Create a Token",
    content:
      "Issue your own tokens on MultiversX with our ESDT token standard.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "🔷",
  },
];

const sdks = [
  {
    title: "Dapp - Javascript",
    content:
      "SDK for easily integrate Multiversx into your Typescript/Javascript applications.",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "🔷",
  },
  {
    title: "SC - Rust",
    content:
      "SDK for build smart contracts with Rust",
    docName: "/Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
    icon: "🔷",
  },
]
const Builder = () => {
  const [activePath, setActivePath] = useState(0);

  return (
    <Layout title="Builder" description="Learn how to build on MultiversX.">
      <PageHeader
        title="Builders Journeys"
        subtitle="Choose your path you must."
      />
      <PageSection title="Builder Paths">
        {[
          { name: "Starting", content: "This is the starting point for your builders journey." },
          { name: "Building", content: "This is where you will learn how to build on MultiversX." },
          { name: "Deploying", content: "This is where you will learn how to deploy your project to MultiversX." },
        ].map((path, idx) => (
          <QuickLink key={idx} name={path.name} onClick={() => setActivePath(idx)} />
        ))}
      </PageSection>
      <PageSection title="SDKs">
        {[
          { name: "MultiversX SDK", content: "This is where you will learn how to use the MultiversX SDK." },
        ].map((sdk, idx) => (
          <QuickLink key={idx} name={sdk.name} onClick={() => setActivePath(idx)} />
        ))}
      </PageSection>
    </Layout>
  );
};

export default Builder;
