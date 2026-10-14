import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export type SortOption = 'relevance' | 'az' | 'za';

export interface MaintenanceItem {
  icon: string;
  title: string;
  description: string;
  route?: string;
}

@Component({
  selector: 'app-maintenance-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenance-summary.html',
  styleUrl: './maintenance-summary.css',
})
export class MaintenanceSummaryComponent {
  searchTerm = '';
  sortBy: SortOption = 'relevance';
  sortMenuOpen = false;
  selectedTitle: string | null = 'Business Suite Maintenance';

  items: MaintenanceItem[] = [
    { icon: 'assets/icons/MaintenanceIcons/security-policy.jpg', title: 'Security Policy', description: 'Our security policy ensures comprehensive protection through controlled access, risk assessment, and thorough employee training.' },
    { icon: 'assets/icons/MaintenanceIcons/business-suite-maintenance.jpg', title: 'Business Suite Maintenance', description: 'Business suite maintenance ensures optimal functionality and user experience within the suite of business software applications.' },
    { icon: 'assets/icons/MaintenanceIcons/menu-maintenance.jpg', title: 'Menu Maintenance', description: 'Menu maintenance involves managing and updating menu options for a streamlined user experience.' },
    { icon: 'assets/icons/MaintenanceIcons/role-maintenance.jpg', title: 'Role Maintenance', description: "Role maintenance involves managing and updating user permissions to ensure proper access and security within the organization's systems." },
    { icon: 'assets/icons/MaintenanceIcons/holiday-maintenance.jpg', title: 'Holiday Maintenance', description: 'Holiday maintenance involves ensuring operational readiness and resources during holiday periods.' },
    { icon: 'assets/icons/MaintenanceIcons/exchange-rate-maintenance.jpg', title: 'Exchange Rate Maintenance', description: 'Maintaining exchange rates ensures accurate currency conversions.' },
    { icon: 'assets/icons/MaintenanceIcons/user-maintenance.jpg', title: 'User Maintenance', description: "User maintenance entails managing and updating user accounts to ensure accurate access and security in the organization's systems.", route: '/user-maintenance' },
    { icon: 'assets/icons/MaintenanceIcons/country-city-state-maintenance.jpg', title: 'Country ,City and State Maintenance', description: 'Country, state, and city maintenance involves managing administrative and infrastructure aspects to ensure well-functioning geographic entities.' },
    { icon: 'assets/icons/MaintenanceIcons/bank-maintenance.jpg', title: 'Bank Maintenance', description: 'Bank maintenance involves managing and optimizing banking operations for efficiency and compliance.' },
    { icon: 'assets/icons/MaintenanceIcons/branch-maintenance.jpg', title: 'Branch Maintenance', description: 'Branch maintenance ensures a functional and inviting environment for all.' },
    { icon: 'assets/icons/MaintenanceIcons/currency-maintenance.jpg', title: 'Currency Maintenance', description: 'Currency maintenance involves managing and updating currency values and information for accurate financial transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/entity-maintenance.jpg', title: 'Entity Maintenance', description: 'Entity maintenance involves managing and updating organizational data for accuracy and consistency.' },
    { icon: 'assets/icons/MaintenanceIcons/collateral-maintenance.jpg', title: 'Collateral Maintenance', description: 'Collateral maintenance involves monitoring and preserving the value of assets pledged for loans.' },
    { icon: 'assets/icons/MaintenanceIcons/currency-pair-maintenance.jpg', title: 'Currency Pair Maintenance', description: 'Currency pair maintenance updates exchange rates for accurate transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/agent-maintenance.jpg', title: 'Agent Maintenance', description: 'Agent maintenance involves managing and updating agent information for effective operations.' },
    { icon: 'assets/icons/MaintenanceIcons/generic-value-maintenance.jpg', title: 'Generic Value Maintenance', description: 'Generic value maintenance involves managing and updating core data for consistent functionality.' },
    { icon: 'assets/icons/MaintenanceIcons/origination-basis-maintenance.jpg', title: 'Origination Basis Maintenance', description: 'Origination basis maintenance involves managing criteria for loan or credit creation.' },
    { icon: 'assets/icons/MaintenanceIcons/check-list-maintenance.jpg', title: 'Check List Maintenance', description: 'Checklist maintenance involves managing and updating predefined lists for organized tasks and processes.' },
    { icon: 'assets/icons/MaintenanceIcons/department-maintenance.jpg', title: 'Department Maintenance', description: 'Department maintenance involves managing and optimizing organizational units for efficient functioning.' },
    { icon: 'assets/icons/MaintenanceIcons/limit-maintenance.jpg', title: 'Limit Maintenance', description: 'Limit maintenance involves managing and adjusting predefined boundaries or thresholds.' },
    { icon: 'assets/icons/MaintenanceIcons/till-vault-maintenance.jpg', title: 'Till Vault Maintenance', description: 'Till vault maintenance oversees the security and accuracy of cash storage systems.' },
    { icon: 'assets/icons/MaintenanceIcons/employee-levels-maintenance.jpg', title: 'Employee Levels Maintenance', description: 'Employee levels maintenance involves managing and updating hierarchical roles for organizational structure.' },
    { icon: 'assets/icons/MaintenanceIcons/till-vault-configuration-maintenance.jpg', title: 'Till Vault Configuration Maintenance', description: 'Till vault configuration maintenance manages setup and adjustments for secure cash storage.' },
    { icon: 'assets/icons/MaintenanceIcons/affinity-program-maintenance.jpg', title: 'Affinity Program Maintenance', description: 'Affinity program maintenance involves managing partnerships and benefits for targeted customer groups.' },
    { icon: 'assets/icons/MaintenanceIcons/features-title-maintenance.jpg', title: 'Features Title Maintenance', description: 'Feature title maintenance involves managing and updating titles for software or product functionalities.' },
    { icon: 'assets/icons/MaintenanceIcons/communication-protocol.jpg', title: 'Communication protocol', description: 'Communication protocol defines rules for data exchange between devices or systems.' },
    { icon: 'assets/icons/MaintenanceIcons/interest-charge-mapping-maintenance.jpg', title: 'Intrest/Charge Mapping Maintenance', description: 'Mapping and maintaining interest/charge structures for financial transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/buy-sell-cash-maintenance.jpg', title: 'Buy/Sell Cash from Central Bank/Currency chest', description: 'Central bank/currency chest cash exchange manages currency transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/basis-subclass-maintenance.jpg', title: 'Basis Subclass Maintenance', description: 'Basis subclass maintenance involves managing and updating specific categories for foundational data.' },
    { icon: 'assets/icons/MaintenanceIcons/quantitative-scorecard.jpg', title: 'Quantitative Scorecard', description: 'Quantitative scorecard is a tool to assess performance using numerical metrics.' },
    { icon: 'assets/icons/MaintenanceIcons/book-shortage-overage-maintenance.jpg', title: 'Book Shortage/Overage Maintenance', description: 'Book shortage/overage maintenance handles discrepancies in inventory for accurate records.' },
    { icon: 'assets/icons/MaintenanceIcons/kiosk-maintenance.jpg', title: 'Kiosk Maintenance', description: 'Kiosk maintenance involves ensuring optimal functionality and user experience for self-service kiosk systems.' },
    { icon: 'assets/icons/MaintenanceIcons/basis-class-maintenance.jpg', title: 'Basis Class Maintenance', description: 'Basis class maintenance involves managing and updating fundamental data categories.' },
    { icon: 'assets/icons/MaintenanceIcons/asset-type.jpg', title: 'Asset Type', description: 'Asset type refers to categorizing and managing different classes of assets.' },
    { icon: 'assets/icons/MaintenanceIcons/qualitative-scoreboard.jpg', title: 'Qualitative Scoreboard', description: 'Qualitative scoreboard assesses performance using descriptive measures.' },
    { icon: 'assets/icons/MaintenanceIcons/open-close-till-vault-maintenance.jpg', title: 'Open Close Till/Vault Maintenance', description: 'Open-close till/vault maintenance involves managing the operational status of cash storage units.' },
    { icon: 'assets/icons/MaintenanceIcons/charge-group-maintenance.jpg', title: 'Charge Group Maintenance', description: 'Customer charge category classifies and manages fee types for customers.' },
    { icon: 'assets/icons/MaintenanceIcons/customer-category-maintenance.jpg', title: 'Customer category Maintenance', description: 'Managing customer categories for classification and updates.' },
    { icon: 'assets/icons/MaintenanceIcons/branch-cash-transfer.jpg', title: 'Branch Cash Transfer', description: 'Branch cash transfer refers to managing the movement of cash between branches.' },
    { icon: 'assets/icons/MaintenanceIcons/accounting-maintenance.jpg', title: 'Accounting Maintenance', description: 'Accounting maintenance involves managing and updating financial records and transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/till-vault-position.jpg', title: 'Till Vault Position', description: 'Till vault position refers to managing the status and content of cash storage units.' },
    { icon: 'assets/icons/MaintenanceIcons/denomination-maintenance.jpg', title: 'Denomination Maintenance', description: 'Denomination maintenance involves managing and updating currency unit values.' },
    { icon: 'assets/icons/MaintenanceIcons/branch-breaching-limit.jpg', title: 'Branch Breaching Limit', description: 'Branch breaching limit identifies and manages exceeding operational thresholds.' },
    { icon: 'assets/icons/MaintenanceIcons/instrument-maintenance.jpg', title: 'Instrument Maintenance', description: 'Instrument maintenance involves managing and updating financial instruments and assets.' },
    { icon: 'assets/icons/MaintenanceIcons/till-vault-status.jpg', title: 'Till/Vault Status', description: 'Till/vault maintenance involves managing and upkeeping cash storage units.' },
    { icon: 'assets/icons/MaintenanceIcons/transfer-cash-maintenance.jpg', title: 'Transfer Cash Maintenance', description: 'Transfer cash maintenance oversees managing and updating cash movement procedures.' },
    { icon: 'assets/icons/MaintenanceIcons/inter-branch-general-ledger-maintenance.jpg', title: 'Inter Branch General Ledger Maintenance', description: 'Maintaining inter-branch general ledger records.' },
    { icon: 'assets/icons/MaintenanceIcons/teller-product-maintenance.jpg', title: 'Teller Product Maintenance', description: 'Teller product maintenance involves managing and updating financial products for teller transactions.' },
    { icon: 'assets/icons/MaintenanceIcons/maintenance-upload.jpg', title: 'Maintenance Upload', description: 'Maintenance upload involves updating and managing data through file uploads.' },
    { icon: 'assets/icons/MaintenanceIcons/instrument-status.jpg', title: 'Instrument Status', description: 'Instrument status refers to monitoring and managing the condition or state of financial assets.' },
    { icon: 'assets/icons/MaintenanceIcons/biller-maintenance.jpg', title: 'Biller Maintenance', description: 'Instrument status refers to monitoring and managing the current condition of financial instruments.' },
  ];

  constructor(private router: Router) {}

  get sortLabel(): string {
    switch (this.sortBy) {
      case 'az': return 'A-Z';
      case 'za': return 'Z-A';
      default: return 'Relevance';
    }
  }

  get filteredItems(): MaintenanceItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    let list = this.items;

    if (term) {
      list = list.filter(
        i => i.title.toLowerCase().includes(term) || i.description.toLowerCase().includes(term)
      );
    }

    if (this.sortBy === 'az') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'za') {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }

  toggleSortMenu(): void {
    this.sortMenuOpen = !this.sortMenuOpen;
  }

  chooseSort(option: SortOption): void {
    this.sortBy = option;
    this.sortMenuOpen = false;
  }

  onCardClick(item: MaintenanceItem): void {
    this.selectedTitle = item.title;
    if (item.title === 'User Maintenance' || item.route) {
      this.router.navigate(['/user-maintenance']);
    }
  }

  onSearchClick(): void {}
}