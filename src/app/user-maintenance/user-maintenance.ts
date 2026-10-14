import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material Modules
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

export interface UserItem {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  department: string;
  userStatus: boolean;
  roleName: string;
  actionBy: { name: string; eid: string };
  dateTime: string;
  approved: 'Approved' | 'Unapproved';
  activeStatus: 'Active' | 'Inactive';
  avatarUrl?: string;
  avatarInitials?: string;
}

export interface ActionByUser {
  name: string;
  eid: string;
  avatar: string;
}

export type SortDirection = 'asc' | 'desc' | null;

@Component({
  selector: 'app-user-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatMenuModule
  ],
  templateUrl: './user-maintenance.html',
  styleUrls: ['./user-maintenance.css']
})
export class UserMaintenanceComponent implements OnInit {
  @ViewChild('clearModalTemplate') clearModalTemplate!: TemplateRef<any>;
  @ViewChild('deleteModalTemplate') deleteModalTemplate!: TemplateRef<any>;
  @ViewChild('datePickerModalTemplate') datePickerModalTemplate!: TemplateRef<any>;

  loggedInUser = 'John Doe';
  selectedUserId: string | null = null;
  dialogRef: MatDialogRef<any> | null = null;

  // Sorting state
  sortKey: string | null = null;
  sortDirection: SortDirection = null;

  // Filters
  filterApproved = 'Both';
  filterActive = 'Both';
  searchQuery = '';

  // Dropdown States
  selectedActionBy: ActionByUser | null = null;
  selectedDateRangeLabel = 'Action Date';
  selectedDateRange = 'Last 3 Month';

