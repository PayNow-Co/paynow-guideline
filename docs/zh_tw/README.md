---
home: true
pageClass: home-page
heroImage: /logo.svg
heroAlt: OwlPay Logo
heroText: PayNow
tagline: 新時代的區塊鏈支付服務

actions:
  - text: 從這裡開始
    link: /zh_tw/getting-started/
    type: primary
  - text: Admin (管理後台) 功能介紹
    link: /zh_tw/page-introduction/
    type: secondary

features:
  - title: 簡單易用的 API
    details: OwlPay 提供開發者友善的 API 環境，讓您的技術團隊能夠依照需求，彈性撰寫不同系統的串接程式，打造更靈活的用戶體驗。
  - title: 解決支付的難點
    details: 繁瑣的對帳、請款、付款流程讓 OwlPay 幫你處理，讓付款不再費時費工。
  - title: 安全的管理平台
    details: OwlPay 提供友善好上手的使用者後台，各營運單位的訂單及廠商資訊都能輕鬆管理。
---

```php
 OwlPay::createVendor([
   'name' => 'MyVendor',
   'application_vendor_uuid' => 'YOUR_VENDOR_UNIQUE_ID',
   'email' => 'vendor@owlpay.com',
   'description' => 'Your application Vendor',
 ]);

 OwlPay::createOrder([
   'order_serial' => 'YOUR_ORDER_NUMBER',
   'currency' => 'TWD',
   'total' => '1000',
   'vendor_uuid' => 'OWLPAY_VENDOR_UNIQUE_ID',
 ]);
```

