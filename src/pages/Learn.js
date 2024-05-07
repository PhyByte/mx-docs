import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import QuickLink from "../components/QuickLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const coreConcepts = [
  {
    title: "Presentation of MultiversX",
    content: "Discover the core concepts & vision of the MultiversX network.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🌍",
  },
  {
    title: "Roadmap",
    content: "Discover what have been done & whats planned for the future.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🌍",
  },
];

const technologies = [
  {
    title: "Secure Proof of Stake",
    content: "Learn about the vision and mission of the MultiversX network.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🎯",
  },
  {
    title: "Adaptive Sharding",
    content:
      "Ensures scalability and efficiency, optimizes the number of active shards to reduce overhead and resource wastage.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "📈",
  },
  {
    title: "ESDT Standard",
    content:
      "Elrond Standard Digital Token (ESDT) is a token standard on the MultiversX platform that allows the creation and management of tokens without deploying smart contracts.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🪙",
  },
  {
    title: "WASM VM",
    content:
      "MultiversX employs a unique Virtual Machine architecture designed to enhance execution speed and network scalability.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "⚙️",
  },
];

function Learn() {
  return (
    <Layout
      title="Learn"
      description="Explore the MultiversX ecosystem and learn how to build, validate, and participate in the network."
    >
      <PageHeader
        title="Discover MultiversX"
        subtitle="Dive into our technology and ecosystem."
      />
      <PageSection title="Core Concepts">
        {coreConcepts.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
      <PageSection title="Technologies">
        {technologies.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
    </Layout>
  );
}

export default Learn;
