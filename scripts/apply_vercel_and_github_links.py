import os
import re

PORTFOLIO_FILE = r"d:\1.Antigravity Projects\1_My_WebSite\src\data\portfolioData.ts"

with open(PORTFOLIO_FILE, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Update ProjectItem interface
if "githubUrl?: string;" not in text:
    text = text.replace(
        "liveUrl?: string;\n  projectFolder?: string;",
        "liveUrl?: string;\n  githubUrl?: string;\n  projectFolder?: string;"
    )

# 2. Complete mapping with exact Vercel and GitHub links
PROJECT_LINKS = {
    # 1. LMS SaaS
    "lms-saas": {
        "liveUrl": "https://physics-academy.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/physics-academy"
    },
    # 2. Family Finance
    "family-finance": {
        "liveUrl": "https://family-money-manager.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/family-money-manager"
    },
    # 3. Geotechnical DCP Layer Analyzer
    "dcp-analyzer": {
        "liveUrl": "https://cec-road-rehabilitation-internship.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/cec-road-rehabilitation-internship"
    },
    # 4. Perovskite Stabilizer Predictor
    "perovskite-predictor": {
        "liveUrl": "https://solar-cell-ai-simulation-lab.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/solar-cell-ai-simulation-lab"
    },
    # 5. Smart MediBox
    "smart-medibox": {
        "liveUrl": "https://smart-medibox-iot-system.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/smart-medibox-iot-system"
    },
    # 6. SMART-BREEZE Fan System
    "smart-breeze": {
        "liveUrl": "https://smart-breeze-automated-fan.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/smart-breeze-automated-fan"
    },
    # 7. Adaptive AC Blinking System
    "adaptive-ac-blinker": {
        "liveUrl": "https://adaptive-iot-smart-relay.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/adaptive-iot-smart-relay"
    },
    # 8. Autonomous Arduino Car
    "autonomous-robot-car": {
        "liveUrl": "https://autonomous-arduino-rover.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/autonomous-arduino-rover"
    },
    # 9. Marine Propulsion Shaft (CDP)
    "marine-shaft-cdp": {
        "liveUrl": "https://marine-propulsion-shaft-design.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/marine-propulsion-shaft-design"
    },
    # 10. Lightweight Ferrocement Mortar (FYP)
    "ferrocement-mortar-fyp": {
        "liveUrl": "https://fyp-sustainable-eps-mortar.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/fyp-sustainable-eps-mortar"
    },
    # 11. FEA of Spur Gear Contact Mechanics
    "spur-gear-fea": {
        "liveUrl": "https://spur-gear-contact-fea-abaqus.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/spur-gear-contact-fea-abaqus"
    },
    # 12. Kinetics of PVC UV Stabilization
    "pvc-uv-stabilization": {
        "liveUrl": "https://pvc-degradation-calculator.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/pvc-degradation-calculator"
    },
    # 13. Perovskite Solar Cell Simulation (SCAPS-1D)
    "scaps-solar-simulation": {
        "liveUrl": "https://solar-cell-ai-simulation-lab.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/solar-cell-ai-simulation-lab"
    },
    # 14. Tunneling Field Effect Transistors (TFET)
    "tfet-quantum": {
        "liveUrl": "https://tfet-quantum-transistor-physics.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/tfet-quantum-transistor-physics"
    },
    # 15. XRD Analysis of Historical Paper
    "xrd-paper-analysis": {
        "liveUrl": "https://xrd-paper-deacidification-analysis.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/xrd-paper-deacidification-analysis"
    },
    # 16. Dental Implant Biomaterials
    "dental-implant-biomaterials": {
        "liveUrl": "https://premakumarahps.vercel.app/#portfolio",
        "githubUrl": "https://github.com/premakumarahps/my_site"
    },
    # 17. Graphene Supercapacitor
    "graphene-supercapacitor": {
        "liveUrl": "https://premakumarahps.vercel.app/#portfolio",
        "githubUrl": "https://github.com/premakumarahps/my_site"
    },
    # 18. Automotive Gearbox Mechanical Design
    "gearbox-design": {
        "liveUrl": "https://automotive-gearbox-machine-design.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/automotive-gearbox-machine-design"
    },
    # 19. Low-Cost Industrial Scissor Lift
    "scissor-lift-design": {
        "liveUrl": "https://low-cost-scissor-lift-design.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/low-cost-scissor-lift-design"
    },
    # 20. 304 Stainless Steel Door Handle Metallurgy
    "door-handle-metallurgy": {
        "liveUrl": "https://stainless-steel-door-handle-metallurgy.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/stainless-steel-door-handle-metallurgy"
    },
    # 21. Ferrocement Wall Panels Economic Viability
    "ferrocement-economic-viability": {
        "liveUrl": "https://fbca-ebca-eng-eco.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/fbca-ebca-eng-eco"
    },
    # 22. Thermodynamic Analysis of a Heat Sink
    "heat-sink-thermodynamics": {
        "liveUrl": "https://heat-sink-thermodynamic-analysis.vercel.app/",
        "githubUrl": "https://github.com/premakumarahps/heat-sink-thermodynamic-analysis"
    },
}

for pid, links in PROJECT_LINKS.items():
    pattern = rf'(id:\s*"{pid}",.*?)(fullReport:)'
    m = re.search(pattern, text, flags=re.DOTALL)
    if not m:
        print(f"Warning: could not find project {pid}")
        continue
    
    header = m.group(1)
    # Strip existing liveUrl and githubUrl
    header_clean = re.sub(r'\s*liveUrl:\s*"[^"]*",?', '', header)
    header_clean = re.sub(r'\s*githubUrl:\s*"[^"]*",?', '', header_clean)
    
    # Insert new liveUrl and githubUrl
    new_fields = f'\n    liveUrl: "{links["liveUrl"]}",\n    githubUrl: "{links["githubUrl"]}",\n    '
    new_header = header_clean.rstrip() + new_fields
    text = text.replace(header, new_header)
    print(f"Updated {pid} -> liveUrl={links['liveUrl']}")

with open(PORTFOLIO_FILE, "w", encoding="utf-8") as f:
    f.write(text)

print("SUCCESS: portfolioData.ts successfully updated with all exact Vercel and GitHub links.")
