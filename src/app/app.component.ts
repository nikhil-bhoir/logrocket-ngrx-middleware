import { Component } from '@angular/core';
import * as LogRocket from 'logrocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'logrocket-ngrx-middleware';

  constructor() {
    // The LogRocket NgRx middleware logs actions and state in your app. It computes diffs to minimize bandwidth.
    LogRocket.init('your-app-id', {
      shouldCaptureIP: false,
      network: {
        requestSanitizer: request => {
          // if the url contains 'token'
          if (request.url.toLowerCase().indexOf('token') !== -1) {
            // ignore the request response pair
            return null;
          }
          request.headers = null;

          return request;
        },
        responseSanitizer: response => {
          if (response.headers['x-secret']) {
            // removes all response data
            return null;
          }

          return response;
        },
      },

      // dom: {
      // baseHref: 'https://assets.example.com/',
      // textSanitizer: true,
      // inputSanitizer: true,
      // },
    });

    LogRocket.getSessionURL(sessionURL => {
      console.log(`LogRocket session: ${sessionURL}`);
    });

  }

}