  actionByList: ActionByUser[] = [
    { name: 'Gilbert Jack', eid: 'EMP #09', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop' },
    { name: 'Jacob', eid: 'EMP #08', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop' },
    { name: 'Mathew', eid: 'EMP #07', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop' },
    { name: 'Kerl', eid: 'EMP #10', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop' }
  ];

  // Table Columns
  displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'department',
    'userStatus',
    'roleName',
    'actionBy',
    'dateTime',
    'approved',
    'activeStatus',
    'action'
  ];

  users: UserItem[] = [
    {
      id: '1',
      username: 'Teller',
      firstName: 'Teller',
      lastName: 'Teller',
      department: 'Teller',
      userStatus: false,
      roleName: 'Teller',
      actionBy: { name: 'Gilbert', eid: 'Eid #09' },
      dateTime: '3 Apr 2022 | 14 : 32',
      approved: 'Unapproved',
      activeStatus: 'Inactive',
      avatarInitials: 'TE'
    },
    {
      id: '2',
      username: 'YUD',
      firstName: 'Tester',
      lastName: 'Tester',
      department: 'Tester',
      userStatus: true,
      roleName: 'Tester',
      actionBy: { name: 'Jacob', eid: 'Eid #08' },
      dateTime: '8 Apr 2022 | 04 : 00',
      approved: 'Unapproved',
      activeStatus: 'Active',
      avatarInitials: 'YU'
    },
    {
      id: '3',
      username: 'SERG',
      firstName: 'Issue test',
      lastName: 'Issue test',
      department: 'Issue test',
      userStatus: true,
      roleName: 'Issue test',
      actionBy: { name: 'Mathew', eid: 'Eid #07' },
      dateTime: '11 Apr 2022 | 01 : 12',
      approved: 'Approved',
      activeStatus: 'Active',
      avatarInitials: 'SE'
    },
    {
      id: '4',
      username: 'YWEV',
      firstName: 'Teller',
      lastName: 'Teller',
      department: 'Teller',
      userStatus: true,
      roleName: 'Teller',
      actionBy: { name: 'Kerl', eid: 'Eid #10' },
      dateTime: '2 Apr 2022 | 22 : 32',
      approved: 'Unapproved',
      activeStatus: 'Active',
      avatarInitials: 'YW'
    }
  ];

  dataSource = new MatTableDataSource<UserItem>([]);

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  // Navigate to separate Add User page
  openAddForm(): void {
    this.router.navigate(['/user-maintenance/add']);
  }

  // Navigate to separate Edit User page
  openEditForm(u: UserItem): void {
    this.router.navigate(['/user-maintenance/edit', u.id]);
  }

  openBulkUpload(): void {
    console.log('Bulk Upload initiated');
  }

  goBackToSummary(): void {
    this.router.navigate(['/maintenance-summary']);
  }

  onSort(column: string, direction: 'asc' | 'desc', event: MouseEvent): void {
    event.stopPropagation();

    if (this.sortKey === column && this.sortDirection === direction) {
      this.sortKey = null;
      this.sortDirection = null;
    } else {
      this.sortKey = column;
      this.sortDirection = direction;
    }

    this.applyFilters();
  }

  private parseCustomDateTime(dt: string): number {
    if (!dt) return 0;
    const parts = dt.split('|');
    const dateStr = parts[0]?.trim() || '';
    const timeStr = parts[1]?.replace(/\s+/g, '') || '00:00';
    const timestamp = Date.parse(`${dateStr} ${timeStr}`);
    return isNaN(timestamp) ? 0 : timestamp;
  }

  applyFilters(): void {
    const query = this.searchQuery.trim().toLowerCase();

    let filtered = this.users.filter((u) => {
      const matchApp =
        this.filterApproved === 'Both' || u.approved === this.filterApproved;
      const matchAct =
        this.filterActive === 'Both' || u.activeStatus === this.filterActive;
      const matchSearch =
        !query ||
        u.username.toLowerCase().includes(query) ||
        u.firstName.toLowerCase().includes(query) ||
        u.lastName.toLowerCase().includes(query) ||
        u.department.toLowerCase().includes(query);

      const filterName = this.selectedActionBy ? this.selectedActionBy.name.toLowerCase() : '';
      const rowName = u.actionBy.name.toLowerCase();
      const matchActionBy =
        !this.selectedActionBy ||
        rowName.includes(filterName) ||
        filterName.includes(rowName);

      return matchApp && matchAct && matchSearch && matchActionBy;
    });

    if (this.sortKey && this.sortDirection) {
      const key = this.sortKey;
      const dirMultiplier = this.sortDirection === 'asc' ? 1 : -1;

      filtered = [...filtered].sort((a: any, b: any) => {
        let valA: any;
        let valB: any;

        if (key === 'actionBy') {
          valA = a.actionBy?.name || '';
          valB = b.actionBy?.name || '';
        } else if (key === 'dateTime') {
          valA = this.parseCustomDateTime(a.dateTime);
          valB = this.parseCustomDateTime(b.dateTime);
          return (valA - valB) * dirMultiplier;
        } else if (key === 'userStatus') {
          valA = a.userStatus ? 1 : 0;
          valB = b.userStatus ? 1 : 0;
          return (valA - valB) * dirMultiplier;
        } else {
          valA = a[key] ?? '';
          valB = b[key] ?? '';
        }

        if (typeof valA === 'string' && typeof valB === 'string') {
          return valA.localeCompare(valB) * dirMultiplier;
        }

        return (valA < valB ? -1 : valA > valB ? 1 : 0) * dirMultiplier;
      });
    }

    this.dataSource.data = filtered;
  }

  onApprovedChange(val: string): void {
    this.filterApproved = val;
    this.applyFilters();
  }

  onActiveChange(val: string): void {
    this.filterActive = val;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  selectActionBy(user: ActionByUser | null): void {
    this.selectedActionBy = user;
    this.applyFilters();
  }

  selectDateRange(range: string): void {
    this.selectedDateRange = range;
    this.selectedDateRangeLabel = range;
    this.applyFilters();
  }

  openDatePickerDialog(): void {
    this.dialogRef = this.dialog.open(this.datePickerModalTemplate, { width: '420px' });
  }

  openClearDialog(): void {
    this.dialogRef = this.dialog.open(this.clearModalTemplate, { width: '380px' });
  }

  confirmClearFilters(): void {
    this.filterApproved = 'Both';
    this.filterActive = 'Both';
    this.selectedActionBy = null;
    this.selectedDateRangeLabel = 'Action Date';
    this.searchQuery = '';
    this.sortKey = null;
    this.sortDirection = null;
    this.applyFilters();
    this.closeDialog();
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

  handleStatusToggle(u: UserItem): void {
    this.selectedUserId = u.id;
    u.activeStatus = u.userStatus ? 'Active' : 'Inactive';
    this.applyFilters();
  }

  handleDelete(u: UserItem): void {
    this.selectedUserId = u.id;
    this.dialogRef = this.dialog.open(this.deleteModalTemplate, { width: '380px' });
  }

  confirmDelete(): void {
    if (this.selectedUserId) {
      this.users = this.users.filter((x) => x.id !== this.selectedUserId);
      this.applyFilters();
    }
    this.closeDialog();
  }
}

export { UserMaintenanceComponent as UserMaintenance };
export default UserMaintenanceComponent;