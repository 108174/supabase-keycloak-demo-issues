import { Component } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private supabase: SupabaseClient;
  session = undefined

  constructor() {
    this.supabase = createClient('https://oodnhkxnztaljdvabstx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vZG5oa3huenRhbGpkdmFic3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwMDMwNTgsImV4cCI6MTk2MjU3OTA1OH0._MAnGYebBxc1CtvDfs0EE2J-ZOxjyzAkpn11qkxFIpE');
    this.supabase.auth.onAuthStateChange((evt, session) => {
      this.session = session;
    });
  }

  signIn() {
    return this.supabase.auth.signIn({
      provider: 'keycloak'
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
