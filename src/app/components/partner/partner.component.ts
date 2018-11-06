import { Component, OnInit } from '@angular/core';
import {Partner} from '../../models/partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  _partners: Partner[];
  constructor() {
    this._partners = [
      new Partner('John Lewis', '../../../assets/images/johnlewis.png', 'Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
      new Partner('Mac', '../../../assets/images/maclogo.png', 'Lorem Ipsum is simply dummy text of the printing ' +
        'and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
        'and' +
        ' ' +
        'scrambled it to make a type specimen book.'),
      new Partner('Schuh', '../../../assets/images/logo-schuh.png', 'Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
        'and ' +
        'scrambled it to make a type specimen book.'),
      new Partner('M&S', '../../../assets/images/m&s.jpg', 'Lorem Ipsum is simply dummy text of the printing ' +
        'and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
        ' and scrambled it to make a type specimen book.'),
      new Partner('Next', '../../../assets/images/nextlogo.jpg', 'Lorem Ipsum is simply dummy text of the printing ' +
        'and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
        ' and scrambled it to make a type specimen book.'),
    ];
  }

  ngOnInit() {
  }

}
