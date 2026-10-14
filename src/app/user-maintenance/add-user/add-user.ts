import { Component, OnInit, ElementRef, ViewChild, HostListener, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material Modules
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface AuditHistoryItem {
  empId: string;
  name: string;
  dateTime: string;
  action: string;
  approved: 'Approved' | 'Unapproved';
  activeStatus: 'Active' | 'Inactive';
  qualified: string;
  version: string;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fingerprintModalTemplate') fingerprintModalTemplate!: TemplateRef<any>;
  @ViewChild('fingerprintSuccessTemplate') fingerprintSuccessTemplate!: TemplateRef<any>;

  dialogRef: MatDialogRef<any> | null = null;

  uploadedImageUrl: string | null = null;

  // Dropdown Clock Picker State
  showClockPicker = false;
  activeTimeTarget: 'start' | 'end' = 'start';
  selectedHour = 8;
  selectedMinute = '00';
  selectedPeriod: 'AM' | 'PM' = 'AM';
  clockHandAngle = 240;

  hoursList: number[] = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  isFingerprintCaptured = false;
  isBiometricOpen = true;
  isSecurityQuestionOpen = true;

  formUser = {
    username: '',
    firstName: '',
    lastName: '',
    entityCode: '',
    bankCode: '',
    homeBranch: '',
    email: '',
    mobile: '',
    department: '',
    roleName: '',
    userLevel: '',
    empId: '',
    userType: 'Mobile',
    language: '',
    twoFactorAuth: '',
    pwdGen: '',
    status: 'Enable',
    operatingBranch: 'Not-Allowed',
    branches: '',
    activeDirectory: 'No',
    relationshipManager: 'No',
    startTime: '',   // empty -> shows "Start Time" placeholder
    endTime: '',     // empty -> shows "End Time" placeholder
    securityQuestion: '',
    securityAnswer: ''
  };

  auditColumns: string[] = [
    'empId', 'name', 'dateTime', 'action', 'approved', 'activeStatus', 'qualified', 'version', 'popout'
  ];

  auditHistory: AuditHistoryItem[] = [
    // { empId: 'R007', name: 'Hari', dateTime: '3 Apr 2022 | 14 : 32', action: 'New', approved: 'Unapproved', activeStatus: 'Active', qualified: 'No', version: '45' }
  ];

  auditDataSource = new MatTableDataSource<AuditHistoryItem>(this.auditHistory);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  goBackToSummary(): void {
    this.router.navigate(['/user-maintenance']);
  }

  triggerImageUpload(): void {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    // reset so the same file can be chosen again after deleting
    input.value = '';
  }

  deleteUploadedImage(): void {
    this.uploadedImageUrl = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  onlyNumbers(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  toggleClockPicker(target: 'start' | 'end', event: MouseEvent): void {
    event.stopPropagation();
    if (this.showClockPicker && this.activeTimeTarget === target) {
      this.showClockPicker = false;
      return;
    }

    this.activeTimeTarget = target;
    const timeValue = target === 'start' ? this.formUser.startTime : this.formUser.endTime;
    this.parseInitialTime(timeValue);
    this.showClockPicker = true;
  }

  private parseInitialTime(timeStr: string): void {
    // Empty field -> open the picker on 8:00 AM
    if (!timeStr) {
      this.selectedHour = 8;
      this.selectedMinute = '00';
      this.selectedPeriod = 'AM';
      this.updateClockHand(8);
      return;
    }
    const parts = timeStr.trim().split(' ');
    if (parts.length === 2) {
      this.selectedPeriod = parts[1].toUpperCase() as 'AM' | 'PM';
      const timeParts = parts[0].split(':');
      this.selectedHour = parseInt(timeParts[0], 10) || 8;
      this.selectedMinute = timeParts[1] || '00';
    }
    this.updateClockHand(this.selectedHour);
  }

  selectHour(hour: number): void {
    this.selectedHour = hour;
    this.updateClockHand(hour);
  }

  setPeriod(period: 'AM' | 'PM'): void {
    this.selectedPeriod = period;
  }

  private updateClockHand(hour: number): void {
    this.clockHandAngle = (hour % 12) * 30;
  }

  applyTime(): void {
    const formatted = `${this.selectedHour}:${this.selectedMinute} ${this.selectedPeriod}`;
    if (this.activeTimeTarget === 'start') {
      this.formUser.startTime = formatted;
    } else {
      this.formUser.endTime = formatted;
    }
    this.showClockPicker = false;
  }

  cancelClock(): void {
    this.showClockPicker = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.querySelector('.time-range-block')?.contains(event.target);
    if (!clickedInside && this.showClockPicker) {
      this.showClockPicker = false;
    }
  }

  openFingerprintModal(): void {
    this.dialogRef = this.dialog.open(this.fingerprintModalTemplate, {
      width: '580px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'bio-dialog',
      backdropClass: 'bio-backdrop'
    });
  }

  onScanFingerprint(): void {
    this.closeDialog();
    this.dialogRef = this.dialog.open(this.fingerprintSuccessTemplate, {
      width: '580px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'bio-dialog',
      backdropClass: 'bio-backdrop'
    });
  }

  onFingerprintDone(): void {
    this.isFingerprintCaptured = true;
    this.closeDialog();
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}