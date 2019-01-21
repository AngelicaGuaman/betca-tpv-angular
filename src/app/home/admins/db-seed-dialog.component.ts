import {Component} from '@angular/core';

import {AdminsService} from './admins.service';

@Component({
  templateUrl: 'db-seed-dialog.component.html',
  styleUrls: ['db-seed-dialog.css']
})
export class DbSeedDialogComponent {
  constructor(private adminsService: AdminsService) {
  }

  seedDb(ymlFileName: string) {
    this.adminsService.seedDb(ymlFileName);
  }

}
