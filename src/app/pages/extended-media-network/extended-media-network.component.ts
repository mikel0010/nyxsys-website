import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-extended-media-network',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: './extended-media-network.component.html',
  styleUrl: './extended-media-network.component.scss'
})
export class ExtendedMediaNetworkComponent {
  ledQCreatvs: any[] = [];
  ledPrimeSpots: any[] = [];
  staticPillars: any[] = [];
  whyChooseEMN: any[] = [
    {
      title: 'More Strategic Locations',
      text: 'Explore additional LED billboard sites across keyroads, commercial districts, and high-traffic areas.',
      icon: 'location_on',
    },
    {
      title: 'Trusted Media Partners',
      text: 'Discover expanded advertising inventory through our network of media partners, including Q-Creativs, DPWH, and PrimeSpots.',
      icon: 'handshake',
    },
    {
      title: 'More Campaign Possibilities',
      text: 'Find billboard placements that align with your campaign objectives, target audience, and preferred locations.',
      icon: 'campaign',
    },
    {
      title: 'Expanded Media Options',
      text: 'Compare more available LED billboard opportunities in one place to help plan your next outdoor advertising campaign.',
      icon: 'cell_tower',
    }
  ];


  constructor(private utils: UtilityService, private router: Router) {
    this.ledQCreatvs = utils.ledQCreatvs;
    this.ledPrimeSpots = utils.ledPrimeSpots;
    this.staticPillars = utils.staticPillars;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }
}
