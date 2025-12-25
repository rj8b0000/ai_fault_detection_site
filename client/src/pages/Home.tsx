import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Leaf, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Industrial Precision
 * - Deep slate (#1a2332) and charcoal backgrounds with electric blue (#0066ff) accents
 * - Asymmetric grid-based layouts avoiding centered, generic designs
 * - Data-first approach with charts and metrics as central content
 * - Functional minimalism where every element serves a purpose
 * - Smooth, purposeful animations enhancing usability
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg">AI Fault Detection</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm hover:text-accent transition-colors">
              Overview
            </a>
            <a href="#system" className="text-sm hover:text-accent transition-colors">
              System Design
            </a>
            <a href="#benefits" className="text-sm hover:text-accent transition-colors">
              Benefits
            </a>
            <a href="#implementation" className="text-sm hover:text-accent transition-colors">
              Implementation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/hero-circuit.png"
            alt="Circuit board background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>

        <div className="container relative py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
                <span className="text-sm font-medium text-accent">Case Study Report</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                AI-Driven Predictive Maintenance for Electronics
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Explore how artificial intelligence transforms electronics manufacturing through early fault detection, 
                reducing downtime by up to 40% and achieving 95% accuracy in fault prediction.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Read Full Report <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src="/images/hero-data-flow.png"
                alt="AI neural networks visualization"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-card border-t border-border py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">95%</p>
              <p className="text-sm text-muted-foreground">Fault Detection Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">40%</p>
              <p className="text-sm text-muted-foreground">Downtime Reduction</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">$M</p>
              <p className="text-sm text-muted-foreground">Cost Savings Potential</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">Real-Time</p>
              <p className="text-sm text-muted-foreground">Predictive Capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
      <section id="overview" className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study Overview</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the problem, objectives, and transformative potential of AI-based fault detection in electronics manufacturing.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
            {[
              { id: "problem", label: "Problem Statement" },
              { id: "objectives", label: "Objectives" },
              { id: "definition", label: "Definition" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-4 font-medium text-sm transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <Card className="p-8 bg-card border border-border">
            {activeTab === "problem" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Challenge</h3>
                <p className="text-muted-foreground">
                  Traditional electronics maintenance relies on reactive or time-based approaches, leading to:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Unexpected equipment failures causing costly downtime</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Safety hazards from component malfunctions (overheating, short circuits)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Premature disposal of components contributing to e-waste</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Inefficient resource allocation and high operational costs</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "objectives" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Strategic Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Reduce Failure Rates</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Significantly decrease unexpected electronic component failures through early and accurate fault prediction.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Minimize Downtime</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Transition to efficient, scheduled preventive maintenance reducing operational expenditure.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Enhance Safety</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mitigate safety risks by preventing catastrophic failures in critical infrastructure.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Promote Sustainability</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Extend equipment lifespan and reduce e-waste through targeted, preventive interventions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "definition" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What is AI-Based Fault Detection?</h3>
                <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">AI-Based Fault Detection in Electronics</span> is a sophisticated system where various sensors collect electrical and visual data from electronic circuits, and an Artificial Intelligence model analyzes this data to automatically detect, classify, and predict faults before failure occurs.
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Key Components:</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-sm"><span className="font-medium">Multi-Modal Sensors:</span> Electrical (voltage, current), thermal imaging, and visual PCB inspection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-sm"><span className="font-medium">Real-Time Analysis:</span> AI models process data streams to identify anomalies and patterns</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span className="text-sm"><span className="font-medium">Predictive Capability:</span> Forecasts component failures before they occur</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* System Architecture */}
      <section id="system" className="py-20 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive pipeline designed for continuous monitoring and predictive maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { step: "1", title: "Sensors", desc: "Multi-modal data collection (electrical, thermal, visual)" },
                  { step: "2", title: "Data Collection", desc: "Pre-processing, synchronization, and feature extraction" },
                  { step: "3", title: "AI Model", desc: "CNN for images, ML/RNN for time-series signal analysis" },
                  { step: "4", title: "Alert System", desc: "Real-time insights and predictive maintenance scheduling" },
                  { step: "5", title: "Preventive Action", desc: "Targeted maintenance before catastrophic failure" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/system-architecture.png"
                alt="System architecture diagram"
                className="w-full rounded-lg shadow-xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Impact</h2>
            <p className="text-lg text-muted-foreground">
              How AI-based fault detection creates value across safety, sustainability, and economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border border-border hover:border-accent/50 transition-colors">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Public Safety</h3>
              <p className="text-muted-foreground text-sm">
                Prevents failures in mission-critical electronics (medical devices, transportation controls), safeguarding human life and infrastructure.
              </p>
            </Card>

            <Card className="p-8 bg-card border border-border hover:border-accent/50 transition-colors">
              <Leaf className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                Reduces e-waste by extending product lifespan and enabling targeted repairs, aligning with global environmental goals.
              </p>
            </Card>

            <Card className="p-8 bg-card border border-border hover:border-accent/50 transition-colors">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Economic Welfare</h3>
              <p className="text-muted-foreground text-sm">
                Increases manufacturing efficiency and competitiveness, leading to stable employment and lower consumer costs.
              </p>
            </Card>
          </div>

          {/* SWOT Analysis */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">SWOT Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-card border border-border">
                <h4 className="font-bold text-accent mb-4">Strengths</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>High accuracy (95%) in fault detection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Predictive capability enabling proactive maintenance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Maximizes equipment lifespan</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border border-border">
                <h4 className="font-bold text-accent mb-4">Weaknesses</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">⚠</span>
                    <span>Requires large, high-quality labeled datasets</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">⚠</span>
                    <span>High upfront investment in sensors and infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">⚠</span>
                    <span>Model drift over time with new fault types</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border border-border">
                <h4 className="font-bold text-accent mb-4">Opportunities</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Significant social good impact (safety, sustainability)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Integration into Smart Manufacturing and IoT sectors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Rapid market growth and adoption potential</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border border-border">
                <h4 className="font-bold text-accent mb-4">Threats</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">✕</span>
                    <span>Cybersecurity vulnerabilities in interconnected systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✕</span>
                    <span>Model accuracy degradation with new fault types</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✕</span>
                    <span>Regulatory and standardization challenges</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-20 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Plan</h2>
            <p className="text-lg text-muted-foreground">
              A structured, step-by-step approach to successful deployment of AI-FDD systems.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "Step 1",
                title: "Sensor Deployment",
                desc: "Install and calibrate multi-modal sensors on target electronic systems. Establish a robust, high-speed data acquisition network.",
              },
              {
                step: "Step 2",
                title: "Data Collection & Labeling",
                desc: "Collect diverse datasets of normal and faulty conditions. Expert engineers must accurately label fault data for supervised learning.",
              },
              {
                step: "Step 3",
                title: "AI Model Training",
                desc: "Train specialized models (CNN for images, ML/RNN for signals). Validate performance against unseen data to ensure high accuracy.",
              },
              {
                step: "Step 4",
                title: "System Integration",
                desc: "Integrate trained AI models into manufacturing execution systems. Develop alert systems for real-time, actionable insights.",
              },
              {
                step: "Step 5",
                title: "Continuous Monitoring",
                desc: "Deploy for live monitoring. Continuously collect new data to retrain and refine models, ensuring adaptation to new fault signatures.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-32">
                  <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
                    <span className="text-sm font-semibold text-accent">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">The Future of Manufacturing</h2>
            <p className="text-lg text-muted-foreground">
              AI-Based Fault Detection represents a powerful convergence of technological innovation and societal benefit. 
              By enabling proactive, predictive maintenance, this system directly addresses industrial safety, operational 
              efficiency, and environmental sustainability. The ability to predict and prevent failures with 95% accuracy 
              not only saves businesses millions but enhances public welfare and drastically reduces electronic waste.
            </p>
            <div className="pt-8">
              <Button size="lg" className="gap-2">
                Download Full Report <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-sm text-muted-foreground">
                An interactive case study exploring AI-driven predictive maintenance for electronics manufacturing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sections</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#overview" className="hover:text-accent transition-colors">Overview</a></li>
                <li><a href="#system" className="hover:text-accent transition-colors">System Design</a></li>
                <li><a href="#benefits" className="hover:text-accent transition-colors">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Full Report</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@example.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AI Fault Detection Case Study. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
