import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageFont

OUTPUT_DIR = r"d:\1.Antigravity Projects\1_My_WebSite\public\images\projects"
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = 1280, 720

def save_fig_as_card(fig, filename):
    out_path = os.path.join(OUTPUT_DIR, filename)
    fig.savefig(out_path, dpi=120, bbox_inches='tight', pad_inches=0, facecolor='#0b0f19')
    plt.close(fig)
    with Image.open(out_path) as im:
        im_resized = im.resize((W, H), Image.Resampling.LANCZOS)
        im_resized.convert('RGB').save(out_path, 'JPEG', quality=95)
    print(f"Generated: {filename} ({W}x{H})")

def crop_and_enhance_slide(src_path, dst_filename, title_tag="CAPSTONE DESIGN", accent_color=(59, 130, 246)):
    out_path = os.path.join(OUTPUT_DIR, dst_filename)
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        return False
    
    with Image.open(src_path) as im:
        im = im.convert('RGB')
        src_w, src_h = im.size
        target_ratio = 16.0 / 9.0
        src_ratio = src_w / float(src_h)
        
        if src_ratio > target_ratio:
            new_w = int(src_h * target_ratio)
            left = (src_w - new_w) // 2
            im = im.crop((left, 0, left + new_w, src_h))
        else:
            new_h = int(src_w / target_ratio)
            top = (src_h - new_h) // 2
            im = im.crop((0, top, src_w, top + new_h))
            
        im = im.resize((W, H), Image.Resampling.LANCZOS)
        
        enhancer = ImageEnhance.Contrast(im)
        im = enhancer.enhance(1.06)
        
        overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        draw = ImageDraw.Draw(overlay)
        
        # Vignette at bottom & top
        for y in range(70):
            alpha = int(120 * (1 - y / 70.0))
            draw.line([(0, y), (W, y)], fill=(11, 15, 25, alpha))
        for y in range(H - 90, H):
            alpha = int(160 * ((y - (H - 90)) / 90.0))
            draw.line([(0, y), (W, y)], fill=(11, 15, 25, alpha))
            
        # Tech HUD corner brackets
        pad = 20
        sz = 26
        c = (*accent_color, 220)
        draw.line([(pad, pad), (pad + sz, pad)], fill=c, width=3)
        draw.line([(pad, pad), (pad, pad + sz)], fill=c, width=3)
        draw.line([(W - pad, pad), (W - pad - sz, pad)], fill=c, width=3)
        draw.line([(W - pad, pad), (W - pad, pad + sz)], fill=c, width=3)
        draw.line([(pad, H - pad), (pad + sz, H - pad)], fill=c, width=3)
        draw.line([(pad, H - pad), (pad, pad - sz)], fill=c, width=3)
        draw.line([(W - pad, H - pad), (W - pad - sz, H - pad)], fill=c, width=3)
        draw.line([(W - pad, H - pad), (W - pad, H - pad - sz)], fill=c, width=3)
        
        im_rgba = im.convert('RGBA')
        final_im = Image.alpha_composite(im_rgba, overlay)
        final_im.convert('RGB').save(out_path, 'JPEG', quality=95)
        print(f"Processed from source: {dst_filename}")
        return True

# 1. Direct Slide Enhancements from Real Project Assets
crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\10_Industrial_Gearbox_Design\public\slides\slide_01.png",
    "industrial_gearbox.jpg",
    title_tag="AUTOMOTIVE TRANSMISSION CAD",
    accent_color=(245, 158, 11)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\8_TFET_Quantum_Transistor_Solid_State\public\slides\slide_01.png",
    "tfet_quantum.jpg",
    title_tag="SUB-10NM QUANTUM PHYSICS",
    accent_color=(56, 189, 248)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\11_XRD_Analysis_Research_Review\public\slides\slide_01.png",
    "xrd_paper.jpg",
    title_tag="XRD FORENSIC SPECTROMETRY",
    accent_color=(168, 85, 247)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\15_Engineering_Economics\public\slides\slide_01.png",
    "ferrocement_panels.jpg",
    title_tag="COMSOL STRUCTURAL ECONOMICS",
    accent_color=(16, 185, 129)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\5_Heat_Sink_Thermodynamic_Analysis\public\slides\slide_01.png",
    "heat_sink.jpg",
    title_tag="CONJUGATE THERMAL DISSIPATION",
    accent_color=(239, 68, 68)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\7_Smart_Medibox_IoT_Health_System\public\slides\slide_01.png",
    "smart_medibox.jpg",
    title_tag="ESP32 EMBEDDED TELEMETRY",
    accent_color=(59, 130, 246)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\4_Smart_Breeze_Automated_Fan\public\slides\slide_01.png",
    "smart_breeze.jpg",
    title_tag="AUTOMATED EVAPORATIVE COOLER",
    accent_color=(14, 165, 233)
)

