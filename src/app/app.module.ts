import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from "@angular/router";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { AudioComponent } from './components/audio/audio.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { ConfigComponent } from './components/config/config.component';
import { ControlComponent } from './components/control/control.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { LedComponent } from './components/led/led.component';
import { ListenComponent } from './components/listen/listen.component';
import { MovComponent } from './components/mov/mov.component';
import { ScriptComponent } from './components/script/script.component';
import { ScriptdataComponent } from './components/scriptdata/scriptdata.component';
import { VoiceComponent } from './components/voice/voice.component';
import { WooComponent } from './components/woo/woo.component';

const routes: Route[] = [
  { path: '', component: ControlComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'interaction', component: InteractionComponent },
  { path: 'led', component: LedComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'mov', component: MovComponent },
  { path: 'script', component: ScriptComponent },
  { path: 'scriptdata', component: ScriptdataComponent },
  { path: 'voice', component: VoiceComponent },
  { path: 'woo', component: WooComponent }
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    CloudComponent,
    ConfigComponent,
    ControlComponent,
    InteractionComponent,
    LedComponent,
    ListenComponent,
    MovComponent,
    ScriptComponent,
    ScriptdataComponent,
    VoiceComponent,
    WooComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
