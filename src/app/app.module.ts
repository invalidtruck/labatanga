import { ConfigPageModule } from './../pages/config/config.module';
import { FCM } from '@ionic-native/fcm'; 
// import { PayPal } from '@ionic-native/paypal';
// import { ProvMainPageModule } from './../pages/provider/prov-main/prov-main.module'; 
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import { TimeAgoPipe } from 'time-ago-pipe'

//services
import { UbicacionSVC } from './../Providers/ubicacion';
import { UserSCV } from '../Providers/User';
import { PipesModule } from '../pipes/pipes.module';
import { Auth } from './../services/auth';
import { ProveedorService } from './../services/proveedores';

//plugins
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
// import { Facebook } from '@ionic-native/facebook';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { Camera } from '@ionic-native/camera';
// import { Badge } from '@ionic-native/badge'

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorage } from "angularfire2/storage";
import { AngularFireAuthModule } from 'angularfire2/auth'; 

//views

import { ProfilePageModule } from './../pages/profile/profile.module'; 
import { MainPageModule } from './../pages/main/main.module';
import { MyApp } from './app.component';
// import { CommentsPage } from '../pages/comments/comments';
import { ListPage } from '../pages/list/list';
// import { DetailsPage } from '../pages/details/details';
import { RegisterProvPage } from '../pages/provider/register-prov/register-prov';
import { WelcomePage } from '../pages/welcome/welcome';
// import { PaymentPage } from './../pages/payment/payment';
import { LoginPage } from './../pages/login/login';
import { Register } from './../pages/register/register';
import { ProfilePage } from './../pages/profile/profile';
// import { SubCategoriesSecondPage } from './../pages/sub-categories-second/sub-categories-second';
// import { SubCategoriesPage } from './../pages/sub-categories/sub-categories';
// import { TimeServicePage } from './../pages/time-service/time-service';
// import { RequestPage } from '../pages/request/request';
// import { RequestDetailPage } from './../pages/provider/request-detail/request-detail';


//DEFAULT
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { firebaseConfig } from "../services/credentials";
// import { Network } from '@ionic-native/network';
// import { ForgetPage } from '../pages/forget/forget';
// import { EqualValidator } from '../services/EqualValidator';
import { CatalogosProvider } from '../Providers/catalogos/catalogos';
// import { ObserverProvider } from '../Providers/observer/observer';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    // MainPage,
     ListPage,
    // DetailsPage,
    WelcomePage,
    Register,
    LoginPage,
     RegisterProvPage,
    // CommentsPage,
    // TimeAgoPipe,
    // TimeServicePage,
    // SubCategoriesPage,
    // SubCategoriesSecondPage,
    // RequestPage,
    // ForgetPage,
    // ProvMainPage,
    // RequestDetailPage,
    // EqualValidator,
    // PaymentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'labatanga'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ProfilePageModule,
   PipesModule,
    MainPageModule,
    ConfigPageModule,
    // ProvMainPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    ListPage,
    // DetailsPage,
    Register,
    LoginPage,
    ProfilePage,
     RegisterProvPage,
    // CommentsPage,
    // TimeServicePage,
    // SubCategoriesPage,
    // SubCategoriesSecondPage,
    // RequestPage,
    // RequestDetailPage,
    // ForgetPage,
    // PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Auth,
    UserSCV,
    ProveedorService, 
    NativeGeocoder,
    // Facebook,
    // Network,
    Geolocation,
    UbicacionSVC,
    // FileTransfer,
    // FileTransferObject,
    // File,
    // Camera,
    // Badge,
     CatalogosProvider,
    // PayPal,
    // ObserverProvider,
    FCM,
    // ChatServiceProvider
  ]
})
export class AppModule { }