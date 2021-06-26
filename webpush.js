const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
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