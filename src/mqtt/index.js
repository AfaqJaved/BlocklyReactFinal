// import CA from "../assets/ssl/ca.crt";
// import CERT from "../assets/ssl/client.crt";
// import KEY from "../assets/ssl/client.key";

// import * as mqtt from "mqtt";
// let client = mqtt.connect("mqtts://localhost:8884", {
//   // keyPath: KEY,
//   // certPath: CERT,'
//   protocol: "mqtts",
//   protocolId: "MQTT",
//   rejectUnauthorized: false,
//   ca: `
//   -----BEGIN CERTIFICATE-----
// MIIDsTCCApmgAwIBAgIUM+7FlMjj+0ykAeGaOvFqqOA5PdowDQYJKoZIhvcNAQEL
// BQAwaDELMAkGA1UEBhMCU0UxEjAQBgNVBAgMCVN0b2NraG9sbTESMBAGA1UEBwwJ
// U3RvY2tob2xtMRAwDgYDVQQKDAdoaW1pbmRzMQswCQYDVQQLDAJDQTESMBAGA1UE
// AwwJbG9jYWxob3N0MB4XDTIxMTEyNDA2MjY0MFoXDTIyMTEyNDA2MjY0MFowaDEL
// MAkGA1UEBhMCU0UxEjAQBgNVBAgMCVN0b2NraG9sbTESMBAGA1UEBwwJU3RvY2to
// b2xtMRAwDgYDVQQKDAdoaW1pbmRzMQswCQYDVQQLDAJDQTESMBAGA1UEAwwJbG9j
// YWxob3N0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqAJIGmLb1Gsy
// iILzyxYfCs/wHsYwN1QmW5enxSB6GgVoT/2d0srwcJeepwL14xlh8fmyLQcP50iq
// ym0hXeCoAJmTZuOmnbptasw0qN9TwtfV248j11XtTSAHCrZdL769hdZBX6KbbC+j
// pMg5RZgd9i1Fb90wtpWCl5/JMdz9jxfJJNqbXl6C9sRvFKo8DKkbXZH5N3AeTlJP
// lGURgwXPXSd5tzK4e9jNag3kYMdFmclWi1d11AaZa4a5iAL0zYTq//ZTvweYD+ik
// jDcwFvUiJNsWq1JToz/J7LKuyL60OVKDbHGjmivvqzKcfa4jeJZ5GJbllhmow0yI
// SV7ket86JQIDAQABo1MwUTAdBgNVHQ4EFgQUVy0QZU7/rHiChu/Nv+XwPupm1T4w
// HwYDVR0jBBgwFoAUVy0QZU7/rHiChu/Nv+XwPupm1T4wDwYDVR0TAQH/BAUwAwEB
// /zANBgkqhkiG9w0BAQsFAAOCAQEAhYcbKsuL6KfOurC818p8CrmmU9fTCV4HohyZ
// HIltNxH0IU2F552fMEtGGIbnt0mXt8iPXif6VMPOIZ37XmF6aUhH3EJvBT/3X8gW
// 8Qf67UwLTvS0mjQ6GM/+z/GKj/JPgjQQr1QPAnfamvuo90KINafWolvHEn4P6szS
// 4WPiJuSppY3Sx5AiR9S/X1khGEs9ya7MGDBzYQras1OXusHH1oH1sNfaYpw8KDUQ
// TcvhcverGPGOo4eM+uh+k+1hk4LKL9PoN1ga8i6c+tv5AT6m8ihytPZBrUu4d2Hm
// eaLhFHCgSKb+IjrgelwZrwfxAW/1tICNN3uadEAFVByM4tSfow==
// -----END CERTIFICATE-----

//   `,
//   cert: `-----BEGIN CERTIFICATE-----
//   MIIDWzCCAkMCFG7917GBapRlgwgxvf+gN135z+9aMA0GCSqGSIb3DQEBCwUAMGgx
//   CzAJBgNVBAYTAlNFMRIwEAYDVQQIDAlTdG9ja2hvbG0xEjAQBgNVBAcMCVN0b2Nr
//   aG9sbTEQMA4GA1UECgwHaGltaW5kczELMAkGA1UECwwCQ0ExEjAQBgNVBAMMCWxv
//   Y2FsaG9zdDAeFw0yMTExMjQwNjI2NDFaFw0yMjExMjQwNjI2NDFaMGwxCzAJBgNV
//   BAYTAlNFMRIwEAYDVQQIDAlTdG9ja2hvbG0xEjAQBgNVBAcMCVN0b2NraG9sbTEQ
//   MA4GA1UECgwHaGltaW5kczEPMA0GA1UECwwGQ2xpZW50MRIwEAYDVQQDDAlsb2Nh
//   bGhvc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDU9cUK7qHQgCzM
//   Epep+WDhgOlxSH/7F47lG0f/qbKS/C0j1i8++C1LP7xoa8tUxzNudpwEmtpCFSHw
//   vFO8mqPlKMNL3strxliiX2t2iEQPkNiW1B0Ck/KaTCu74iLnh+ngfmhV+C2wZFPa
//   7Yt4U5tTal2OjnpJkLifGVJo9LiNY0ZVzYIgRcMjUu+AobNKCrUUnP7QZC0/EnY3
//   fc/0rIE1a8KoLAbQfJPyqKhB+ecUbvasdxHDbZK8uO5GOT2uLWGfeCA1FIywzgg7
//   YnzkDLbfF9wD2CkCAHDVh/fDMKZfg5nsYW7UfdErXB2PBCR9/8QU7tQszDlSbLq/
//   ZLtHKg6jAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIDHdxzhFmXG21onR5+VJokO
//   vXyT0mGXp9Iz3RrohRbmxvDxxQ/ndT7KKZ/kvro5GjCx1OF8pg9yfzy8LbTHOLGe
//   lg8DtLWjsdG5S1v9QvVNc9gCuAd38yRwJa60PDvNfP8i6sVUhfHwqyHMGAKYnJUI
//   C+iVeTSBReApBSVYfBwljgjcxjUI4kamlVBFP6DoRd3EUH0tIL2U8CD0PyheY1zV
//   6nFKZPgCCoCZLkAryjNHSJQbyeyURb6sPc2kqA49tO4FD8AmuCXST45VmbvTL+sW
//   E6x5vXSPlbOPwFrHRhYZEG2aj1mkGL+XwwP0DGE7USOxayaSPtfnmsTYj0mXk1U=
//   -----END CERTIFICATE-----

