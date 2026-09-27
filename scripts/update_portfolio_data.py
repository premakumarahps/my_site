import os
import re

PORTFOLIO_FILE = r"d:\1.Antigravity Projects\1_My_WebSite\src\data\portfolioData.ts"

with open(PORTFOLIO_FILE, "r", encoding="utf-8") as f:
    text = f.read()

# Mapping of project ID to image and liveUrl
PROJECT_UPDATES = {
    "lms-saas": {
        "image": "/images/projects/lms_platform.jpg",
        "liveUrl": "https://physics-academy.vercel.app/"
    },
    "family-finance": {
        "image": "/images/projects/family_finance.jpg",
        "liveUrl": "https://github.com/premakumarahps/18_Maker_Labs_and_Ventures"
    },
    "dcp-analyzer": {
        "image": "/images/projects/dcp_analyzer.jpg",
        "liveUrl": "https://github.com/premakumarahps/16_CEC_Internship"
    },
    "perovskite-predictor": {
        "image": "/images/projects/perovskite_predictor.jpg",
        "liveUrl": "https://github.com/premakumarahps/17_Solar_Cell_AI_Simulation_Lab"
    },
    "smart-medibox": {
        "image": "/images/projects/smart_medibox.jpg",
        "liveUrl": "https://github.com/premakumarahps/7_Smart_Medibox_IoT_Health_System"
    },
    "smart-breeze": {
        "image": "/images/projects/smart_breeze.jpg",
        "liveUrl": "https://github.com/premakumarahps/4_Smart_Breeze_Automated_Fan"
    },
    "adaptive-ac-blinker": {
        "image": "/images/projects/adaptive_ac_blinker.jpg",
        "liveUrl": "https://github.com/premakumarahps/18_Maker_Labs_and_Ventures"
    },
    "autonomous-robot-car": {
        "image": "/images/projects/autonomous_robot_car.jpg",
        "liveUrl": "https://github.com/premakumarahps/18_Maker_Labs_and_Ventures"
    },
    "marine-shaft-cdp": {
        "image": "/images/projects/marine_shaft.jpg",
        "liveUrl": "https://github.com/premakumarahps/12_Marine_Propeller_Shaft_Design"
    },
    "ferrocement-mortar-fyp": {
        "image": "/images/projects/fyp_mortar.jpg",
        "liveUrl": "https://github.com/premakumarahps/14_Final_Year_Project"
    },
    "spur-gear-fea": {
        "image": "/images/projects/abaqus_gear.jpg",
        "liveUrl": "https://github.com/premakumarahps/13_Abaqus_Simulation"
    },
    "pvc-uv-stabilization": {
        "image": "/images/projects/pvc_stabilization.jpg",
        "liveUrl": "https://github.com/premakumarahps/3_PVC_Degradation_Calculator"
    },
    "scaps-solar-simulation": {
        "image": "/images/projects/scaps_solar_simulation.jpg",
        "liveUrl": "https://github.com/premakumarahps/17_Solar_Cell_AI_Simulation_Lab"
    },
    "tfet-quantum": {
        "image": "/images/projects/tfet_quantum.jpg",
        "liveUrl": "https://github.com/premakumarahps/8_TFET_Quantum_Transistor_Solid_State"
    },
    "xrd-paper-analysis": {
        "image": "/images/projects/xrd_paper.jpg",
        "liveUrl": "https://github.com/premakumarahps/11_XRD_Analysis_Research_Review"
    },
    "dental-implant-biomaterials": {
        "image": "/images/projects/dental_implant.jpg",
        "liveUrl": "https://github.com/premakumarahps/my_site"
    },
    "graphene-supercapacitor": {
        "image": "/images/projects/graphene_supercapacitor.jpg",
        "liveUrl": "https://github.com/premakumarahps/my_site"
    },
    "gearbox-design": {
        "image": "/images/projects/industrial_gearbox.jpg",
        "liveUrl": "https://github.com/premakumarahps/10_Industrial_Gearbox_Design"
    },
    "scissor-lift-design": {
        "image": "/images/projects/scissor_lift.jpg",
        "liveUrl": "https://github.com/premakumarahps/9_Low_Cost_Scissor_Lift_Mechanism"
    },
    "door-handle-metallurgy": {
        "image": "/images/projects/door_handle.jpg",
        "liveUrl": "https://github.com/premakumarahps/6_Door_Handle_Design_and_Heat_Treatment"
    },
    "ferrocement-economic-viability": {
        "image": "/images/projects/ferrocement_panels.jpg",
        "liveUrl": "https://github.com/premakumarahps/15_Engineering_Economics"
    },
    "heat-sink-thermodynamics": {
        "image": "/images/projects/heat_sink.jpg",
        "liveUrl": "https://github.com/premakumarahps/5_Heat_Sink_Thermodynamic_Analysis"
    },
}

for pid, updates in PROJECT_UPDATES.items():
    # Find block starting with id: "pid"
    pattern = rf'(id:\s*"{pid}",.*?)(fullReport:)'
    m = re.search(pattern, text, flags=re.DOTALL)
    if not m:
        print(f"Warning: could not find project {pid}")
        continue
    
    header = m.group(1)
    # Remove existing image and liveUrl lines if any
    header_clean = re.sub(r'\s*image:\s*"[^"]*",?', '', header)
    header_clean = re.sub(r'\s*liveUrl:\s*"[^"]*",?', '', header_clean)
    
    # Append clean image and liveUrl
    new_fields = f'\n    image: "{updates["image"]}",\n    liveUrl: "{updates["liveUrl"]}",\n    '
    new_header = header_clean.rstrip() + new_fields
    text = text.replace(header, new_header)
    print(f"Updated {pid} -> image={updates['image']}")

with open(PORTFOLIO_FILE, "w", encoding="utf-8") as f:
    f.write(text)

print("SUCCESS: portfolioData.ts updated with all 22 images and URLs.")
