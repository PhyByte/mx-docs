import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import QuickLink from "../components/QuickLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const Concepts = [
  {
    title: "Why validate on MultiversX ?",
    content: "Discover the benefits of validating transactions on our network.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔒",
  },
  {
    title: "Requirements",
    content: "What do you need to run a node on MultiversX?",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "📊",
  },
  {
    title: "Advantages & Risks",
    content: "Understand the advantages and risks of validating transactions.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "💰",
  },
];

const RunNodesQuickLinks = [
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🖥",
  },
  {
    title: "Use Multikey",
    content:
      "Learn how to use Multikey to manage numerous validator nodes on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔗",
  },
  {
    title: "Maintenace & Monitoring",
    content: "Understand how to maintain and monitor your validator node.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔧",
  },
];

const ValidatorQuickLinks = [
  {
    title: "What are Staking Providers?",
    content: "Understand the role of staking providers on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🖥",
  },
  {
    title: "Become a Staking Provider",
    content:
      "Learn how to provide staking services and earn rewards on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "💰",
  },
];

const resourceTags = [
  {
    title: "Discord",
    color: "purple",
    icon: "🗨️",
    url: "https://discordapp.com",
  },
  { title: "Telegram", color: "blue", icon: "📬", url: "https://telegram.org" },
  {
    title: "External Resources",
    color: "green",
    icon: "🌐",
    url: "https://example.com",
  },
];

function Validator() {
  return (
    <Layout
      title="Validate"
      description="Learn how to run nodes & validate on MultiversX."
    >
      <PageHeader
        title="Validator Path"
        subtitle="Take part in securing the network."
      />

      <PageSection title="Core Concepts">
        {Concepts.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Running Nodes on MultiversX">
        {RunNodesQuickLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Become Staking Provider">
        {ValidatorQuickLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Need Supports?">
        {resourceTags.map((tag) => (
          <a
            key={tag.title}
            className={clsx("tag", styles.tag)}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: tag.color, textDecoration: "none" }}
          >
            <span className={styles.icon}>{tag.icon}</span>
            <span>{tag.title}</span>
          </a>
        ))}
      </PageSection>
    </Layout>
  );
}

export default Validator;
