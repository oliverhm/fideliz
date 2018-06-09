import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { WalletPage } from '../pages/wallet/wallet';
import { ExplorePage } from '../pages/explore/explore';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { OnboardingModule } from '../modules/onboarding/onboarding.module';
import { LoginModule } from '../modules/login/login.module';
import { AccountModule } from '../modules/account/account.module';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WalletPage,
    ExplorePage,
    TabsPage,
    ProfilePage,
  ],
  imports: [
    AccountModule,
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    LoginModule,
    OnboardingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WalletPage,
    ExplorePage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
