import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  places = [];

  constructor(private _router: Router) {
    this.places = [
      {
        id: 3,
        locale: 'Brasil',
        image:
          'https://a0.muscache.com/im/pictures/cadad952-2ecf-41ad-b8b4-e9cf192d4f88.jpg?aki_policy=poster',
        pricePerDay: 'R$ 249,00',
        stars: 12.436
      },
      {
        id: 1,
        locale: 'Indonésia',
        image:
          'https://a0.muscache.com/im/pictures/45dc57ae-6bfe-42c1-961e-1291d216cc01.jpg?aki_policy=exp_md',
        pricePerDay: 'R$ 576,00',
        stars: 1.867
      },
      {
        id: 2,
        locale: 'Vietnã',
        image:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-494480-media_library/original/e1833c17-0665-47a1-8166-a15b46a0a4d3.jpeg?aki_policy=exp_md',
        pricePerDay: 'R$ 707,00',
        stars: 983
      },
      {
        id: 4,
        locale: 'China',
        image:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-378744-media_library/original/07bc722e-85f5-4c6f-9609-0c3ef68f4e96.jpeg?aki_policy=poster',
        pricePerDay: 'R$ 395,00',
        stars: 751
      },
      {
        id: 5,
        locale: 'México',
        image:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-450279-media_library/original/f0698e8e-c843-4310-a8e6-53795e2c049e.jpeg?aki_policy=poster',
        pricePerDay: 'R$ 336,00',
        stars: 167
      },
      {
        id: 6,
        locale: 'Itália',
        image:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-378611-media_library/original/346f4931-fdc3-434b-895d-331c685f0c0b.jpeg?aki_policy=poster',
        pricePerDay: 'R$ 305,00',
        stars: 100
      }
    ];
  }

  navigate(name: string) {
    this._router.navigate(['app', 'experiences', name]);
  }
}