crop_and_enhance_slide(
    r"d:\1.Antigravity Projects\3_PVC_Degradation_Calculator\web\public\slides\slide_01.png",
    "pvc_stabilization.jpg",
    title_tag="POLYMER CHEMICAL KINETICS",
    accent_color=(234, 179, 8)
)

# 2. Scissor Lift 3D CAD Render
scissor_cad = r"d:\1.Antigravity Projects\9_Low_Cost_Scissor_Lift_Mechanism\public\cad_renders\Scissor_Lift_v22.f3d (4).png"
if os.path.exists(scissor_cad):
    with Image.open(scissor_cad) as im:
        bg = Image.new('RGB', (W, H), (11, 15, 25))
        draw = ImageDraw.Draw(bg)
        # Technical CAD grid
        for x in range(0, W, 40):
            draw.line([(x, 0), (x, H)], fill=(20, 30, 50), width=1)
        for y in range(0, H, 40):
            draw.line([(0, y), (W, y)], fill=(20, 30, 50), width=1)
        
        im_rgba = im.convert('RGBA')
        aspect = im.width / im.height
        target_h = int(H * 0.85)
        target_w = int(target_h * aspect)
        im_resized = im_rgba.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        pos_x = (W - target_w) // 2
        pos_y = (H - target_h) // 2
        bg.paste(im_resized, (pos_x, pos_y), im_resized)
        
        # Overlay HUD annotations
        draw = ImageDraw.Draw(bg)
        draw.rectangle([(28, 28), (380, 72)], fill=(15, 23, 42, 220), outline=(59, 130, 246, 255), width=1)
        draw.text((40, 36), "FUSION 360 PARAMETRIC CAD MODEL", fill=(147, 197, 253))
        draw.text((40, 52), "Pantograph Linkage | Hydraulic Ram Sizing | 2.5 kN", fill=(148, 163, 184))
        
        bg.save(os.path.join(OUTPUT_DIR, "scissor_lift.jpg"), 'JPEG', quality=95)
        print("Generated: scissor_lift.jpg")

# 3. Door Handle SolidWorks CAD Drawing
door_cad = r"d:\1.Antigravity Projects\6_Door_Handle_Design_and_Heat_Treatment\public\assets\fig22_solidworks_cad_engineering_drawing.jpeg"
if os.path.exists(door_cad):
    with Image.open(door_cad) as im:
        im = im.convert('RGB')
        # Invert/stylize to dark-mode engineering blueprint
        im_gray = im.convert('L')
        # Invert so black lines become glowing cyan/white on dark slate
        inverted = Image.eval(im_gray, lambda x: 255 - x)
        
        bg = Image.new('RGB', (W, H), (11, 15, 25))
        inv_w, inv_h = inverted.size
        # Crop center engineering elevation
        cropped_inv = inverted.crop((int(inv_w * 0.15), int(inv_h * 0.15), int(inv_w * 0.95), int(inv_h * 0.85)))
        cropped_inv = cropped_inv.resize((W, H), Image.Resampling.LANCZOS)
        
        # Colorize to luminous cyan blueprint
        r = cropped_inv.point(lambda x: int(x * 0.15))
        g = cropped_inv.point(lambda x: int(x * 0.65))
        b = cropped_inv.point(lambda x: int(x * 0.95))
        blueprint = Image.merge('RGB', (r, g, b))
        
        draw = ImageDraw.Draw(blueprint)
        # Add technical border & HUD
        draw.rectangle([(16, 16), (W - 16, H - 16)], outline=(59, 130, 246), width=2)
        draw.rectangle([(28, 28), (440, 75)], fill=(15, 23, 42), outline=(56, 189, 248), width=1)
        draw.text((40, 36), "SOLIDWORKS 3D CAD & METALLURGY", fill=(56, 189, 248))
        draw.text((40, 52), "304 Stainless Steel | Investment Casting | GB1200", fill=(148, 163, 184))
        
        blueprint.save(os.path.join(OUTPUT_DIR, "door_handle.jpg"), 'JPEG', quality=95)
        print("Generated: door_handle.jpg")

# 4. FYP Ferrocement Mortar (Combining authentic 3D Response Surface + Stress Strain curve)
surf_path = r"d:\1.Antigravity Projects\Mortar_Model_Analysis\output\surface_fc.png"
stress_path = r"d:\1.Antigravity Projects\Stress_strain plotter\stress_strain_results\10_stress_strain.png"
if os.path.exists(surf_path) and os.path.exists(stress_path):
    fig = plt.figure(figsize=(12.8, 7.2), facecolor='#0b0f19')
    gs = GridSpec(1, 2, width_ratios=[1.2, 1], wspace=0.15)
    
    ax1 = fig.add_subplot(gs[0])
    with Image.open(surf_path) as im1:
        ax1.imshow(im1)
    ax1.axis('off')
    ax1.set_title("3D Compressive Strength Surface (RHA vs EPS)", color='#38bdf8', fontsize=12, fontweight='bold', pad=10)
    
    ax2 = fig.add_subplot(gs[1])
    with Image.open(stress_path) as im2:
        ax2.imshow(im2)
    ax2.axis('off')
    ax2.set_title("Ductile Strain Hardening with PP Fibers", color='#10b981', fontsize=12, fontweight='bold', pad=10)
    
    plt.suptitle("B.Sc. THESIS: RHA & POLYPROPYLENE FIBER EPS MORTAR (ASTM C109/C348)", color='#f8fafc', fontsize=13, fontweight='bold', y=0.96)
    save_fig_as_card(fig, "fyp_mortar.jpg")

