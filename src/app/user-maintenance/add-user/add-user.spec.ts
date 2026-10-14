@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:host {
  display: block;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --bg-app: #f4f6fa;
  --nav-dark: #002d5b;
  --text-dark: #000000;
  --border-subtle: #dce4ee;
  --border-light: #eef2f6;
  --green-active: #00b374;
  --green-bg: #e6f9f0;
  --red-inactive: #f43f5e;
  --red-bg: #ffebee;
  --amber-status: #f59e0b;
}

* { box-sizing: border-box; }

.maintenance-wrapper {
  background-color: var(--bg-app);
  min-height: 100vh;
  width: 100%;
}

.navbar {
  background-color: var(--nav-dark);
  color: #ffffff;
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nav-left, .nav-right { display: flex; align-items: center; gap: 16px; }
.brand-logo { font-size: 32px; font-family: 'Big Caslon', Medium; width: 158px; height: 38px; font-weight: 500; color: #ffffff; opacity: 1; align-items: center; display: flex; justify-content: center; }
.menu-btn, .nav-icon-btn { color: #ffffff !important; font-size: 18px; height: 48px; opacity: 1; background: transparent; }
.nav-icon-svg { vertical-align: middle; display: inline-block; }
.user-profile { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px; color: #ffffff; font-weight: 500; }
.user-profile .user-name { font-family: 'Poppins', sans-serif !important; font-size: 14px; display: flex; align-items: center; gap: 6px; color: #ffffff !important; }
.nav-avatar-img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

.page-container {
  width: 100%;
  padding: 18px 28px 40px;
}
.breadcrumb { font-size: 12px; color: #707070; margin-bottom: 12px; font-weight: 300; }
.breadcrumb span { font-weight: 300; color: #707070; }

.header-action-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.page-title-group { display: flex; align-items: center; gap: 12px; }
.icon-back-btn { font-size: 18px; cursor: pointer; color: #0f172a; }
.page-main-title { font-family: 'Poppins', sans-serif !important; font-size: 24px; font-weight: 600; color: #000000; margin: 0; }

.form-card-container {
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid var(--border-light);
  padding: 32px 36px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.form-top-row {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

/* Photo Upload Box */
.photo-upload-panel {
  flex: 0 0 190px;
  width: 190px;
}

.photo-frame {
  margin-left: 50px;
  width: 190px;
  height: 210px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);
  border: 1px solid #e2e8f0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: visible;
}

.photo-uploaded-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.photo-placeholder-content {
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.img-landscape-ic { font-size: 44px; color: #b0bec5; }
.no-img-text { font-size: 13px; color: #94a3b8; font-weight: 500; line-height: 1.3; }

/* Unified Pill Container for Edit and Delete */
.photo-action-pill-box {
    height: 82px;
    width: 46px;
    position: absolute;
    top: -1px;
    right: 0px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
    border: 1px solid #e2e8f0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
}

.action-pill-btn {
    width: 45px;
    height: 37px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    transition: background-color 0.15s ease;
}

.action-pill-btn:hover { background-color: #f1f5f9; }
.action-pill-btn.edit-btn { color: #004c97; font-size: 13px; }
.action-pill-btn.delete-btn { color: #ef4444; }

.pill-divider {
  width: 18px;
  height: 1px;
  background-color: #e2e8f0;
  margin: 3px 0;
}

.svg-delete-ic {
  width: 14px;
  height: 14px;
}

/* 3x3 Grid */
.primary-fields-grid {
  display: grid;
  margin-left: 90px;
  grid-template-columns: repeat(3, 280px);
  gap: 16px 20px;
}

.custom-field-box.xd-field {
  width: 280px;
  font-size: 1px;
  height: 50px;
  background: #FFFEFE;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 14px;
}

.custom-field-box label {
  position: absolute;
  top: 18px;
  left: 12px;
  background: #ffffff;
  padding: 0 4px;
  font-size: 11px;
  font-weight: 500;
  color: #707e94;
  line-height: 1;
  z-index: 2;
}

.custom-field-box input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #1e293b;
}

.custom-field-box.with-select select {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: #1e293b;
  appearance: none;
  cursor: pointer;
}

.select-chevron {
  position: absolute;
  right: 12px;
  font-size: 11px;
  color: #94a3b8;
  pointer-events: none;
}

/* Entity Code & Bank Code Custom Background */
.custom-field-box.custom-bg-box {
  background-color: #F2F4F7 !important;
  border-color: #D0D5DD !important;
}

.custom-field-box.custom-bg-box label {
  background-color: #F2F4F7 !important;
}

.custom-field-box.custom-bg-box select {
  background: transparent !important;
}

/* Mobile Unified Box */
.mobile-unified-box {
  width: 280px !important;
  height: 50px !important;
  background: #FFFEFE !important;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09) !important;
  border-radius: 8px !important;
  border: none !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  padding: 0 14px !important;
  box-sizing: border-box !important;
  position: relative !important;
}

.country-code-wrapper {
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 6px !important;
  white-space: nowrap !important;
  flex-shrink: 0 !important;
  user-select: none;
}

.country-code-text {
  font-family: 'Poppins', sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #102245 !important;
  line-height: 1 !important;
}

.country-caret-icon {
  font-size: 11px !important;
  color: #8c9ba5 !important;
}

.mobile-vertical-divider {
  width: 1px !important;
  height: 24px !important;
  background-color: #dce4ee !important;
  margin: 0 12px !important;
  display: inline-block !important;
  flex-shrink: 0 !important;
}

.mobile-number-input {
  flex: 1 1 auto !important;
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  outline: none !important;
  background: transparent !important;
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px !important;
  color: #1e293b !important;
  padding: 0 !important;
  margin: 0 !important;
}

.mobile-number-input::placeholder {
  color: #8c9ba5 !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  opacity: 1 !important;
}

/* Middle Section */
.form-middle-row {
  display: flex;
  gap: 32px;
  margin-top: 10px;
  margin-bottom: 24px;
}

.middle-col-left {
  flex: 0 0 280px;
  width: 280px;
  padding: 0px;
}

.middle-col-right {
  flex: 1;
}

.field-heading-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 8px;
}

.radio-options-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.custom-radio-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  color: #004C97;
}

.custom-radio-label input { display: none; }

.custom-radio-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid #94a3b8;
  display: inline-block;
  position: relative;
}

.custom-radio-label input:checked + .custom-radio-circle {
  border-color: #002d5b;
}

.custom-radio-label input:checked + .custom-radio-circle::after {
  content: '';
  width: 8px;
  height: 8px;
  background: #004C97;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
}

/* Time Range & Clock Dropdown Anchor */
.time-range-block {
  position: relative;
}

/* LEFT COLUMN SPACING (from XD specs) */
.middle-col-left .user-status-block {
  margin-top: 0;
  margin-left: 3px;
}

.middle-col-left .time-range-block {
  margin-top: 19px;
  margin-bottom: 0;
}

.middle-col-left .time-range-block .field-heading-label {
  height: 23px;
  line-height: 23px;
  margin-bottom: 2px;
}

.middle-col-left .user-type-block {
  margin-top: 36px;
}

.middle-col-left .operating-branch-block {
  margin-top: 35px;
  margin-left: 8px;
}

/* Merged Start/End time field */
.time-inputs-row {
  display: flex;
  align-items: center;
  width: 280px;
  height: 50px;
  background: #FFFEFE;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0 14px;
  cursor: pointer;
  transition: border-color 0.15s ease;
}

.time-inputs-row.active-box {
  border-color: #002d5b;
  box-shadow: 0 0 0 2px rgba(0, 45, 91, 0.1);
}

.time-half {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.time-half span { font-size: 13px; color: #1e293b; }

.time-divider {
  width: 1px;
  height: 24px;
  background-color: #dce4ee;
  margin: 0 12px;
  display: inline-block;
  flex-shrink: 0;
}

.svg-timer-ic { width: 18px; height: 18px; }

/* DROPDOWN CLOCK PANEL */
.clock-dropdown-panel {
  position: absolute;
  top: 78px;
  left: 0;
  width: 290px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 30px rgba(0, 45, 91, 0.18);
  border: 1px solid #dce4ee;
  padding: 16px 18px 14px;
  z-index: 50;
  animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.clock-dropdown-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.select-time-title {
  font-size: 13px;
  font-weight: 500;
  color: #1e293b;
}

.am-pm-toggle-box {
  display: flex;
  border: 1px solid #dce4ee;
  border-radius: 6px;
  overflow: hidden;
}

.am-pm-btn {
  border: none;
  background: transparent;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}

.am-pm-btn.active {
  background: #002d5b;
  color: #ffffff;
}

.clock-digital-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.digital-box {
  width: 58px;
  height: 48px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  display: grid;
  place-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #334155;
}

.digital-box.active-digital {
  background: #e0f2fe;
  color: #0284c7;
  border-color: #bae6fd;
}

.digital-colon {
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
}

.analog-dial-circle {
  width: 190px;
  height: 190px;
  background: #f8fafc;
  border-radius: 50%;
  margin: 0 auto 16px;
  position: relative;
}

.dial-center-pivot {
  width: 8px;
  height: 8px;
  background: #002d5b;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
}

.dial-hour-num {
  position: absolute;
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  z-index: 3;
  transition: all 0.15s ease;
}

.dial-hour-num:hover {
  background: #e2e8f0;
}

.dial-hour-num.active-hour {
  background: #002d5b;
  color: #ffffff;
  font-weight: 600;
}

.dial-hour-num.hour-12 { top: 8px; left: 83px; }
.dial-hour-num.hour-1  { top: 18px; right: 48px; }
.dial-hour-num.hour-2  { top: 48px; right: 18px; }
.dial-hour-num.hour-3  { top: 83px; right: 8px; }
.dial-hour-num.hour-4  { bottom: 48px; right: 18px; }
.dial-hour-num.hour-5  { bottom: 18px; right: 48px; }
.dial-hour-num.hour-6  { bottom: 8px; left: 83px; }
.dial-hour-num.hour-7  { bottom: 18px; left: 48px; }
.dial-hour-num.hour-8  { bottom: 48px; left: 18px; }
.dial-hour-num.hour-9  { top: 83px; left: 8px; }
.dial-hour-num.hour-10 { top: 48px; left: 18px; }
.dial-hour-num.hour-11 { top: 18px; left: 48px; }

.dial-hand-arm {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 60px;
  background: #002d5b;
  transform-origin: top center;
  z-index: 2;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dial-hand-pointer {
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 10px;
  height: 10px;
  background: #002d5b;
  border-radius: 50%;
}

.clock-dropdown-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid #f1f5f9;
  padding-top: 10px;
}

.btn-clock-ok {
  background: #002d5b;
  color: #ffffff;
  border: none;
  padding: 5px 18px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.btn-clock-cancel {
  background: transparent;
  color: #dc2626;
  border: none;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

/* User Type & Other Fields */
.notch-box { width: 280px; }

.floating-notch {
  position: absolute;
  top: -8px;
  left: 12px;
  background: #ffffff;
  padding: 0 4px;
  font-size: 11px;
  font-weight: 500;
  color: #707e94;
}

.mid-fields-grid {
  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 38px 20px;
}

.col-span-2 { grid-column: span 2; width: 580px !important; }
.col-span-3 { grid-column: span 3; width: 880px !important; }

.radio-inline-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
}

/* Accordions */
.accordion-section-card {
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  margin-bottom: 20px;
}

.accordion-header {
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fafbfc;
  border-bottom: 1px solid var(--border-light);
}

.accordion-title {
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
}

.chevron-ic {
  color: #94a3b8;
  font-size: 13px;
  transition: transform 0.2s ease;
}
.chevron-ic.rotated { transform: rotate(-90deg); }

.accordion-body { padding: 20px; }

.biometric-cards-row { display: flex; gap: 24px; }

.biometric-box {
  width: 140px;
  height: 150px;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.svg-bio-ic { width: 48px; height: 48px; }
.bio-name { font-size: 12px; font-weight: 500; color: #475569; }

.btn-scan-link {
  background: none;
  border: none;
  color: #004c97;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

/* SECURITY QUESTION SECTION */
.security-accordion-panel {
  border: 1px solid #eef2f6;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  margin-top: 18px;
  margin-bottom: 22px;
}

.security-accordion-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
}

.security-title {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #1e293b;
}

.security-accordion-header .chevron-ic {
  color: #94a3b8;
  font-size: 13px;
  transition: transform 0.2s ease;
}

.security-accordion-header .chevron-ic.rotated {
  transform: rotate(-90deg);
}

.security-accordion-body {
  padding: 0 20px 20px 20px;
}

.security-strip-header {
  background-color: #f1f4f9;
  border-radius: 8px;
  height: 42px;
  display: grid;
  grid-template-columns: 90px 1fr 220px;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
}

.security-strip-header span {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #707e94;
}

.security-fields-row {
  display: grid;
  grid-template-columns: 90px 1fr 220px;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
}

.sec-col-seq.seq-number {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: transparent;
  padding-left: 2px;
  transition: color 0.15s ease;
}

.security-fields-row:hover .seq-number,
.security-fields-row:focus-within .seq-number {
  color: #1e293b;
}

.sec-col-ques,
.sec-col-ans {
  width: 100%;
}

.sec-input-box {
  width: 100%;
  height: 44px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0 14px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: #1e293b;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
}

.sec-input-box:hover,
.sec-input-box:focus {
  background: #ffffff;
  border-color: #dce4ee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
}

.sec-input-box:focus {
  border-color: #002d5b;
}

.sec-input-box::placeholder {
  color: transparent;
}

.sec-input-box:hover::placeholder,
.sec-input-box:focus::placeholder {
  color: #94a3b8;
}

/* BOTTOM ACTION BUTTONS */
.form-bottom-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  margin-bottom: -25px;
}

.btn-form-save {
  width: 136px !important;
  height: 44px !important;
  background: #002d5b !important;
  color: #ffffff !important;
  border-radius: 22px !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  box-shadow: 0 4px 12px rgba(0, 45, 91, 0.25) !important;
  border: none !important;
}

.btn-form-exit {
  background: transparent !important;
  color: #dc2626 !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  border: none !important;
  padding: 0 10px !important;
  width: 140px;
  cursor: pointer;
}

.btn-form-exit:hover {
  text-decoration: underline;
}

/* Audit Table */
.audit-history-wrapper {
  height: 100px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid var(--border-light);
  overflow: hidden;
  padding: 8px 8px;
  margin-top: 20px;
  opacity: 1;
  box-shadow: 3px 3px 15px #0000000F;
}

.audit-grid-cols {
  grid-template-columns: 90px 110px 150px 100px 110px 130px 100px 90px 1fr;
}

.audit-strip-header {
  display: grid;
  grid-template-columns: 90px 110px 150px 100px 110px 130px 100px 90px 1fr;
  align-items: center;
  background-color: #f1f4f9;
  border-radius: 8px;
  height: 42px;
  padding: 0px 16px;
}

.audit-strip-header span {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #707e94;
}

.audit-fields-row {
  display: grid;
  grid-template-columns: 90px 110px 150px 100px 110px 130px 100px 90px 1fr;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-light);
}

.audit-fields-row:last-child {
  border-bottom: none;
}

.audit-fields-row span {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #1e293b;
}

.popout-ic { font-size: 14px; color: #0284c7; cursor: pointer; }
.tag-approved { color: var(--green-active); font-weight: 500; font-size: 14px; }
.tag-unapproved { color: var(--amber-status); font-weight: 500; font-size: 14px; }
.status-badge { display: inline-block; padding: 4px 14px; border-radius: 9999px; font-size: 13px; font-weight: 500; text-align: center; }
.badge-active { background-color: var(--green-bg); color: var(--green-active); }
.badge-inactive { background-color: var(--red-bg); color: var(--red-inactive); }

/* Modals */
.bio-modal-card {
  padding: 30px;
  text-align: center;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
}
.bio-modal-title { font-size: 16px; font-weight: 600; color: #1e293b; margin: 0; }
.bio-modal-desc { font-size: 12px; color: #64748b; margin-top: 6px; margin-bottom: 20px; }

.modal-large-finger-ic {
  width: 70px;
  height: 70px;
  margin: 16px auto;
  display: block;
}

.bio-modal-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 20px; }
.btn-bio-confirm { width: 140px !important; height: 42px !important; background: #002d5b !important; color: #ffffff !important; border-radius: 8px !important; }
.btn-bio-back { width: 120px !important; height: 42px !important; border: 1px solid var(--border-subtle) !important; border-radius: 8px !important; color: #334155 !important; }

.success-check-circle {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid #00b374;
  margin: 20px auto;
  display: grid;
  place-content: center;
}
.check-icon { font-size: 34px; color: #00b374; }
.close-x-btn { position: absolute; top: 14px; right: 14px; background: none; border: none; font-size: 16px; color: #94a3b8; cursor: pointer; }


/* ==========================================================================
   XD MATCH FIXES (these override the rules above, keep them at the END)
   ========================================================================== */

/* 1. Field boxes: no border, label INSIDE the box like a placeholder */
.custom-field-box.xd-field {
  border: none;
}

.custom-field-box label {
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  padding: 0;
  background: transparent;
  font-size: 13px;
  font-weight: 400;
  color: #707e94;
  pointer-events: none;
  transition: all 0.15s ease;
}

/* Label floats up onto the top edge when the field is focused or filled */
.custom-field-box:has(input:focus) label,
.custom-field-box:has(input:not(:placeholder-shown)) label,
.custom-field-box:has(select:focus) label,
.custom-field-box:has(select:valid) label {
  top: 0;
  left: 12px;
  padding: 0 4px;
  font-size: 11px;
  font-weight: 500;
  background: #ffffff;
}

/* Selects show nothing until a value is chosen (label acts as placeholder) */
.custom-field-box.with-select select {
  font-size: 14px;
  height: 100%;
}
.custom-field-box.with-select select:invalid {
  color: transparent;
}
.custom-field-box.with-select select option {
  color: #1e293b;
}

/* Filled caret instead of chevron */
.select-chevron {
  font-size: 14px;
  color: #8c9ba5;
}

/* 2. Start Time / End Time placeholders */
.time-half span.time-placeholder {
  color: #707e94;
}

/* 3. User Type: styled select (no native browser box), bordered like XD */
.custom-field-box.xd-field.notch-box {
  border: 1px solid #e2e8f0;
}
.notch-box select {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  padding-top: 4px;
}

/* 4. Radios: unselected = grey, selected = blue */
.custom-radio-label {
  color: #707e94;
}
.custom-radio-label input:checked ~ .radio-text {
  color: #004c97;
}