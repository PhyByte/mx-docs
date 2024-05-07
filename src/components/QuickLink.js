import React from "react";
import clsx from "clsx";
import styles from "../css/styles.module.css";
import Link from "@docusaurus/Link";

function QuickLink({ docName, title, content, icon }) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <Link className={clsx("card", styles.card)} to={docName}>
        <h3>
          <span className={clsx("margin-right--sm", styles.icon)}>{icon}</span>
          {title}
        </h3>
        <p>{content}</p>
      </Link>
    </div>
  );
}

export default QuickLink;