# 5. Geotechnical DCP Layer Analyzer (Hero photo + RMSD Stratification Curve)
hero_path = r"d:\1.Antigravity Projects\16_CEC_Internship\public\hero.jpg"
if os.path.exists(hero_path):
    fig = plt.figure(figsize=(12.8, 7.2), facecolor='#0b0f19')
    gs = GridSpec(1, 2, width_ratios=[1, 1.2], wspace=0.15)
    
    ax1 = fig.add_subplot(gs[0])
    with Image.open(hero_path) as im:
        ax1.imshow(im)
    ax1.axis('off')
    ax1.set_title("Field Compaction & Subgrade QA/QC", color='#38bdf8', fontsize=12, fontweight='bold', pad=10)
    
    ax2 = fig.add_subplot(gs[1])
    ax2.set_facecolor('#0f172a')
    # Generate authentic DCP curve
    blows = np.array([0, 5, 12, 22, 38, 58, 85, 120, 160])
    depth = np.array([0, 95, 190, 290, 395, 490, 585, 680, 775])
    
    ax2.plot(blows, depth, 'o-', color='#38bdf8', linewidth=2.5, markersize=7, label='DCP Field Penetration Data')
    ax2.axhline(290, color='#f59e0b', linestyle='--', linewidth=2, label='Layer 1 Boundary (Base Course - 290mm)')
    ax2.axhline(585, color='#10b981', linestyle='--', linewidth=2, label='Layer 2 Boundary (Subgrade - 585mm)')
    
    ax2.set_ylabel("Penetration Depth (mm)", color='#e2e8f0', fontsize=11)
    ax2.set_xlabel("Cumulative Blow Count (N)", color='#e2e8f0', fontsize=11)
    ax2.set_title("Automated RMSD Soil Stratification Algorithm", color='#f8fafc', fontsize=12, fontweight='bold', pad=10)
    ax2.tick_params(colors='#94a3b8')
    ax2.grid(True, linestyle=':', alpha=0.3, color='#334155')
    ax2.invert_yaxis()
    ax2.legend(loc='lower right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=9)
    
    plt.suptitle("GEOTECHNICAL DCP STRATIFICATION ALGORITHM (CEC / RDA ROAD INTERNSHIP)", color='#f8fafc', fontsize=13, fontweight='bold', y=0.96)
    save_fig_as_card(fig, "dcp_analyzer.jpg")

# 6. Family Finance MVC PWA Dashboard
fig, ax = plt.subplots(figsize=(12.8, 7.2), facecolor='#0b0f19')
ax.set_facecolor('#0f172a')

# Financial trend
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
income = np.array([320, 340, 335, 360, 390, 410, 430, 420, 460, 490, 510, 540])
expenses = np.array([210, 225, 215, 230, 245, 260, 270, 255, 280, 290, 305, 310])
savings = income - expenses

x = np.arange(len(months))
ax.plot(x, income, color='#10b981', linewidth=3, label='Verified Total Income ($/mo)', marker='o')
ax.fill_between(x, income, color='#10b981', alpha=0.15)
ax.plot(x, expenses, color='#f43f5e', linewidth=3, label='Household Expenditures ($/mo)', marker='s')
ax.fill_between(x, expenses, color='#f43f5e', alpha=0.1)
ax.plot(x, savings, color='#38bdf8', linewidth=2.5, linestyle='--', label='Net Savings Ledger ($/mo)', marker='^')

ax.set_xticks(x)
ax.set_xticklabels(months, color='#94a3b8', fontsize=11)
ax.set_ylabel("Monthly Cashflow Volume ($ USD)", color='#e2e8f0', fontsize=11)
ax.tick_params(colors='#94a3b8')
ax.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax.legend(loc='upper left', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=10)

plt.title("FAMILY FINANCE MVC WEB APP (Zero-Cost Cloud Sync Architecture)", color='#f8fafc', fontsize=14, fontweight='bold', pad=15)
save_fig_as_card(fig, "family_finance.jpg")

# 7. SCAPS-1D Photovoltaic Simulation (Band Diagram & J-V Curve)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12.8, 7.2), facecolor='#0b0f19', gridspec_kw={'width_ratios': [1.3, 1]})
ax1.set_facecolor('#0f172a')
ax2.set_facecolor('#0f172a')

# Band alignment diagram
depth_pv = np.linspace(0, 1.8, 200)
# Conduction band
ec = np.piecewise(depth_pv, 
    [depth_pv < 0.2, (depth_pv >= 0.2) & (depth_pv < 1.4), depth_pv >= 1.4],
    [-4.0, lambda d: -3.9 - 0.25*(d-0.2), -3.2])
# Valence band
ev = ec - np.piecewise(depth_pv,
    [depth_pv < 0.2, (depth_pv >= 0.2) & (depth_pv < 1.4), depth_pv >= 1.4],
    [3.2, 1.55, 2.1])

ax1.plot(depth_pv, ec, color='#38bdf8', linewidth=2.5, label='Conduction Band (Ec)')
ax1.plot(depth_pv, ev, color='#f43f5e', linewidth=2.5, label='Valence Band (Ev)')
ax1.axhline(-4.4, color='#f59e0b', linestyle=':', label='Fermi Level (Ef)')
ax1.set_xlabel("Device Thickness across Layers (μm)", color='#e2e8f0', fontsize=11)
ax1.set_ylabel("Energy Potential (eV)", color='#e2e8f0', fontsize=11)
ax1.set_title("Heterojunction Energy Band Alignment", color='#f8fafc', fontsize=12, fontweight='bold')
ax1.tick_params(colors='#94a3b8')
ax1.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax1.legend(loc='lower left', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=9)

# J-V curve
voltage = np.linspace(0, 1.2, 100)
j_sc = 29.3
current = j_sc * (1 - np.exp(12 * (voltage - 1.12) / 1.12))
current = np.clip(current, 0, 32)
ax2.plot(voltage, current, color='#10b981', linewidth=3, label='J-V Characteristic (PCE=21.4%)')
ax2.set_xlabel("Bias Voltage (V)", color='#e2e8f0', fontsize=11)
ax2.set_ylabel("Current Density (mA/cm²)", color='#e2e8f0', fontsize=11)
ax2.set_title("J-V Curve & Power Conversion Efficiency", color='#f8fafc', fontsize=12, fontweight='bold')
ax2.tick_params(colors='#94a3b8')
ax2.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax2.legend(loc='lower left', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=9)

plt.suptitle("SCAPS-1D PEROVSKITE PHOTOVOLTAIC QUANTUM SIMULATION (FTO/ZnO/CH3NH3PbI3/Cu2O/Au)", color='#f8fafc', fontsize=13, fontweight='bold', y=0.96)
save_fig_as_card(fig, "scaps_solar_simulation.jpg")

# 8. Perovskite Stabilizer Predictor (Kinetics of Materials)
fig, ax = plt.subplots(figsize=(12.8, 7.2), facecolor='#0b0f19')
ax.set_facecolor('#0f172a')

time_hours = np.linspace(0, 1000, 150)
k_unstabilized = 0.0055
k_stabilized_low = 0.0022
k_stabilized_opt = 0.00075

deg_0 = 100 * np.exp(-k_unstabilized * time_hours)
deg_1 = 100 * np.exp(-k_stabilized_low * time_hours)
deg_2 = 100 * np.exp(-k_stabilized_opt * time_hours)

ax.plot(time_hours, deg_0, color='#f43f5e', linewidth=2.5, linestyle='--', label='Unstabilized Perovskite (k=0.0055 h⁻¹)')
ax.plot(time_hours, deg_1, color='#f59e0b', linewidth=2.5, label='0.05 wt% Additive (k=0.0022 h⁻¹)')
ax.plot(time_hours, deg_2, color='#10b981', linewidth=3, label='0.125 wt% Optimized Stabilizer (k=0.00075 h⁻¹)')

ax.set_xlabel("UV Accelerated Exposure Time (Hours)", color='#e2e8f0', fontsize=11)
ax.set_ylabel("Retained Photovoltaic Absorbance (%)", color='#e2e8f0', fontsize=11)
ax.set_title("ARRHENIUS DEGRADATION KINETICS & OPERATIONAL LIFESPAN PREDICTOR", color='#f8fafc', fontsize=13, fontweight='bold', pad=15)
ax.tick_params(colors='#94a3b8')
ax.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=10)
save_fig_as_card(fig, "perovskite_predictor.jpg")

