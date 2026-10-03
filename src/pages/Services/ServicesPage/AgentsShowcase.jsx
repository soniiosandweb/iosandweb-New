import React from "react";
import "./AgentsShowcase.css";

const features = [
  {
    id: "01",
    stat: "94%",
    statLabel: "Resolution Rate",
    title: "Customer Support",
    description:
      "Autonomous agents that resolve tickets, escalate intelligently, and learn from every interaction — 24/7, at scale.",
    tags: ["NLP", "Ticketing", "Escalation"],
    highlight: "filled",
  },
  {
    id: "02",
    stat: "3.2x",
    statLabel: "Pipeline Velocity",
    title: "Sales Automation",
    description:
      "Agents that qualify leads, personalize outreach, schedule meetings, and close the loop without human bottlenecks.",
    tags: ["CRM", "Outreach", "Scoring"],
  },
  {
    id: "03",
    stat: "80%",
    statLabel: "ops cost reduction",
    title: "Business Operations",
    description:
      "Replace brittle RPA scripts with reasoning agents that adapt to process changes and orchestrate cross-system workflows.",
    tags: ["Orchestration", "ERP", "Reporting"],
  },
  {
    id: "04",
    stat: "12hr",
    statLabel: "4 Min Per Report",
    title: "Research & Analysis",
    description:
      "Agents that synthesize data, monitor markets, generate reports, and surface signals your analysts would miss.",
    tags: ["Synthesis", "Monitoring", "BI"],
    highlight: "outline",
  },
  {
    id: "05",
    stat: "99.1%",
    statLabel: "Task Completion",
    title: "Workflow Automation",
    description:
      "End-to-end process agents that span tools, teams, and APIs — completing tasks the way a smart operator would.",
    tags: ["NLP", "Ticketing", "Escalation"],
  },
];

const AgentsShowcase = () => {
  return (
    <section className="agentsShowcase section-padding">
      <div className="agentsShowcase__container">

        {/* Header */}
        <div className="agentsShowcase__header">
          <h2 className="agentsShowcase__heading">
            Agents That Work
            <br />
            <span>While You Sleep</span>
          </h2>

          <p className="agentsShowcase__description">
            Purpose-built agents for every critical business function —
            deployed in days, not months.
          </p>
        </div>

        {/* Cards */}
        <div className="agentsShowcase__cards">
          {features.map((feature) => (
            <div
              className={`agentsShowcase__card ${
                feature.highlight === "filled" ? "is-filled" : ""
              } ${feature.highlight === "outline" ? "is-outline" : ""}`}
              key={feature.id}
            >
              <div className="agentsShowcase__cardTop">
                <span className="agentsShowcase__index">{feature.id}</span>
                <span className="agentsShowcase__stat">
                  {feature.stat}
                  <span className="agentsShowcase__statLabel">
                    {feature.statLabel}
                  </span>
                </span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <div className="agentsShowcase__tags">
                {feature.tags.map((tag) => (
                  <span className="agentsShowcase__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgentsShowcase;