import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, Download } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Academic ASG Report Format
 * - Times New Roman font for formal academic presentation
 * - 1.5 line spacing for body text
 * - Justified text alignment
 * - Proper margins: 1.25" left, 1.0" right/top/bottom
 * - Black text with formal structure
 * - Chapter-based organization following ASG guidelines
 */

export default function Home() {
  const [currentPage, setCurrentPage] = useState("cover");

  const renderCoverPage = () => (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-16 py-20 space-y-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          AI-DRIVEN PREDICTIVE MAINTENANCE FOR ENHANCED SAFETY AND SUSTAINABILITY IN ELECTRONICS MANUFACTURING
        </h1>
        <p className="text-xl mt-12">A Case Study Report</p>
        <p className="text-lg mt-8">Submitted in Partial Fulfillment of the Requirements for the Degree of</p>
        <p className="text-lg font-bold">Bachelor of Technology (Honours)</p>
        <p className="text-lg">in Computer Science and Engineering</p>
        <p className="text-lg">Specialization: Artificial Intelligence & Data Science</p>
      </div>

      <div className="mt-16 space-y-4 text-center">
        <p className="text-base">Submitted by:</p>
        <p className="text-base font-bold">[Student Name]</p>
        <p className="text-base">[Roll Number]</p>
      </div>

      <div className="mt-16 space-y-4 text-center">
        <p className="text-base">Submitted to:</p>
        <p className="text-base font-bold">[Faculty Name]</p>
        <p className="text-base">[Department Name]</p>
        <p className="text-base">[College/University Name]</p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-base">Date of Submission: December 25, 2025</p>
      </div>
    </div>
  );

  const renderCertificate = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-2xl font-bold text-center mb-12">CERTIFICATE</h2>
      <p style={{ textAlign: "justify" }}>
        This is to certify that the Case Study Report entitled <span className="italic">"AI-Driven Predictive Maintenance for Enhanced Safety and Sustainability in Electronics Manufacturing"</span> is a bonafide work carried out by [Student Name] (Roll No. [Roll Number]) under my supervision and is submitted in partial fulfillment of the requirements for the award of the degree of Bachelor of Technology (Honours) in Computer Science and Engineering, specializing in Artificial Intelligence & Data Science, of [College/University Name].
      </p>
      <p style={{ textAlign: "justify" }}>
        The work presented in this report has not been submitted to any other University or Institute for the award of any degree or diploma.
      </p>
      <div className="mt-16 space-y-4">
        <p>[Signature of Supervisor]</p>
        <p className="font-bold">[Supervisor Name]</p>
        <p>[Designation]</p>
      </div>
    </div>
  );

  const renderAcknowledgement = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-2xl font-bold mb-8">ACKNOWLEDGEMENT</h2>
      <p style={{ textAlign: "justify" }}>
        I would like to express my sincere gratitude to my supervisor, [Supervisor Name], for their invaluable guidance, support, and encouragement throughout the duration of this project. Their insights and constructive feedback were instrumental in shaping this comprehensive case study report.
      </p>
      <p style={{ textAlign: "justify" }}>
        I also extend my thanks to the Department of Computer Science and Engineering for providing the necessary resources and an environment conducive to research and learning. The faculty members and laboratory facilities have been invaluable in conducting this research.
      </p>
      <p style={{ textAlign: "justify" }}>
        Finally, I am grateful to my family and friends for their constant support, encouragement, and patience throughout this academic endeavor. Their belief in my work has been a source of motivation.
      </p>
    </div>
  );

  const renderAbstract = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-2xl font-bold mb-8">ABSTRACT</h2>
      <p style={{ textAlign: "justify", fontStyle: "italic" }}>
        This case study investigates the application of Artificial Intelligence (AI) for fault detection in the electronics manufacturing sector, aligning with the principles of <span className="font-bold">AI for Social Good</span> through the themes of Industry Safety and Sustainability. Traditional electronics maintenance, often reactive or time-based, results in significant component failures, costly downtime, and the generation of electronic waste. The primary objective of this study is to propose and analyze an AI-based predictive maintenance framework that can automatically detect, classify, and predict faults in electronic circuits before catastrophic failure occurs.
      </p>
      <p style={{ textAlign: "justify", fontStyle: "italic" }}>
        By leveraging sensor data such as voltage, current, and thermal/visual images, an AI model can achieve a fault detection rate of up to 95% and reduce equipment downtime by as much as 40%. The analysis, utilizing a SWOT framework, highlights the system's strength in enhancing public welfare by preventing failures in critical infrastructure and its opportunity to significantly reduce the environmental footprint of the electronics industry. The report details the system architecture, implementation plan, and concludes with the profound positive impact of this technology on creating a safer, more sustainable, and economically efficient manufacturing ecosystem.
      </p>
    </div>
  );

  const renderListOfAbbreviations = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-2xl font-bold mb-8">LIST OF ABBREVIATIONS</h2>
      <table className="w-full border-collapse" style={{ borderSpacing: "0" }}>
        <tbody>
          {[
            { abbr: "AI", full: "Artificial Intelligence" },
            { abbr: "CNN", full: "Convolutional Neural Network" },
            { abbr: "ML", full: "Machine Learning" },
            { abbr: "PCB", full: "Printed Circuit Board" },
            { abbr: "RCA", full: "Root Cause Analysis" },
            { abbr: "SWOT", full: "Strengths, Weaknesses, Opportunities, Threats" },
            { abbr: "FDD", full: "Fault Detection and Diagnosis" },
            { abbr: "RUL", full: "Remaining Useful Life" },
            { abbr: "IoT", full: "Internet of Things" },
            { abbr: "MES", full: "Manufacturing Execution System" },
          ].map((item, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
              <td className="py-2 pr-8" style={{ textAlign: "left" }}>
                <span className="font-bold">{item.abbr}</span>
              </td>
              <td className="py-2" style={{ textAlign: "left" }}>
                {item.full}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderTableOfContents = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-2xl font-bold mb-8">TABLE OF CONTENTS</h2>
      <table className="w-full" style={{ borderSpacing: "0" }}>
        <tbody>
          {[
            { page: "i", content: "Cover Page" },
            { page: "ii", content: "College Certificate" },
            { page: "iii", content: "Acknowledgement" },
            { page: "iv", content: "Abstract" },
            { page: "v", content: "List of Abbreviations" },
            { page: "vi", content: "Table of Contents" },
            { page: "1", content: "CHAPTER 1: INTRODUCTION" },
            { page: "2", content: "CHAPTER 2: CASE DESCRIPTION & BACKGROUND" },
            { page: "3", content: "CHAPTER 3: DATA COLLECTION & ANALYSIS" },
            { page: "4", content: "CHAPTER 4: AI-BASED FAULT DETECTION SYSTEM DESIGN" },
            { page: "5", content: "CHAPTER 5: FINDINGS, BENEFITS & IMPLEMENTATION" },
            { page: "6", content: "CHAPTER 6: CONCLUSION & FUTURE SCOPE" },
            { page: "7", content: "REFERENCES" },
          ].map((item, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
              <td className="py-2" style={{ textAlign: "left" }}>
                {item.content}
              </td>
              <td className="py-2" style={{ textAlign: "right" }}>
                {item.page}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderChapter1 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 1: INTRODUCTION</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">1.1 CASE TITLE</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="font-bold">AI-DRIVEN PREDICTIVE MAINTENANCE FOR ENHANCED SAFETY AND SUSTAINABILITY IN ELECTRONICS MANUFACTURING</span>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">1.2 PROBLEM STATEMENT</h3>
          <p style={{ textAlign: "justify" }}>
            The electronics manufacturing industry faces significant challenges due to the inherent complexity and high density of modern electronic circuits. Traditional maintenance strategies, which are either reactive (fixing a fault after it occurs) or time-based (replacing components on a fixed schedule), are inefficient and costly. These methods inevitably lead to high rates of unexpected equipment failure, resulting in prolonged and expensive downtime, increased operational costs, and, critically, potential safety hazards from component malfunctions such as overheating or short circuits. Furthermore, the premature disposal of electronic components contributes substantially to the growing global problem of electronic waste (e-waste). The core problem is the lack of a real-time, accurate, and predictive mechanism for identifying incipient faults in electronic systems.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">1.3 OBJECTIVES OF THE STUDY</h3>
          <p style={{ textAlign: "justify" }}>
            The primary objectives of applying AI for fault detection in electronics are multifaceted, focusing on economic, safety, and environmental benefits:
          </p>
          <ul style={{ marginLeft: "2rem", marginTop: "1rem", textAlign: "justify" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">1. Reduce Failure Rates:</span> To significantly decrease the occurrence of unexpected electronic component failures through early and accurate fault prediction.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">2. Minimize Maintenance Costs and Downtime:</span> To transition from costly reactive maintenance to efficient, scheduled preventive maintenance, thereby reducing operational expenditure and maximizing equipment uptime.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">3. Enhance Safety:</span> To mitigate safety risks for both industrial workers and end-users by preventing catastrophic failures (e.g., fires, explosions) caused by faulty components.
            </li>
            <li>
              <span className="font-bold">4. Promote Sustainability:</span> To extend the operational lifespan of electronic equipment and components, directly contributing to a reduction in e-waste and promoting circular economy principles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderChapter2 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 2: CASE DESCRIPTION & BACKGROUND</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">2.1 SIMPLE DEFINITION OF AI-BASED FAULT DETECTION</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="font-bold">AI-Based Fault Detection in Electronics</span> is a sophisticated system where various sensors collect electrical and visual data from electronic circuits, and an Artificial Intelligence model analyzes this data to automatically detect, classify, and predict faults before failure occurs. This process is a key enabler of <span className="font-bold">Predictive Maintenance</span>, moving beyond simple monitoring to active forecasting of component health.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">2.2 TRADITIONAL MAINTENANCE CHALLENGES</h3>
          <p style={{ textAlign: "justify" }}>
            In the absence of AI, fault detection relies on manual inspection, scheduled checks, or simple threshold-based alarms. These methods are often too slow, labor-intensive, and incapable of identifying subtle, non-linear patterns that precede a fault. For instance, a slight, consistent drift in voltage or a minor, localized temperature increase—which an AI model can easily flag—is often missed by human operators or simple systems, leading to eventual, costly failure. The reactive nature of traditional maintenance means that equipment often fails catastrophically, resulting in unplanned downtime that can cost manufacturing facilities thousands of dollars per hour.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">2.3 ALIGNMENT WITH AI FOR SOCIAL GOOD</h3>
          <p style={{ textAlign: "justify" }}>
            This application of AI directly addresses critical societal challenges, positioning it as a prime example of <span className="font-bold">AI for Social Good</span>. It aligns with the themes of <span className="font-bold">Industry Safety</span> and <span className="font-bold">Smart Manufacturing</span> by ensuring the reliability of electronic devices used in critical infrastructure (e.g., medical equipment, transportation systems) where failure could have severe public consequences. By protecting workers from hazards associated with malfunctioning machinery and preventing large-scale industrial accidents, the system enhances industry safety. Furthermore, by enabling the repair or replacement of only the failing component just in time, the system dramatically extends the product's useful life, thereby reducing the need for new manufacturing and minimizing the environmental impact of e-waste.
          </p>
        </div>
      </div>
    </div>
  );

  const renderChapter3 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 3: DATA COLLECTION & ANALYSIS</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">3.1 DATA COLLECTION AND SENSOR TYPES</h3>
          <p style={{ textAlign: "justify" }}>
            The effectiveness of AI-based fault detection hinges on the quality and variety of data collected. The system utilizes a multi-modal sensor array to capture a comprehensive view of the electronic circuit's operational state. Electrical signals are collected through high-frequency sensors that capture voltage and current data, which are crucial for detecting anomalies like short circuits or open circuits. Thermal imaging using infrared cameras captures localized hotspots, which are early indicators of overheating and component stress. High-resolution cameras capture visual PCB images for detecting physical defects such as cracks, solder joint failures, or corrosion.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">3.2 QUANTITATIVE AND QUALITATIVE EVIDENCE</h3>
          <p style={{ textAlign: "justify" }}>
            Real-world case studies and academic research validate the transformative impact of AI-FDD systems. Quantitative evidence demonstrates that AI-powered systems have achieved fault detection rates of up to 95%, with implementations leading to reductions in equipment downtime by as much as 40%. Qualitatively, industry experts observe that AI enables a shift to predictive maintenance, minimizing maintenance costs and improving overall equipment reliability. Furthermore, AI-driven FDD is recognized as a cornerstone of Smart Manufacturing and Industry 4.0/5.0 initiatives, promoting self-healing systems and autonomous manufacturing environments.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">3.3 SWOT ANALYSIS OF AI-FDD SYSTEM</h3>
          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            The following SWOT analysis provides a structured evaluation of the proposed AI-based Fault Detection and Diagnosis (AI-FDD) system:
          </p>

          <table className="w-full border-collapse" style={{ borderSpacing: "0", marginBottom: "1rem" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0", borderBottom: "2px solid #000" }}>
                <th style={{ padding: "0.5rem", textAlign: "left", fontWeight: "bold" }}>Category</th>
                <th style={{ padding: "0.5rem", textAlign: "left", fontWeight: "bold" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>Strengths</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  High accuracy and speed in processing vast amounts of multi-modal sensor data in real-time, detecting subtle, non-linear fault patterns. Predictive capability shifts maintenance from reactive to proactive, maximizing equipment lifespan.
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>Weaknesses</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Requires large, high-quality, and labeled datasets of both normal and faulty conditions, which can be difficult and expensive to acquire. High upfront investment in sensors, data infrastructure, and AI model development.
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>Opportunities</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Significant reduction in e-waste (Sustainability) and enhanced safety in critical applications (Public Welfare). Integration into the rapidly expanding Smart Manufacturing and IoT sectors.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>Threats</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Cybersecurity risks from the interconnected nature of the system. AI models may lose accuracy over time as new, unforeseen fault types emerge (Model Drift).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderChapter4 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 4: AI-BASED FAULT DETECTION SYSTEM DESIGN</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">4.1 SYSTEM ARCHITECTURE</h3>
          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            The AI-FDD system is structured as a closed-loop, end-to-end pipeline designed for continuous monitoring and prediction. The architecture comprises five integrated stages:
          </p>
          <ol style={{ marginLeft: "2rem", textAlign: "justify" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Sensors:</span> Multi-modal sensors (electrical, thermal, visual) are embedded within the electronic system to continuously collect raw data.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Data Collection & Pre-processing:</span> Data is transmitted to an edge or cloud computing platform. Pre-processing involves noise reduction, synchronization of multi-modal data streams, and feature extraction.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">AI Model:</span> The core of the system, responsible for learning the correlation between sensor data patterns and fault types.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Predictive Alert System:</span> Based on the model's output, an alert is generated, indicating the type, location, and predicted time-to-failure of the fault.
            </li>
            <li>
              <span className="font-bold">Preventive Maintenance:</span> Maintenance teams receive the alert and perform targeted, non-catastrophic intervention.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">4.2 AI MODEL SELECTION</h3>
          <p style={{ textAlign: "justify" }}>
            The choice of AI model is dictated by the type of sensor data being analyzed. Convolutional Neural Networks (CNN) are used for processing image-based data, specifically thermal images and visual PCB images. CNNs excel at spatial feature extraction, allowing them to identify physical defects (cracks, poor soldering) and thermal anomalies. Machine Learning Classifiers (e.g., SVM, Random Forest) and Recurrent Neural Networks (RNN) are used for analyzing time-series data from voltage and current sensors. These models are effective at detecting temporal anomalies and subtle signal drifts indicative of component aging or incipient electrical faults.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">4.3 PREDICTION CAPABILITY AND PREVENTIVE MAINTENANCE</h3>
          <p style={{ textAlign: "justify" }}>
            The system's most critical capability is prediction. By continuously monitoring the deviation of real-time data from the learned "normal" operational baseline, the AI model can calculate the probability of failure and estimate the remaining useful life (RUL) of a component. This prediction capability is the foundation of preventive maintenance, allowing operators to schedule maintenance actions (e.g., component replacement) precisely when needed, avoiding both premature disposal and catastrophic failure.
          </p>
        </div>
      </div>
    </div>
  );

  const renderChapter5 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 5: FINDINGS, BENEFITS & IMPLEMENTATION</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">5.1 KEY FINDINGS AND BENEFITS</h3>
          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            <span className="font-bold">Key Findings:</span>
          </p>
          <ul style={{ marginLeft: "2rem", marginBottom: "1rem", textAlign: "justify" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              AI models can accurately detect and classify various fault types, including short circuits, open circuits, overheating, and component aging, with high precision.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              The integration of multi-modal data (electrical and visual) significantly improves the robustness and reliability of fault diagnosis compared to single-source monitoring.
            </li>
            <li>
              The economic benefits (reduced downtime, lower maintenance costs) provide a strong business case that supports the initial investment.
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            <span className="font-bold">Benefits for Social Good:</span>
          </p>
          <ul style={{ marginLeft: "2rem", textAlign: "justify" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Public Safety:</span> Prevents failures in mission-critical electronics (e.g., medical devices, public transport controls), safeguarding human life and infrastructure.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Sustainability:</span> Reduces the volume of e-waste by extending product lifespan and enabling targeted repairs, aligning with global environmental goals.
            </li>
            <li>
              <span className="font-bold">Economic Welfare:</span> Increases manufacturing efficiency and competitiveness, leading to more stable employment and lower costs for consumers.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">5.2 IMPLEMENTATION PLAN</h3>
          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            A successful deployment of the AI-FDD system requires a structured, step-by-step approach:
          </p>

          <table className="w-full border-collapse" style={{ borderSpacing: "0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0", borderBottom: "2px solid #000" }}>
                <th style={{ padding: "0.5rem", textAlign: "left", fontWeight: "bold" }}>Step</th>
                <th style={{ padding: "0.5rem", textAlign: "left", fontWeight: "bold" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>1. Sensor Deployment</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Install and calibrate multi-modal sensors on target electronic systems. Establish a robust, high-speed data acquisition network.
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>2. Data Collection</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Collect a large, diverse dataset of both normal operational data and data corresponding to known fault conditions. Expert engineers must accurately label the fault data.
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>3. AI Model Training</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Train specialized models (CNN for images, ML/RNN for signals) on the labeled dataset. Validate the models' performance against unseen data to ensure high accuracy.
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>4. System Integration</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Integrate the trained AI model into the manufacturing execution system (MES). Develop the Alert System to provide real-time, actionable insights.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem", fontWeight: "bold", verticalAlign: "top" }}>5. Continuous Monitoring</td>
                <td style={{ padding: "0.5rem", textAlign: "justify" }}>
                  Deploy the system for live monitoring. Continuously collect new data to retrain and refine the AI models, ensuring they adapt to new component types and fault signatures.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderChapter6 = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">CHAPTER 6: CONCLUSION & FUTURE SCOPE</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">6.1 CONCLUSION AND SOCIETAL IMPACT</h3>
          <p style={{ textAlign: "justify" }}>
            The case for AI-Based Fault Detection in Electronics is compelling, demonstrating a powerful convergence of technological innovation and societal benefit. By enabling a proactive, predictive approach to maintenance, this system directly addresses the critical issues of industrial safety, operational efficiency, and environmental sustainability. The ability to predict and prevent failures with high accuracy (up to 95% detection rate) not only saves businesses millions in downtime and repair costs but, more importantly, enhances public welfare by ensuring the reliability of essential electronics and drastically reducing the flow of hazardous e-waste. This application of AI serves as a definitive model for how Artificial Intelligence can be leveraged as a force for Social Good, creating a safer, more sustainable, and economically efficient manufacturing ecosystem.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">6.2 FUTURE SCOPE</h3>
          <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
            Future research and development in this domain should focus on:
          </p>
          <ul style={{ marginLeft: "2rem", textAlign: "justify" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Explainable AI (XAI):</span> Developing models that can not only predict a fault but also clearly explain why the fault is predicted, increasing user trust and aiding in root cause analysis.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <span className="font-bold">Self-Healing Systems:</span> Integrating the AI-FDD system with automated control mechanisms to allow the electronic system to autonomously adjust parameters or isolate faulty components.
            </li>
            <li>
              <span className="font-bold">Standardization:</span> Developing industry-wide standards for sensor data collection and fault labeling to accelerate the adoption and transferability of AI-FDD models across different manufacturing sectors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderReferences = () => (
    <div className="min-h-screen bg-white text-black px-20 py-16 space-y-6" style={{ lineHeight: "1.5" }}>
      <h2 className="text-3xl font-bold mb-8">REFERENCES</h2>

      <div style={{ marginTop: "2rem" }}>
        <ol style={{ marginLeft: "2rem", textAlign: "justify" }}>
          <li style={{ marginBottom: "1rem" }}>
            Ethan, A., et al. (2025). "AI-Powered Fault Detection and Recovery in High-Availability Databases." <span className="italic">ResearchGate</span>. (Demonstrates up to 95% fault detection and 40% downtime reduction).
          </li>
          <li style={{ marginBottom: "1rem" }}>
            Rana, S. (2025). "AI-DRIVEN FAULT DETECTION AND PREDICTIVE MAINTENANCE IN ELECTRICAL SYSTEMS." <span className="italic">AJATES Scholarly</span>. (Discusses minimization of downtime and maintenance costs).
          </li>
          <li style={{ marginBottom: "1rem" }}>
            Olaniyi, O. (2025). "Autonomous Artificial Intelligence Agents for Fault Detection and Self-Healing in Smart Manufacturing Systems." <span className="italic">ResearchGate</span>. (Focuses on smart manufacturing and self-healing capabilities).
          </li>
          <li style={{ marginBottom: "1rem" }}>
            IEEE. (2024). "Smart manufacturing technology for environmental, social, and governance (ESG) sustainability." <span className="italic">IEEE Xplore</span>. (Highlights the role of smart manufacturing in worker safety and sustainability).
          </li>
          <li style={{ marginBottom: "1rem" }}>
            Leite, D., et al. (2024). "Fault detection and diagnosis in industry 4.0: a review on challenges and opportunities." <span className="italic">Sensors (Basel)</span>. (Provides a recent review of AI/ML in FDD for electronic systems).
          </li>
          <li>
            Zachariades, C. (2025). "A Review of Artificial Intelligence Techniques in Fault Diagnosis of Electric Machines." <span className="italic">PMC</span>. (Comprehensive review of AI techniques for fault diagnosis).
          </li>
        </ol>
      </div>
    </div>
  );

  const pages = [
    { id: "cover", label: "Cover Page", render: renderCoverPage },
    { id: "certificate", label: "Certificate", render: renderCertificate },
    { id: "acknowledgement", label: "Acknowledgement", render: renderAcknowledgement },
    { id: "abstract", label: "Abstract", render: renderAbstract },
    { id: "abbreviations", label: "Abbreviations", render: renderListOfAbbreviations },
    { id: "toc", label: "Table of Contents", render: renderTableOfContents },
    { id: "chapter1", label: "Chapter 1", render: renderChapter1 },
    { id: "chapter2", label: "Chapter 2", render: renderChapter2 },
    { id: "chapter3", label: "Chapter 3", render: renderChapter3 },
    { id: "chapter4", label: "Chapter 4", render: renderChapter4 },
    { id: "chapter5", label: "Chapter 5", render: renderChapter5 },
    { id: "chapter6", label: "Chapter 6", render: renderChapter6 },
    { id: "references", label: "References", render: renderReferences },
  ];

  const currentPageObj = pages.find((p) => p.id === currentPage);
  const currentPageIndex = pages.findIndex((p) => p.id === currentPage);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FileText className="w-6 h-6 text-gray-800" />
            <span className="font-bold text-lg text-gray-800">ASG Report Format</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Page {currentPageIndex + 1} of {pages.length}
            </span>
            <Button
              onClick={() => {
                const prevIndex = (currentPageIndex - 1 + pages.length) % pages.length;
                setCurrentPage(pages[prevIndex].id);
              }}
              variant="outline"
              size="sm"
            >
              ← Previous
            </Button>
            <Button
              onClick={() => {
                const nextIndex = (currentPageIndex + 1) % pages.length;
                setCurrentPage(pages[nextIndex].id);
              }}
              variant="outline"
              size="sm"
            >
              Next →
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Export PDF
            </Button>
          </div>
        </div>

        {/* Page Selector */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 overflow-x-auto flex gap-2">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-3 py-1 text-sm whitespace-nowrap rounded transition-colors ${
                currentPage === page.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {currentPageObj?.render()}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-8 flex justify-between items-center">
        <Button
          onClick={() => {
            const prevIndex = (currentPageIndex - 1 + pages.length) % pages.length;
            setCurrentPage(pages[prevIndex].id);
          }}
          variant="outline"
        >
          ← Previous Page
        </Button>
        <span className="text-gray-600 text-sm">
          {currentPageObj?.label} • Page {currentPageIndex + 1} of {pages.length}
        </span>
        <Button
          onClick={() => {
            const nextIndex = (currentPageIndex + 1) % pages.length;
            setCurrentPage(pages[nextIndex].id);
          }}
          variant="outline"
        >
          Next Page →
        </Button>
      </div>
    </div>
  );
}
