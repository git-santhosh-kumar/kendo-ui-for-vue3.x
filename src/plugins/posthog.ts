//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app: any) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_g2FrehCk6pBa0cgsfMRtdEH2qjUawC88KFvwnCpPxr3',
      {
        api_host: 'https://us.i.posthog.com',
        capture_pageview: false
      }
    );
  },
};