//   `,
//   key: `
//   -----BEGIN PRIVATE KEY-----
// MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDU9cUK7qHQgCzM
// Epep+WDhgOlxSH/7F47lG0f/qbKS/C0j1i8++C1LP7xoa8tUxzNudpwEmtpCFSHw
// vFO8mqPlKMNL3strxliiX2t2iEQPkNiW1B0Ck/KaTCu74iLnh+ngfmhV+C2wZFPa
// 7Yt4U5tTal2OjnpJkLifGVJo9LiNY0ZVzYIgRcMjUu+AobNKCrUUnP7QZC0/EnY3
// fc/0rIE1a8KoLAbQfJPyqKhB+ecUbvasdxHDbZK8uO5GOT2uLWGfeCA1FIywzgg7
// YnzkDLbfF9wD2CkCAHDVh/fDMKZfg5nsYW7UfdErXB2PBCR9/8QU7tQszDlSbLq/
// ZLtHKg6jAgMBAAECggEAR2nXVtApMTsaSqDdfSFkbJqHLfbq+++teoTIgyKMAKBS
// HtdfZpVg0wAflUC4ochfJebecOjg0hI2HH168x9EYL9nplSjEJQl+uVWqxwM/s9K
// 4mFlDQ1B6J4seEff/pZkRmT9Zf7gi2tJd3v7LjGTP8jGcNy0g2DlmGysZwfRr4+D
// Gzfv9LcW9nbDOcovhL6k5s07yXkVjRzbpIFWcmcfsHSwnFI7/i8C6Of2/Ot0dbFT
// eWzueBDAo26YMMh/e8iQsxvCcrs4DsmtOruy6Nh5C8GrIbbqztU5F5aNTWRutk98
// ZtEZBd5NBhm2ROxo6L2RFJ5YbaaCb0GjcMFHcFAMQQKBgQD2wAm0OG/wywAHphvO
// B9TWCJn0JceTQJL5mfyBltLKM2ytGP0qdfVqMiGnltV3XdQN2x99Pw/WxRASjhde
// 5iLizZa18y5A2IBJvVsmL2MQvmhY0PxUh9aidraWICVCWznwCTd7gzIDQWxfJSXu
// FGZudwJjxlOh1lYeSWKBFYA5QwKBgQDc8XYwJE1i07tQrx2jM1hR9GAbTdIpR9If
// 14/JKyY7qpHX6kPKHmjpJnQcIxsCH0ITYmiHri6MqRlgPYX8gVVyuIcn2uI+uoV+
// a6jlf7Q3JjvPD6f/4fCW4QGSm6aYOn9szINmxz7XPVfXrviNRh+k6wI4poD6SlYo
// UgeVWT1PIQKBgCktqTDrTjsYFZwxK2i5w9ooO1EUUPcRCrYe7ZXOzsSxykwk5HMG
// lnsvfJBUSrGN9gqN6/Zh5MnJv0Hpdpr+uwmwl5srxydJOjeUIzb/J4Au1okj70hI
// FxiryRLKsI0fXk7hquGw5lLGw0gpkefmfaWntL1j5qcWdu68/nReWzSzAoGBAIxV
// KbZmOGjfBwi2UWLJR/219B0jjqr9nS7wYblqmLwpGL1FZI1KR2RfMjx058CvTe62
// AKK9NX/OH/oK2cGJ/FYDcoUT98PUANpNU1eBh1vIAxD/ZruWLJQIklEmX+gsr6bR
// N1zejMF1iwfJcMF6mrrLMfv9dcqD0LmHcJ2hstlBAoGBANVhCdZPbKjCCrNc9qtn
// Tan8zzFd0XeeoptVSxOlcedlIl71vXqP5dEZvLQG030AyJFcWvN3LC8zZBpM6olw
// cIpOgVPK4u8nLynUoEYhXaym9+8STJXlpykq0/GCG8K3WRdbJ/oZHu71y5LWOUZl
// Y3WR/lVYh14lX2/3pMGOmKSY
// -----END PRIVATE KEY-----
// `,

//   //The CA list will be used to determine if server is authorized
//   // ca: CA,
// }); // create a client

// client.on("connect", function () {
//   client.subscribe("presence", function (err) {
//     if (!err) {
//       //   client.publish("presence", "Hello mqtt");
//       client.subscribe("test");
//     } else {
//       console.log(err);
//     }
//   });
// });

// client.on("message", function (topic, message) {
//   // message is Buffer
//   console.log("Topic  : " + topic + "     " + message.toString());
//   //   console.log(message.toString());
// });

// export default client;