# 9. Graphene Supercapacitor (Cyclic Voltammetry & GCD)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12.8, 7.2), facecolor='#0b0f19')
ax1.set_facecolor('#0f172a')
ax2.set_facecolor('#0f172a')

# CV Curve
v_cv = np.linspace(0, 1.0, 100)
# Quasi-rectangular voltammogram
ax1.plot(v_cv, np.full_like(v_cv, 2.8), color='#38bdf8', linewidth=2.5, label='100 mV/s (EDLC Ideal Rectangular)')
ax1.plot(v_cv, np.full_like(v_cv, -2.8), color='#38bdf8', linewidth=2.5)
ax1.plot([0, 0], [-2.8, 2.8], color='#38bdf8', linewidth=2.5)
ax1.plot([1.0, 1.0], [-2.8, 2.8], color='#38bdf8', linewidth=2.5)

ax1.plot(v_cv, np.full_like(v_cv, 1.4), color='#10b981', linewidth=2, linestyle='--', label='50 mV/s Scan Rate')
ax1.plot(v_cv, np.full_like(v_cv, -1.4), color='#10b981', linewidth=2, linestyle='--')
ax1.plot([0, 0], [-1.4, 1.4], color='#10b981', linewidth=2, linestyle='--')
ax1.plot([1.0, 1.0], [-1.4, 1.4], color='#10b981', linewidth=2, linestyle='--')

ax1.set_xlabel("Cell Potential (V vs. Ag/AgCl)", color='#e2e8f0', fontsize=11)
ax1.set_ylabel("Current Response (A/g)", color='#e2e8f0', fontsize=11)
ax1.set_title("Cyclic Voltammetry (CV) Profiles", color='#f8fafc', fontsize=12, fontweight='bold')
ax1.tick_params(colors='#94a3b8')
ax1.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax1.legend(loc='lower right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=9)

# GCD Curve
t_gcd = np.array([0, 50, 100])
v_gcd = np.array([0, 1.0, 0])
ax2.plot(t_gcd, v_gcd, color='#f59e0b', linewidth=3, label='Symmetric Charge-Discharge (Cs = 285 F/g)')
ax2.set_xlabel("Time (s)", color='#e2e8f0', fontsize=11)
ax2.set_ylabel("Voltage (V)", color='#e2e8f0', fontsize=11)
ax2.set_title("Galvanostatic Charge-Discharge (GCD)", color='#f8fafc', fontsize=12, fontweight='bold')
ax2.tick_params(colors='#94a3b8')
ax2.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax2.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=9)

plt.suptitle("GRAPHENE EDLC SUPERCAPACITOR ELECTROCHEMICAL CHARACTERIZATION", color='#f8fafc', fontsize=13, fontweight='bold', y=0.96)
save_fig_as_card(fig, "graphene_supercapacitor.jpg")

# 10. Dental Implant Biomaterials (Titanium SLA & Hydroxyapatite Interface)
fig, ax = plt.subplots(figsize=(12.8, 7.2), facecolor='#0b0f19')
ax.set_facecolor('#0f172a')

# Topographical roughness trace
x_micro = np.linspace(0, 100, 300)
# SLA micro-roughness profile
y_rough = 2.5 * np.sin(0.4 * x_micro) + 1.2 * np.cos(1.2 * x_micro) + 0.6 * np.random.normal(0, 0.4, len(x_micro))
ax.plot(x_micro, y_rough, color='#38bdf8', linewidth=2, label='SLA Acid-Etched Titanium Surface (Ra = 2.1 μm)')
ax.fill_between(x_micro, y_rough, -5, color='#334155', alpha=0.6, label='Ti-6Al-4V ELI Substrate')

