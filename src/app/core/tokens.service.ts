import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpService} from './http.service';

import {Role} from './role.model';

@Injectable()
export class TokensService {
  static END_POINT = '/users/token';

  constructor(private httpService: HttpService) {
  }

  login(mobile: number, password: string): Observable<any> {
    return this.httpService.login(mobile, password, TokensService.END_POINT);
  }

  logout(): void {
    this.httpService.logout();
  }

  isAdmin(): boolean {
    return this.httpService.getToken().roles.includes(Role.ADMIN);
  }

  isManager(): boolean {
    return this.httpService.getToken().roles.includes(Role.MANAGER);
  }

  getMobile(): number {
    return this.httpService.getToken().mobile;
  }

  getName(): string {
    return this.httpService.getToken().name;
  }
}
