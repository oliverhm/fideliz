import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WalletPage } from '../wallet/wallet';
import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = ExplorePage;
  tab2Root = AboutPage;
  tab3Root = WalletPage;
  tab4Root = ProfilePage;

  constructor() {}
}
