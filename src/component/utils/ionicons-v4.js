const fonts = [
  { name: 'ion-alert' },
  { name: 'ion-ios-add' },
  { name: 'ion-ios-add-circle' },
  { name: 'ion-ios-add-circle-outline' },
  { name: 'ion-ios-airplane' },
  { name: 'ion-ios-alarm' },
  { name: 'ion-ios-albums' },
  { name: 'ion-ios-alert' },
  { name: 'ion-ios-american-football' },
  { name: 'ion-ios-analytics' },
  { name: 'ion-ios-aperture' },
  { name: 'ion-ios-apps' },
  { name: 'ion-ios-appstore' },
  { name: 'ion-ios-archive' },
  { name: 'ion-ios-arrow-back' },
  { name: 'ion-ios-arrow-down' },
  { name: 'ion-ios-arrow-dropdown' },
  { name: 'ion-ios-arrow-dropdown-circle' },
  { name: 'ion-ios-arrow-dropleft' },
  { name: 'ion-ios-arrow-dropleft-circle' },
  { name: 'ion-ios-arrow-dropright' },
  { name: 'ion-ios-arrow-dropright-circle' },
  { name: 'ion-ios-arrow-dropup' },
  { name: 'ion-ios-arrow-dropup-circle' },
  { name: 'ion-ios-arrow-forward' },
  { name: 'ion-ios-arrow-round-back' },
  { name: 'ion-ios-arrow-round-down' },
  { name: 'ion-ios-arrow-round-forward' },
  { name: 'ion-ios-arrow-round-up' },
  { name: 'ion-ios-arrow-up' },
  { name: 'ion-ios-at' },
  { name: 'ion-ios-attach' },
  { name: 'ion-ios-backspace' },
  { name: 'ion-ios-barcode' },
  { name: 'ion-ios-baseball' },
  { name: 'ion-ios-basket' },
  { name: 'ion-ios-basketball' },
  { name: 'ion-ios-battery-charging' },
  { name: 'ion-ios-battery-dead' },
  { name: 'ion-ios-battery-full' },
  { name: 'ion-ios-beaker' },
  { name: 'ion-ios-bed' },
  { name: 'ion-ios-beer' },
  { name: 'ion-ios-bicycle' },
  { name: 'ion-ios-bluetooth' },
  { name: 'ion-ios-boat' },
  { name: 'ion-ios-body' },
  { name: 'ion-ios-bonfire' },
  { name: 'ion-ios-book' },
  { name: 'ion-ios-bookmark' },
  { name: 'ion-ios-bookmarks' },
  { name: 'ion-ios-bowtie' },
  { name: 'ion-ios-briefcase' },
  { name: 'ion-ios-browsers' },
  { name: 'ion-ios-brush' },
  { name: 'ion-ios-bug' },
  { name: 'ion-ios-build' },
  { name: 'ion-ios-bulb' },
  { name: 'ion-ios-bus' },
  { name: 'ion-ios-business' },
  { name: 'ion-ios-cafe' },
  { name: 'ion-ios-calculator' },
  { name: 'ion-ios-calendar' },
  { name: 'ion-ios-call' },
  { name: 'ion-ios-camera' },
  { name: 'ion-ios-car' },
  { name: 'ion-ios-card' },
  { name: 'ion-ios-cart' },
  { name: 'ion-ios-cash' },
  { name: 'ion-ios-cellular' },
  { name: 'ion-ios-chatboxes' },
  { name: 'ion-ios-chatbubbles' },
  { name: 'ion-ios-checkbox' },
  { name: 'ion-ios-checkbox-outline' },
  { name: 'ion-ios-checkmark' },
  { name: 'ion-ios-checkmark-circle' },
  { name: 'ion-ios-checkmark-circle-outline' },
  { name: 'ion-ios-clipboard' },
  { name: 'ion-ios-clock' },
  { name: 'ion-ios-close' },
  { name: 'ion-ios-close-circle' },
  { name: 'ion-ios-close-circle-outline' },
  { name: 'ion-ios-cloud' },
  { name: 'ion-ios-cloud-circle' },
  { name: 'ion-ios-cloud-done' },
  { name: 'ion-ios-cloud-download' },
  { name: 'ion-ios-cloud-outline' },
  { name: 'ion-ios-cloud-upload' },
  { name: 'ion-ios-cloudy' },
  { name: 'ion-ios-cloudy-night' },
  { name: 'ion-ios-code' },
  { name: 'ion-ios-code-download' },
  { name: 'ion-ios-code-working' },
  { name: 'ion-ios-cog' },
  { name: 'ion-ios-color-fill' },
  { name: 'ion-ios-color-filter' },
  { name: 'ion-ios-color-palette' },
  { name: 'ion-ios-color-wand' },
  { name: 'ion-ios-compass' },
  { name: 'ion-ios-construct' },
  { name: 'ion-ios-contact' },
  { name: 'ion-ios-contacts' },
  { name: 'ion-ios-contract' },
  { name: 'ion-ios-contrast' },
  { name: 'ion-ios-copy' },
  { name: 'ion-ios-create' },
  { name: 'ion-ios-crop' },
  { name: 'ion-ios-cube' },
  { name: 'ion-ios-cut' },
  { name: 'ion-ios-desktop' },
  { name: 'ion-ios-disc' },
  { name: 'ion-ios-document' },
  { name: 'ion-ios-done-all' },
  { name: 'ion-ios-download' },
  { name: 'ion-ios-easel' },
  { name: 'ion-ios-egg' },
  { name: 'ion-ios-exit' },
  { name: 'ion-ios-expand' },
  { name: 'ion-ios-eye' },
  { name: 'ion-ios-eye-off' },
  { name: 'ion-ios-fastforward' },
  { name: 'ion-ios-female' },
  { name: 'ion-ios-filing' },
  { name: 'ion-ios-film' },
  { name: 'ion-ios-finger-print' },
  { name: 'ion-ios-fitness' },
  { name: 'ion-ios-flag' },
  { name: 'ion-ios-flame' },
  { name: 'ion-ios-flash' },
  { name: 'ion-ios-flash-off' },
  { name: 'ion-ios-flashlight' },
  { name: 'ion-ios-flask' },
  { name: 'ion-ios-flower' },
  { name: 'ion-ios-folder' },
  { name: 'ion-ios-folder-open' },
  { name: 'ion-ios-football' },
  { name: 'ion-ios-funnel' },
  { name: 'ion-ios-gift' },
  { name: 'ion-ios-git-branch' },
  { name: 'ion-ios-git-commit' },
  { name: 'ion-ios-git-compare' },
  { name: 'ion-ios-git-merge' },
  { name: 'ion-ios-git-network' },
  { name: 'ion-ios-git-pull-request' },
  { name: 'ion-ios-glasses' },
  { name: 'ion-ios-globe' },
  { name: 'ion-ios-grid' },
  { name: 'ion-ios-hammer' },
  { name: 'ion-ios-hand' },
  { name: 'ion-ios-happy' },
  { name: 'ion-ios-headset' },
  { name: 'ion-ios-heart' },
  { name: 'ion-ios-heart-dislike' },
  { name: 'ion-ios-heart-empty' },
  { name: 'ion-ios-heart-half' },
  { name: 'ion-ios-help' },
  { name: 'ion-ios-help-buoy' },
  { name: 'ion-ios-help-circle' },
  { name: 'ion-ios-help-circle-outline' },
  { name: 'ion-ios-home' },
  { name: 'ion-ios-hourglass' },
  { name: 'ion-ios-ice-cream' },
  { name: 'ion-ios-image' },
  { name: 'ion-ios-images' },
  { name: 'ion-ios-infinite' },
  { name: 'ion-ios-jet' },
  { name: 'ion-ios-journal' },
  { name: 'ion-ios-key' },
  { name: 'ion-ios-keypad' },
  { name: 'ion-ios-laptop' },
  { name: 'ion-ios-leaf' },
  { name: 'ion-ios-link' },
  { name: 'ion-ios-list' },
  { name: 'ion-ios-list-box' },
  { name: 'ion-ios-locate' },
  { name: 'ion-ios-lock' },
  { name: 'ion-ios-log-in' },
  { name: 'ion-ios-log-out' },
  { name: 'ion-ios-magnet' },
  { name: 'ion-ios-mail' },
  { name: 'ion-ios-mail-open' },
  { name: 'ion-ios-mail-unread' },
  { name: 'ion-ios-male' },
  { name: 'ion-ios-man' },
  { name: 'ion-ios-map' },
  { name: 'ion-ios-medal' },
  { name: 'ion-ios-medical' },
  { name: 'ion-ios-medkit' },
  { name: 'ion-ios-megaphone' },
  { name: 'ion-ios-menu' },
  { name: 'ion-ios-mic' },
  { name: 'ion-ios-mic-off' },
  { name: 'ion-ios-microphone' },
  { name: 'ion-ios-moon' },
  { name: 'ion-ios-more' },
  { name: 'ion-ios-move' },
  { name: 'ion-ios-musical-note' },
  { name: 'ion-ios-musical-notes' },
  { name: 'ion-ios-navigate' },
  { name: 'ion-ios-notifications' },
  { name: 'ion-ios-notifications-off' },
  { name: 'ion-ios-notifications-outline' },
  { name: 'ion-ios-nuclear' },
  { name: 'ion-ios-nutrition' },
  { name: 'ion-ios-open' },
  { name: 'ion-ios-options' },
  { name: 'ion-ios-outlet' },
  { name: 'ion-ios-paper' },
  { name: 'ion-ios-paper-plane' },
  { name: 'ion-ios-partly-sunny' },
  { name: 'ion-ios-pause' },
  { name: 'ion-ios-paw' },
  { name: 'ion-ios-people' },
  { name: 'ion-ios-person' },
  { name: 'ion-ios-person-add' },
  { name: 'ion-ios-phone-landscape' },
  { name: 'ion-ios-phone-portrait' },
  { name: 'ion-ios-photos' },
  { name: 'ion-ios-pie' },
  { name: 'ion-ios-pin' },
  { name: 'ion-ios-pint' },
  { name: 'ion-ios-pizza' },
  { name: 'ion-ios-planet' },
  { name: 'ion-ios-play' },
  { name: 'ion-ios-play-circle' },
  { name: 'ion-ios-podium' },
  { name: 'ion-ios-power' },
  { name: 'ion-ios-pricetag' },
  { name: 'ion-ios-pricetags' },
  { name: 'ion-ios-print' },
  { name: 'ion-ios-pulse' },
  { name: 'ion-ios-qr-scanner' },
  { name: 'ion-ios-quote' },
  { name: 'ion-ios-radio' },
  { name: 'ion-ios-radio-button-off' },
  { name: 'ion-ios-radio-button-on' },
  { name: 'ion-ios-rainy' },
  { name: 'ion-ios-recording' },
  { name: 'ion-ios-redo' },
  { name: 'ion-ios-refresh' },
  { name: 'ion-ios-refresh-circle' },
  { name: 'ion-ios-remove' },
  { name: 'ion-ios-remove-circle' },
  { name: 'ion-ios-remove-circle-outline' },
  { name: 'ion-ios-reorder' },
  { name: 'ion-ios-repeat' },
  { name: 'ion-ios-resize' },
  { name: 'ion-ios-restaurant' },
  { name: 'ion-ios-return-left' },
  { name: 'ion-ios-return-right' },
  { name: 'ion-ios-reverse-camera' },
  { name: 'ion-ios-rewind' },
  { name: 'ion-ios-ribbon' },
  { name: 'ion-ios-rocket' },
  { name: 'ion-ios-rose' },
  { name: 'ion-ios-sad' },
  { name: 'ion-ios-save' },
  { name: 'ion-ios-school' },
  { name: 'ion-ios-search' },
  { name: 'ion-ios-send' },
  { name: 'ion-ios-settings' },
  { name: 'ion-ios-share' },
  { name: 'ion-ios-share-alt' },
  { name: 'ion-ios-shirt' },
  { name: 'ion-ios-shuffle' },
  { name: 'ion-ios-skip-backward' },
  { name: 'ion-ios-skip-forward' },
  { name: 'ion-ios-snow' },
  { name: 'ion-ios-speedometer' },
  { name: 'ion-ios-square' },
  { name: 'ion-ios-square-outline' },
  { name: 'ion-ios-star' },
  { name: 'ion-ios-star-half' },
  { name: 'ion-ios-star-outline' },
  { name: 'ion-ios-stats' },
  { name: 'ion-ios-stopwatch' },
  { name: 'ion-ios-subway' },
  { name: 'ion-ios-sunny' },
  { name: 'ion-ios-swap' },
  { name: 'ion-ios-switch' },
  { name: 'ion-ios-sync' },
  { name: 'ion-ios-tablet-landscape' },
  { name: 'ion-ios-tablet-portrait' },
  { name: 'ion-ios-tennisball' },
  { name: 'ion-ios-text' },
  { name: 'ion-ios-thermometer' },
  { name: 'ion-ios-thumbs-down' },
  { name: 'ion-ios-thumbs-up' },
  { name: 'ion-ios-thunderstorm' },
  { name: 'ion-ios-time' },
  { name: 'ion-ios-timer' },
  { name: 'ion-ios-today' },
  { name: 'ion-ios-train' },
  { name: 'ion-ios-transgender' },
  { name: 'ion-ios-trash' },
  { name: 'ion-ios-trending-down' },
  { name: 'ion-ios-trending-up' },
  { name: 'ion-ios-trophy' },
  { name: 'ion-ios-tv' },
  { name: 'ion-ios-umbrella' },
  { name: 'ion-ios-undo' },
  { name: 'ion-ios-unlock' },
  { name: 'ion-ios-videocam' },
  { name: 'ion-ios-volume-high' },
  { name: 'ion-ios-volume-low' },
  { name: 'ion-ios-volume-mute' },
  { name: 'ion-ios-volume-off' },
  { name: 'ion-ios-walk' },
  { name: 'ion-ios-wallet' },
  { name: 'ion-ios-warning' },
  { name: 'ion-ios-watch' },
  { name: 'ion-ios-water' },
  { name: 'ion-ios-wifi' },
  { name: 'ion-ios-wine' },
  { name: 'ion-ios-woman' },
  { name: 'ion-logo-android' },
  { name: 'ion-logo-angular' },
  { name: 'ion-logo-apple' },
  { name: 'ion-logo-bitbucket' },
  { name: 'ion-logo-bitcoin' },
  { name: 'ion-logo-buffer' },
  { name: 'ion-logo-chrome' },
  { name: 'ion-logo-closed-captioning' },
  { name: 'ion-logo-codepen' },
  { name: 'ion-logo-css3' },
  { name: 'ion-logo-designernews' },
  { name: 'ion-logo-dribbble' },
  { name: 'ion-logo-dropbox' },
  { name: 'ion-logo-euro' },
  { name: 'ion-logo-facebook' },
  { name: 'ion-logo-flickr' },
  { name: 'ion-logo-foursquare' },
  { name: 'ion-logo-freebsd-devil' },
  { name: 'ion-logo-game-controller-a' },
  { name: 'ion-logo-game-controller-b' },
  { name: 'ion-logo-github' },
  { name: 'ion-logo-google' },
  { name: 'ion-logo-googleplus' },
  { name: 'ion-logo-hackernews' },
  { name: 'ion-logo-html5' },
  { name: 'ion-logo-instagram' },
  { name: 'ion-logo-ionic' },
  { name: 'ion-logo-ionitron' },
  { name: 'ion-logo-javascript' },
  { name: 'ion-logo-linkedin' },
  { name: 'ion-logo-markdown' },
  { name: 'ion-logo-model-s' },
  { name: 'ion-logo-no-smoking' },
  { name: 'ion-logo-nodejs' },
  { name: 'ion-logo-npm' },
  { name: 'ion-logo-octocat' },
  { name: 'ion-logo-pinterest' },
  { name: 'ion-logo-playstation' },
  { name: 'ion-logo-polymer' },
  { name: 'ion-logo-python' },
  { name: 'ion-logo-reddit' },
  { name: 'ion-logo-rss' },
  { name: 'ion-logo-sass' },
  { name: 'ion-logo-skype' },
  { name: 'ion-logo-slack' },
  { name: 'ion-logo-snapchat' },
  { name: 'ion-logo-steam' },
  { name: 'ion-logo-tumblr' },
  { name: 'ion-logo-tux' },
  { name: 'ion-logo-twitch' },
  { name: 'ion-logo-twitter' },
  { name: 'ion-logo-usd' },
  { name: 'ion-logo-vimeo' },
  { name: 'ion-logo-vk' },
  { name: 'ion-logo-whatsapp' },
  { name: 'ion-logo-windows' },
  { name: 'ion-logo-wordpress' },
  { name: 'ion-logo-xbox' },
  { name: 'ion-logo-xing' },
  { name: 'ion-logo-yahoo' },
  { name: 'ion-logo-yen' },
  { name: 'ion-logo-youtube' },
  { name: 'ion-md-add' },
  { name: 'ion-md-add-circle' },
  { name: 'ion-md-add-circle-outline' },
  { name: 'ion-md-airplane' },
  { name: 'ion-md-alarm' },
  { name: 'ion-md-albums' },
  { name: 'ion-md-alert' },
  { name: 'ion-md-american-football' },
  { name: 'ion-md-analytics' },
  { name: 'ion-md-aperture' },
  { name: 'ion-md-apps' },
  { name: 'ion-md-appstore' },
  { name: 'ion-md-archive' },
  { name: 'ion-md-arrow-back' },
  { name: 'ion-md-arrow-down' },
  { name: 'ion-md-arrow-dropdown' },
  { name: 'ion-md-arrow-dropdown-circle' },
  { name: 'ion-md-arrow-dropleft' },
  { name: 'ion-md-arrow-dropleft-circle' },
  { name: 'ion-md-arrow-dropright' },
  { name: 'ion-md-arrow-dropright-circle' },
  { name: 'ion-md-arrow-dropup' },
  { name: 'ion-md-arrow-dropup-circle' },
  { name: 'ion-md-arrow-forward' },
  { name: 'ion-md-arrow-round-back' },
  { name: 'ion-md-arrow-round-down' },
  { name: 'ion-md-arrow-round-forward' },
  { name: 'ion-md-arrow-round-up' },
  { name: 'ion-md-arrow-up' },
  { name: 'ion-md-at' },
  { name: 'ion-md-attach' },
  { name: 'ion-md-backspace' },
  { name: 'ion-md-barcode' },
  { name: 'ion-md-baseball' },
  { name: 'ion-md-basket' },
  { name: 'ion-md-basketball' },
  { name: 'ion-md-battery-charging' },
  { name: 'ion-md-battery-dead' },
  { name: 'ion-md-battery-full' },
  { name: 'ion-md-beaker' },
  { name: 'ion-md-bed' },
  { name: 'ion-md-beer' },
  { name: 'ion-md-bicycle' },
  { name: 'ion-md-bluetooth' },
  { name: 'ion-md-boat' },
  { name: 'ion-md-body' },
  { name: 'ion-md-bonfire' },
  { name: 'ion-md-book' },
  { name: 'ion-md-bookmark' },
  { name: 'ion-md-bookmarks' },
  { name: 'ion-md-bowtie' },
  { name: 'ion-md-briefcase' },
  { name: 'ion-md-browsers' },
  { name: 'ion-md-brush' },
  { name: 'ion-md-bug' },
  { name: 'ion-md-build' },
  { name: 'ion-md-bulb' },
  { name: 'ion-md-bus' },
  { name: 'ion-md-business' },
  { name: 'ion-md-cafe' },
  { name: 'ion-md-calculator' },
  { name: 'ion-md-calendar' },
  { name: 'ion-md-call' },
  { name: 'ion-md-camera' },
  { name: 'ion-md-car' },
  { name: 'ion-md-card' },
  { name: 'ion-md-cart' },
  { name: 'ion-md-cash' },
  { name: 'ion-md-cellular' },
  { name: 'ion-md-chatboxes' },
  { name: 'ion-md-chatbubbles' },
  { name: 'ion-md-checkbox' },
  { name: 'ion-md-checkbox-outline' },
  { name: 'ion-md-checkmark' },
  { name: 'ion-md-checkmark-circle' },
  { name: 'ion-md-checkmark-circle-outline' },
  { name: 'ion-md-clipboard' },
  { name: 'ion-md-clock' },
  { name: 'ion-md-close' },
  { name: 'ion-md-close-circle' },
  { name: 'ion-md-close-circle-outline' },
  { name: 'ion-md-cloud' },
  { name: 'ion-md-cloud-circle' },
  { name: 'ion-md-cloud-done' },
  { name: 'ion-md-cloud-download' },
  { name: 'ion-md-cloud-outline' },
  { name: 'ion-md-cloud-upload' },
  { name: 'ion-md-cloudy' },
  { name: 'ion-md-cloudy-night' },
  { name: 'ion-md-code' },
  { name: 'ion-md-code-download' },
  { name: 'ion-md-code-working' },
  { name: 'ion-md-cog' },
  { name: 'ion-md-color-fill' },
  { name: 'ion-md-color-filter' },
  { name: 'ion-md-color-palette' },
  { name: 'ion-md-color-wand' },
  { name: 'ion-md-compass' },
  { name: 'ion-md-construct' },
  { name: 'ion-md-contact' },
  { name: 'ion-md-contacts' },
  { name: 'ion-md-contract' },
  { name: 'ion-md-contrast' },
  { name: 'ion-md-copy' },
  { name: 'ion-md-create' },
  { name: 'ion-md-crop' },
  { name: 'ion-md-cube' },
  { name: 'ion-md-cut' },
  { name: 'ion-md-desktop' },
  { name: 'ion-md-disc' },
  { name: 'ion-md-document' },
  { name: 'ion-md-done-all' },
  { name: 'ion-md-download' },
  { name: 'ion-md-easel' },
  { name: 'ion-md-egg' },
  { name: 'ion-md-exit' },
  { name: 'ion-md-expand' },
  { name: 'ion-md-eye' },
  { name: 'ion-md-eye-off' },
  { name: 'ion-md-fastforward' },
  { name: 'ion-md-female' },
  { name: 'ion-md-filing' },
  { name: 'ion-md-film' },
  { name: 'ion-md-finger-print' },
  { name: 'ion-md-fitness' },
  { name: 'ion-md-flag' },
  { name: 'ion-md-flame' },
  { name: 'ion-md-flash' },
  { name: 'ion-md-flash-off' },
  { name: 'ion-md-flashlight' },
  { name: 'ion-md-flask' },
  { name: 'ion-md-flower' },
  { name: 'ion-md-folder' },
  { name: 'ion-md-folder-open' },
  { name: 'ion-md-football' },
  { name: 'ion-md-funnel' },
  { name: 'ion-md-gift' },
  { name: 'ion-md-git-branch' },
  { name: 'ion-md-git-commit' },
  { name: 'ion-md-git-compare' },
  { name: 'ion-md-git-merge' },
  { name: 'ion-md-git-network' },
  { name: 'ion-md-git-pull-request' },
  { name: 'ion-md-glasses' },
  { name: 'ion-md-globe' },
  { name: 'ion-md-grid' },
  { name: 'ion-md-hammer' },
  { name: 'ion-md-hand' },
  { name: 'ion-md-happy' },
  { name: 'ion-md-headset' },
  { name: 'ion-md-heart' },
  { name: 'ion-md-heart-dislike' },
  { name: 'ion-md-heart-empty' },
  { name: 'ion-md-heart-half' },
  { name: 'ion-md-help' },
  { name: 'ion-md-help-buoy' },
  { name: 'ion-md-help-circle' },
  { name: 'ion-md-help-circle-outline' },
  { name: 'ion-md-home' },
  { name: 'ion-md-hourglass' },
  { name: 'ion-md-ice-cream' },
  { name: 'ion-md-image' },
  { name: 'ion-md-images' },
  { name: 'ion-md-infinite' },
  { name: 'ion-md-information' },
  { name: 'ion-md-information-circle' },
  { name: 'ion-md-information-circle-outline' },
  { name: 'ion-md-jet' },
  { name: 'ion-md-journal' },
  { name: 'ion-md-key' },
  { name: 'ion-md-keypad' },
  { name: 'ion-md-laptop' },
  { name: 'ion-md-leaf' },
  { name: 'ion-md-link' },
  { name: 'ion-md-list' },
  { name: 'ion-md-list-box' },
  { name: 'ion-md-locate' },
  { name: 'ion-md-lock' },
  { name: 'ion-md-log-in' },
  { name: 'ion-md-log-out' },
  { name: 'ion-md-magnet' },
  { name: 'ion-md-mail' },
  { name: 'ion-md-mail-open' },
  { name: 'ion-md-mail-unread' },
  { name: 'ion-md-male' },
  { name: 'ion-md-man' },
  { name: 'ion-md-map' },
  { name: 'ion-md-medal' },
  { name: 'ion-md-medical' },
  { name: 'ion-md-medkit' },
  { name: 'ion-md-megaphone' },
  { name: 'ion-md-menu' },
  { name: 'ion-md-mic' },
  { name: 'ion-md-mic-off' },
  { name: 'ion-md-microphone' },
  { name: 'ion-md-moon' },
  { name: 'ion-md-more' },
  { name: 'ion-md-move' },
  { name: 'ion-md-musical-note' },
  { name: 'ion-md-musical-notes' },
  { name: 'ion-md-navigate' },
  { name: 'ion-md-notifications' },
  { name: 'ion-md-notifications-off' },
  { name: 'ion-md-notifications-outline' },
  { name: 'ion-md-nuclear' },
  { name: 'ion-md-nutrition' },
  { name: 'ion-md-open' },
  { name: 'ion-md-options' },
  { name: 'ion-md-outlet' },
  { name: 'ion-md-paper' },
  { name: 'ion-md-paper-plane' },
  { name: 'ion-md-partly-sunny' },
  { name: 'ion-md-pause' },
  { name: 'ion-md-paw' },
  { name: 'ion-md-people' },
  { name: 'ion-md-person' },
  { name: 'ion-md-person-add' },
  { name: 'ion-md-phone-landscape' },
  { name: 'ion-md-phone-portrait' },
  { name: 'ion-md-photos' },
  { name: 'ion-md-pie' },
  { name: 'ion-md-pin' },
  { name: 'ion-md-pint' },
  { name: 'ion-md-pizza' },
  { name: 'ion-md-planet' },
  { name: 'ion-md-play' },
  { name: 'ion-md-play-circle' },
  { name: 'ion-md-podium' },
  { name: 'ion-md-power' },
  { name: 'ion-md-pricetag' },
  { name: 'ion-md-pricetags' },
  { name: 'ion-md-print' },
  { name: 'ion-md-pulse' },
  { name: 'ion-md-qr-scanner' },
  { name: 'ion-md-quote' },
  { name: 'ion-md-radio' },
  { name: 'ion-md-radio-button-off' },
  { name: 'ion-md-radio-button-on' },
  { name: 'ion-md-rainy' },
  { name: 'ion-md-recording' },
  { name: 'ion-md-redo' },
  { name: 'ion-md-refresh' },
  { name: 'ion-md-refresh-circle' },
  { name: 'ion-md-remove' },
  { name: 'ion-md-remove-circle' },
  { name: 'ion-md-remove-circle-outline' },
  { name: 'ion-md-reorder' },
  { name: 'ion-md-repeat' },
  { name: 'ion-md-resize' },
  { name: 'ion-md-restaurant' },
  { name: 'ion-md-return-left' },
  { name: 'ion-md-return-right' },
  { name: 'ion-md-reverse-camera' },
  { name: 'ion-md-rewind' },
  { name: 'ion-md-ribbon' },
  { name: 'ion-md-rocket' },
  { name: 'ion-md-rose' },
  { name: 'ion-md-sad' },
  { name: 'ion-md-save' },
  { name: 'ion-md-school' },
  { name: 'ion-md-search' },
  { name: 'ion-md-send' },
  { name: 'ion-md-settings' },
  { name: 'ion-md-share' },
  { name: 'ion-md-share-alt' },
  { name: 'ion-md-shirt' },
  { name: 'ion-md-shuffle' },
  { name: 'ion-md-skip-backward' },
  { name: 'ion-md-skip-forward' },
  { name: 'ion-md-snow' },
  { name: 'ion-md-speedometer' },
  { name: 'ion-md-square' },
  { name: 'ion-md-square-outline' },
  { name: 'ion-md-star' },
  { name: 'ion-md-star-half' },
  { name: 'ion-md-star-outline' },
  { name: 'ion-md-stats' },
  { name: 'ion-md-stopwatch' },
  { name: 'ion-md-subway' },
  { name: 'ion-md-sunny' },
  { name: 'ion-md-swap' },
  { name: 'ion-md-switch' },
  { name: 'ion-md-sync' },
  { name: 'ion-md-tablet-landscape' },
  { name: 'ion-md-tablet-portrait' },
  { name: 'ion-md-tennisball' },
  { name: 'ion-md-text' },
  { name: 'ion-md-thermometer' },
  { name: 'ion-md-thumbs-down' },
  { name: 'ion-md-thumbs-up' },
  { name: 'ion-md-thunderstorm' },
  { name: 'ion-md-time' },
  { name: 'ion-md-timer' },
  { name: 'ion-md-today' },
  { name: 'ion-md-train' },
  { name: 'ion-md-transgender' },
  { name: 'ion-md-trash' },
  { name: 'ion-md-trending-down' },
  { name: 'ion-md-trending-up' },
  { name: 'ion-md-trophy' },
  { name: 'ion-md-tv' },
  { name: 'ion-md-umbrella' },
  { name: 'ion-md-undo' },
  { name: 'ion-md-unlock' },
  { name: 'ion-md-videocam' },
  { name: 'ion-md-volume-high' },
  { name: 'ion-md-volume-low' },
  { name: 'ion-md-volume-mute' },
  { name: 'ion-md-volume-off' },
  { name: 'ion-md-walk' },
  { name: 'ion-md-wallet' },
  { name: 'ion-md-warning' },
  { name: 'ion-md-watch' },
  { name: 'ion-md-water' },
  { name: 'ion-md-wifi' },
  { name: 'ion-md-wine' },
  { name: 'ion-md-woman' }
]
export default fonts