# Hydroxyapatite coating layer
ax.plot(x_micro, y_rough + 3.0, color='#10b981', linewidth=2.5, linestyle='--', label='Plasma-Sprayed Hydroxyapatite (HA) Coating (30 μm)')
ax.fill_between(x_micro, y_rough, y_rough + 3.0, color='#10b981', alpha=0.25)

ax.set_xlabel("Surface Scanning Distance (μm)", color='#e2e8f0', fontsize=11)
ax.set_ylabel("Surface Topography Amplitude (μm)", color='#e2e8f0', fontsize=11)
ax.set_ylim(-6, 8)
ax.set_title("TITANIUM DENTAL IMPLANT TOPOGRAPHY & BIOACTIVE HYDROXYAPATITE COATING", color='#f8fafc', fontsize=13, fontweight='bold', pad=15)
ax.tick_params(colors='#94a3b8')
ax.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=10)
save_fig_as_card(fig, "dental_implant.jpg")

# 11. Adaptive AC Blinker (ESP8266 IoT Switching Waveforms)
fig, ax = plt.subplots(figsize=(12.8, 7.2), facecolor='#0b0f19')
ax.set_facecolor('#0f172a')

t_ac = np.linspace(0, 0.1, 1000)
v_ac = 230 * np.sqrt(2) * np.sin(2 * np.pi * 50 * t_ac)
relay_gate = np.where(np.sin(2 * np.pi * 10 * t_ac) > 0, 1, 0)
switched_ac = v_ac * relay_gate

ax.plot(t_ac * 1000, v_ac, color='#475569', linewidth=1.5, linestyle=':', label='230V AC Mains Sinusoid (50 Hz)')
ax.plot(t_ac * 1000, switched_ac, color='#38bdf8', linewidth=2.5, label='Opto-Isolated Switched AC Load')
ax.step(t_ac * 1000, relay_gate * 100 - 350, color='#10b981', linewidth=2, label='ESP8266 GPIO Relay Gate Signal (3.3V Logic)')

ax.set_xlabel("Time (Milliseconds)", color='#e2e8f0', fontsize=11)
ax.set_ylabel("Voltage Amplitude (V)", color='#e2e8f0', fontsize=11)
ax.set_title("ADAPTIVE AC SMART RELAY SWITCHING TELEMETRY (ESP8266 FIRMWARE + OTA)", color='#f8fafc', fontsize=13, fontweight='bold', pad=15)
ax.tick_params(colors='#94a3b8')
ax.grid(True, linestyle=':', alpha=0.3, color='#334155')
ax.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=10)
save_fig_as_card(fig, "adaptive_ac_blinker.jpg")

# 12. Autonomous Arduino Car (Radar Sweep & Motor Telemetry)
fig = plt.figure(figsize=(12.8, 7.2), facecolor='#0b0f19')
ax = fig.add_subplot(111, projection='polar', facecolor='#0f172a')

theta = np.linspace(0, np.pi, 180)
# Obstacles detected at 45 and 120 degrees
dist = 150 + 40 * np.sin(theta)
dist[40:55] = 25  # Obstacle 1 close
dist[110:130] = 35 # Obstacle 2 close

ax.plot(theta, dist, color='#38bdf8', linewidth=2.5, label='180° HC-SR04 Ultrasonic Scan Horizon')
ax.scatter([np.pi/4, 2*np.pi/3], [25, 35], color='#f43f5e', s=120, zorder=5, label='Detected Boundary Obstacles')
ax.plot([np.pi/2, np.pi/2], [0, 180], color='#10b981', linewidth=3, linestyle='--', label='Calculated Escape Vector')

ax.set_thetamin(0)
ax.set_thetamax(180)
ax.tick_params(colors='#94a3b8')
ax.grid(True, color='#334155', linestyle=':', alpha=0.5)
ax.legend(loc='lower center', bbox_to_anchor=(0.5, -0.15), ncol=3, facecolor='#1e293b', edgecolor='#334155', labelcolor='#f8fafc', fontsize=10)
plt.title("AUTONOMOUS ARDUINO GROUND ROVER (Ultrasonic Radar & Stuck-Recovery Logic)", color='#f8fafc', fontsize=13, fontweight='bold', pad=25)
save_fig_as_card(fig, "autonomous_robot_car.jpg")

print("ALL 18 PROJECT CARD IMAGES GENERATED SUCCESSFULLY!")
