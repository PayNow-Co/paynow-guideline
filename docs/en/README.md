---
home: true
pageClass: home-page
heroImage: /logo.svg
heroAlt: OwlPay Logo
heroText: OwlPay
tagline: Disrupting B2B Payments Using Blockchain Tech

actions:
  - text: Getting Started
    link: /en/getting-started/
    type: primary
  - text: About Owlpay
    link: /en/about-owlpay/
    type: secondary

features:
  - title: Easy-to-use API
    details: OwlPay develops tools that add value to your business with developer-friendly APIs, using simple lines of code and documentation that enables you to integrate system data seamlessly.
  - title: Simplify the payments process for your business
    details: OwlPay employs blockchain-based infrastructure to push the pace of digitization, drive down costs, and deliver better customer experiences on a global scale
  - title: One-stop-shop for platform or marketplace business
    details: Integrated payments solution for business to accept and make payments using the OwlPay API
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
