import {Component} from '@angular/core';

@Component({
  selector: 'app-articles-families-create-dialog',
  templateUrl: './articles-families-create-dialog.component.html'
})
export class ArticlesFamiliesCreateDialogComponent {
  familyType = ['ARTICLE', 'SIZES', 'ARTICLES'];
  familySelected: string;

  constructor() {
  }
}