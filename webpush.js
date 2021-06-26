const webpush = require('web-push');

// let vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BDBnAvs9T9nz4BYNBg7n-A44I0wBwTTN8oF1Q8hpJwglpFF9AZspnKJKu46_9AYnSIEojYJf0NlF5jevVpL_d8I',
  privateKey: 'rK9c4FIjr_uRfw-GS8zbPuBBUU0kzThTxxfdlJctZ8w'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  
    "endpoint": "https://fcm.googleapis.com/fcm/send/fxOAFeGFteQ:APA91bG9cZhlZFU0L_32GumZZNAYzZy1v4tHygFIE26EqCbkrxCr9iEBFCYhhTcxsg1UrsyQuettFJ3xQtrY6ijyIoQxib5Mfhb-VyiK1IGJ1vLRQgjfb0sX5LgJ8TPOoBnIw7jo5rwo",
    "expirationTime": null,
    "keys": {
      "p256dh": "BFtsmY31kTnGkCv_iWVLrgnhGT29xxkLx38rBcop1lW_5Bbj2eblrnZMHsZ2NKHEhDeRzdUd7yyXiHx4lkyZSJs",
      "auth": "8ncjU_NytUiV71P95GZnQg"
    
  }
}


webpush.sendNotification(pushSubscription, 'Your Push Payload Text');