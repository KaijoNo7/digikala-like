// Sample catalog for the Azar Digital (آذر دیجیتال) storefront prototype.
// This file is the source of truth. `npm run sync-products` writes the same list to
// backend/products.json, which the API serves. This file is also the offline fallback
// so the storefront still works without the API running.
// Prices are in Toman. Product photos live in public/img/products/<id>.jpg;
// their sources and licenses are listed in src/data/imageCredits.json.

export const STORE_NAME = 'آذر دیجیتال'
export const STORE_NAME_EN = 'Azar Digital'

export const categories = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'mobile', name: 'گوشی موبایل', image: '/img/products/mb-nova-x12.jpg' },
  { id: 'tablet', name: 'تبلت', image: '/img/products/tb-tabnova-11.jpg' },
  { id: 'laptop', name: 'لپ‌تاپ', image: '/img/products/lp-airnova-14.jpg' },
  { id: 'wearable', name: 'ساعت و مچ‌بند هوشمند', image: '/img/products/wr-fitband-4.jpg' },
  { id: 'audio', name: 'هدفون و اسپیکر', image: '/img/products/au-anc-headphone.jpg' },
  { id: 'accessory', name: 'لوازم جانبی', image: '/img/products/pw-charger.jpg' },
  { id: 'gaming', name: 'گیمینگ', image: '/img/products/gm-gamepad.jpg' },
]

/** Categories without the "all" pseudo-category. */
export const realCategories = categories.filter((c) => c.id !== 'all')

// Home page hero slider. `link` is a hash route.
export const heroSlides = [
  {
    id: 'mobile',
    image: '/img/banners/hero-mobile.jpg',
    title: 'جشنواره گوشی موبایل',
    text: 'تا ۱۲٪ تخفیف روی پرچمداران نووا و پیکسلون',
    cta: 'خرید گوشی',
    link: '#/category/mobile',
  },
  {
    id: 'laptop',
    image: '/img/banners/hero-laptop.jpg',
    title: 'لپ‌تاپ برای کار و دانشگاه',
    text: 'اولترابوک‌های سبک با ۲۴ ماه گارانتی',
    cta: 'مشاهده لپ‌تاپ‌ها',
    link: '#/category/laptop',
  },
  {
    id: 'audio',
    image: '/img/banners/hero-audio.jpg',
    title: 'صدای بی‌نقص، بدون سیم',
    text: 'هدفون و هندزفری‌های بی‌سیم با تخفیف ویژه',
    cta: 'خرید هدفون',
    link: '#/category/audio',
  },
]

export const promoBanners = [
  {
    id: 'watch',
    image: '/img/banners/promo-watch.jpg',
    title: 'ساعت‌های هوشمند',
    text: 'سلامتی‌تان را همیشه همراه داشته باشید',
    link: '#/category/wearable',
  },
  {
    id: 'gaming',
    image: '/img/banners/promo-gaming.jpg',
    title: 'دنیای گیمینگ',
    text: 'کنسول، دسته بازی و کیبورد مکانیکی',
    link: '#/category/gaming',
  },
]

export const products = [
  // ---------- گوشی موبایل ----------
  {
    id: 'mb-nova-x12',
    enName: 'Nova X12 Pro',
    name: 'گوشی موبایل نووا X12 پرو',
    brand: 'نووا',
    category: 'mobile',
    price: 38900000,
    oldPrice: 42500000,
    image: '/img/products/mb-nova-x12.jpg',
    stock: 'in_stock',
    rating: 4.6,
    reviews: 1284,
    warranty: '۱۸ ماه گارانتی',
    description:
      'پرچمدار نووا با نمایشگر ۶٫۷ اینچی ۱۲۰ هرتز، دوربین سه‌گانه ۲۰۰ مگاپیکسلی و باتری ۵۰۰۰ میلی‌آمپرساعتی؛ برای کسانی که بهترین تجربه موبایل را می‌خواهند.',
    features: [
      'نمایشگر AMOLED با نرخ نوسازی ۱۲۰ هرتز',
      'دوربین اصلی ۲۰۰ مگاپیکسل با لرزشگیر اپتیکال',
      'شارژ سریع ۶۵ وات؛ ۰ تا ۱۰۰ در ۳۵ دقیقه',
      'مقاوم در برابر آب و گردوغبار با استاندارد IP68',
    ],
    specs: [
      ['صفحه نمایش', '۶٫۷ اینچ AMOLED'],
      ['حافظه داخلی', '۲۵۶ گیگابایت'],
      ['حافظه رم', '۱۲ گیگابایت'],
      ['دوربین اصلی', '۲۰۰ + ۱۲ + ۱۰ مگاپیکسل'],
      ['باتری', '۵۰۰۰ میلی‌آمپرساعت'],
      ['شبکه', '5G'],
    ],
  },
  {
    id: 'mb-nova-a54',
    enName: 'Nova A54',
    name: 'گوشی موبایل نووا A54',
    brand: 'نووا',
    category: 'mobile',
    price: 14750000,
    oldPrice: null,
    image: '/img/products/mb-nova-a54.jpg',
    stock: 'in_stock',
    rating: 4.3,
    reviews: 2391,
    warranty: '۱۸ ماه گارانتی',
    description:
      'گوشی میان‌رده و خوش‌قیمت با باتری پرقدرت و نمایشگر بزرگ؛ انتخابی منطقی برای استفاده روزمره، شبکه‌های اجتماعی و تماشای ویدیو.',
    features: [
      'باتری ۶۰۰۰ میلی‌آمپرساعتی برای دو روز کار',
      'نمایشگر ۶٫۵ اینچی ۹۰ هرتز',
      'حسگر اثر انگشت کناری',
      'پشتیبانی از دو سیم‌کارت و کارت حافظه',
    ],
    specs: [
      ['صفحه نمایش', '۶٫۵ اینچ IPS'],
      ['حافظه داخلی', '۱۲۸ گیگابایت'],
      ['حافظه رم', '۶ گیگابایت'],
      ['دوربین اصلی', '۵۰ مگاپیکسل'],
      ['باتری', '۶۰۰۰ میلی‌آمپرساعت'],
      ['شبکه', '4G'],
    ],
  },
  {
    id: 'mb-pixelon-8',
    enName: 'Pixelon 8',
    name: 'گوشی موبایل پیکسلون ۸',
    brand: 'پیکسلون',
    category: 'mobile',
    price: 29400000,
    oldPrice: 33000000,
    image: '/img/products/mb-pixelon-8.jpg',
    stock: 'low_stock',
    rating: 4.5,
    reviews: 642,
    warranty: '۱۸ ماه گارانتی',
    description:
      'پیکسلون ۸ با تمرکز بر عکاسی محاسباتی و نرم‌افزار تمیز، عکس‌هایی طبیعی در هر نوری ثبت می‌کند و تا ۷ سال به‌روزرسانی امنیتی دریافت می‌کند.',
    features: [
      'حالت عکاسی در شب با پردازش هوش مصنوعی',
      '۷ سال به‌روزرسانی سیستم‌عامل و امنیتی',
      'شارژ بی‌سیم ۱۵ وات',
      'بدنه آلومینیومی و شیشه مقاوم',
    ],
    specs: [
      ['صفحه نمایش', '۶٫۲ اینچ OLED'],
      ['حافظه داخلی', '۲۵۶ گیگابایت'],
      ['حافظه رم', '۸ گیگابایت'],
      ['دوربین اصلی', '۵۰ + ۱۲ مگاپیکسل'],
      ['باتری', '۴۵۷۵ میلی‌آمپرساعت'],
      ['شبکه', '5G'],
    ],
  },
  {
    id: 'mb-lumen-fold',
    enName: 'Lumen Z Fold 2',
    name: 'گوشی تاشو لومن زد فولد ۲',
    brand: 'لومن',
    category: 'mobile',
    price: 64000000,
    oldPrice: null,
    image: '/img/products/mb-lumen-fold.jpg',
    stock: 'in_stock',
    rating: 4.2,
    reviews: 187,
    warranty: '۱۸ ماه گارانتی',
    description:
      'گوشی و تبلت در یک دستگاه؛ با باز کردن لومن زد فولد ۲ یک نمایشگر ۷٫۶ اینچی برای کار چندوظیفه‌ای و تماشای فیلم در اختیار دارید.',
    features: [
      'نمایشگر داخلی تاشو ۷٫۶ اینچ',
      'لولای مقاوم تا ۲۰۰ هزار بار باز و بسته شدن',
      'اجرای هم‌زمان سه برنامه روی صفحه',
      'پشتیبانی از قلم هوشمند',
    ],
    specs: [
      ['صفحه نمایش', '۷٫۶ اینچ داخلی / ۶٫۲ اینچ بیرونی'],
      ['حافظه داخلی', '۵۱۲ گیگابایت'],
      ['حافظه رم', '۱۲ گیگابایت'],
      ['دوربین اصلی', '۵۰ + ۱۲ + ۱۰ مگاپیکسل'],
      ['باتری', '۴۴۰۰ میلی‌آمپرساعت'],
      ['شبکه', '5G'],
    ],
  },

  // ---------- تبلت ----------
  {
    id: 'tb-tabnova-11',
    enName: 'TabNova 11',
    name: 'تبلت تب‌نوا ۱۱',
    brand: 'نووا',
    category: 'tablet',
    price: 18600000,
    oldPrice: 21000000,
    image: '/img/products/tb-tabnova-11.jpg',
    stock: 'in_stock',
    rating: 4.4,
    reviews: 531,
    warranty: '۱۸ ماه گارانتی',
    description:
      'تبلت ۱۱ اینچی همه‌کاره برای درس، کار و سرگرمی؛ با چهار اسپیکر استریو و باتری‌ای که یک روز کامل همراهتان است.',
    features: [
      'نمایشگر ۱۱ اینچ 2K با نرخ نوسازی ۹۰ هرتز',
      'چهار اسپیکر با پشتیبانی از Dolby Atmos',
      'باتری ۸۰۰۰ میلی‌آمپرساعت',
      'امکان اتصال کیبورد مگنتی',
    ],
    specs: [
      ['صفحه نمایش', '۱۱ اینچ IPS'],
      ['حافظه داخلی', '۱۲۸ گیگابایت'],
      ['حافظه رم', '۶ گیگابایت'],
      ['باتری', '۸۰۰۰ میلی‌آمپرساعت'],
      ['اتصال', 'Wi-Fi'],
    ],
  },
  {
    id: 'tb-tabnova-mini',
    enName: 'TabNova Mini 8',
    name: 'تبلت تب‌نوا مینی ۸',
    brand: 'نووا',
    category: 'tablet',
    price: 11200000,
    oldPrice: null,
    image: '/img/products/tb-tabnova-mini.jpg',
    stock: 'in_stock',
    rating: 4.1,
    reviews: 298,
    warranty: '۱۸ ماه گارانتی',
    description:
      'تبلت ۸ اینچی جمع‌وجور و سبک که در کیف و حتی جیب کت جا می‌شود؛ ایده‌آل برای کتاب‌خوانی، مسیریابی و استفاده کودکان.',
    features: [
      'وزن فقط ۳۲۰ گرم',
      'حالت مطالعه با کاهش نور آبی',
      'پشتیبانی از سیم‌کارت و تماس تلفنی',
      'کنترل والدین داخلی',
    ],
    specs: [
      ['صفحه نمایش', '۸ اینچ IPS'],
      ['حافظه داخلی', '۶۴ گیگابایت'],
      ['حافظه رم', '۴ گیگابایت'],
      ['باتری', '۵۱۰۰ میلی‌آمپرساعت'],
      ['اتصال', 'Wi-Fi + 4G'],
    ],
  },
  {
    id: 'tb-tabpro-13',
    enName: 'TabPro 13 with Pen',
    name: 'تبلت تب‌پرو ۱۳ به همراه قلم',
    brand: 'نووا',
    category: 'tablet',
    price: 47500000,
    oldPrice: 52000000,
    image: '/img/products/tb-tabpro-13.jpg',
    stock: 'low_stock',
    rating: 4.7,
    reviews: 143,
    warranty: '۱۸ ماه گارانتی',
    description:
      'تبلت حرفه‌ای ۱۳ اینچی برای طراحان و تولیدکنندگان محتوا؛ قلم حساس به فشار در جعبه است و نمایشگر OLED رنگ‌ها را دقیق نشان می‌دهد.',
    features: [
      'قلم با ۴۰۹۶ سطح حساسیت به فشار',
      'نمایشگر OLED با پوشش کامل رنگ DCI-P3',
      'پردازنده هشت‌هسته‌ای قدرتمند',
      'درگاه USB-C با سرعت ۱۰ گیگابیت',
    ],
    specs: [
      ['صفحه نمایش', '۱۳ اینچ OLED'],
      ['حافظه داخلی', '۵۱۲ گیگابایت'],
      ['حافظه رم', '۱۲ گیگابایت'],
      ['باتری', '۱۰۰۹۰ میلی‌آمپرساعت'],
      ['اقلام همراه', 'قلم هوشمند'],
    ],
  },

  // ---------- لپ‌تاپ ----------
  {
    id: 'lp-airnova-14',
    enName: 'AirNova 14 Ultrabook',
    name: 'لپ‌تاپ اولترابوک ایرنوا ۱۴',
    brand: 'نووا',
    category: 'laptop',
    price: 56000000,
    oldPrice: 61500000,
    image: '/img/products/lp-airnova-14.jpg',
    stock: 'in_stock',
    rating: 4.6,
    reviews: 376,
    warranty: '۲۴ ماه گارانتی',
    description:
      'اولترابوک باریک و سبک با بدنه آلومینیومی و باتری تا ۱۵ ساعت؛ همراهی بی‌صدا برای کار، جلسه و سفر.',
    features: [
      'وزن ۱٫۲ کیلوگرم و ضخامت ۱۴ میلی‌متر',
      'باتری تا ۱۵ ساعت کار مداوم',
      'کیبورد با نور پس‌زمینه',
      'حسگر اثر انگشت برای ورود سریع',
    ],
    specs: [
      ['پردازنده', 'Core i7 نسل ۱۳'],
      ['حافظه رم', '۱۶ گیگابایت'],
      ['حافظه ذخیره‌سازی', '۵۱۲ گیگابایت SSD'],
      ['صفحه نمایش', '۱۴ اینچ 2.8K'],
      ['وزن', '۱٫۲ کیلوگرم'],
    ],
  },
  {
    id: 'lp-raptor-16',
    enName: 'Raptor 16 Gaming Laptop',
    name: 'لپ‌تاپ گیمینگ رپتور ۱۶',
    brand: 'رپتور',
    category: 'laptop',
    price: 89000000,
    oldPrice: null,
    image: '/img/products/lp-raptor-16.jpg',
    stock: 'low_stock',
    rating: 4.5,
    reviews: 212,
    warranty: '۲۴ ماه گارانتی',
    description:
      'لپ‌تاپ گیمینگ پرقدرت با کارت گرافیک نسل جدید و نمایشگر ۲۴۰ هرتز؛ بازی‌های سنگین را با بالاترین تنظیمات اجرا کنید.',
    features: [
      'نمایشگر ۱۶ اینچ با نرخ نوسازی ۲۴۰ هرتز',
      'سیستم خنک‌کننده دوفنه با محفظه بخار',
      'کیبورد RGB با قابلیت تنظیم هر کلید',
      'درگاه Thunderbolt 4',
    ],
    specs: [
      ['پردازنده', 'Core i9 نسل ۱۴'],
      ['کارت گرافیک', 'RTX 4070 با ۸ گیگابایت حافظه'],
      ['حافظه رم', '۳۲ گیگابایت'],
      ['حافظه ذخیره‌سازی', '۱ ترابایت SSD'],
      ['صفحه نمایش', '۱۶ اینچ QHD+'],
    ],
  },
  {
    id: 'lp-scholar-15',
    enName: 'Scholar 15 Student Laptop',
    name: 'لپ‌تاپ دانشجویی اسکولار ۱۵',
    brand: 'اسکولار',
    category: 'laptop',
    price: 27800000,
    oldPrice: 30900000,
    image: '/img/products/lp-scholar-15.jpg',
    stock: 'in_stock',
    rating: 4.2,
    reviews: 804,
    warranty: '۱۸ ماه گارانتی',
    description:
      'لپ‌تاپ اقتصادی و قابل اعتماد برای دانشجویان؛ برای کلاس آنلاین، تایپ، برنامه‌نویسی سبک و کارهای اداری کاملاً کافی است.',
    features: [
      'کیبورد کامل با بخش اعداد',
      'وب‌کم HD با دریچه حریم خصوصی',
      'قابلیت ارتقای رم و حافظه',
      'شارژ از طریق USB-C',
    ],
    specs: [
      ['پردازنده', 'Core i5 نسل ۱۲'],
      ['حافظه رم', '۸ گیگابایت'],
      ['حافظه ذخیره‌سازی', '۵۱۲ گیگابایت SSD'],
      ['صفحه نمایش', '۱۵٫۶ اینچ Full HD'],
      ['وزن', '۱٫۷ کیلوگرم'],
    ],
  },

  // ---------- ساعت و مچ‌بند هوشمند ----------
  {
    id: 'wr-pulse-5',
    enName: 'Pulse 5 Smartwatch',
    name: 'ساعت هوشمند پالس ۵',
    brand: 'پالس',
    category: 'wearable',
    price: 8900000,
    oldPrice: 10400000,
    image: '/img/products/wr-pulse-5.jpg',
    stock: 'in_stock',
    rating: 4.4,
    reviews: 967,
    warranty: '۱۲ ماه گارانتی',
    description:
      'ساعت هوشمند با نمایشگر همیشه روشن، پایش ضربان قلب و اکسیژن خون و امکان پاسخ به تماس‌ها مستقیماً از روی مچ.',
    features: [
      'پایش ضربان قلب، اکسیژن خون و خواب',
      'مکالمه بلوتوثی از روی ساعت',
      'بیش از ۱۰۰ حالت ورزشی',
      'شارژدهی تا ۷ روز',
    ],
    specs: [
      ['صفحه نمایش', '۱٫۹ اینچ AMOLED'],
      ['مقاومت در برابر آب', '5ATM'],
      ['عمر باتری', 'تا ۷ روز'],
      ['سازگاری', 'اندروید و iOS'],
    ],
  },
  {
    id: 'wr-fitband-4',
    enName: 'FitBand 4',
    name: 'مچ‌بند هوشمند فیت‌بند ۴',
    brand: 'پالس',
    category: 'wearable',
    price: 2350000,
    oldPrice: null,
    image: '/img/products/wr-fitband-4.jpg',
    stock: 'in_stock',
    rating: 4.3,
    reviews: 3120,
    warranty: '۱۲ ماه گارانتی',
    description:
      'مچ‌بند سبک و ارزان برای شمارش قدم، کالری و کیفیت خواب؛ آن‌قدر راحت است که حتی در خواب هم متوجه حضورش نمی‌شوید.',
    features: [
      'شمارش قدم و کالری',
      'پایش خواب و ضربان قلب',
      'نمایش اعلان پیام‌ها',
      'شارژدهی تا ۱۴ روز',
    ],
    specs: [
      ['صفحه نمایش', '۱٫۱ اینچ AMOLED'],
      ['مقاومت در برابر آب', '5ATM'],
      ['عمر باتری', 'تا ۱۴ روز'],
      ['وزن', '۲۲ گرم'],
    ],
  },
  {
    id: 'wr-trail-gps',
    enName: 'Trail GPS Sport Watch',
    name: 'ساعت ورزشی تریل GPS',
    brand: 'تریل',
    category: 'wearable',
    price: 15600000,
    oldPrice: null,
    image: '/img/products/wr-trail-gps.jpg',
    stock: 'low_stock',
    rating: 4.6,
    reviews: 158,
    warranty: '۱۲ ماه گارانتی',
    description:
      'ساعت ماجراجویی با GPS دوفرکانسه، بدنه مقاوم نظامی و نقشه آفلاین؛ برای کوهنوردی، دویدن در طبیعت و شنا.',
    features: [
      'GPS دوفرکانسه با دقت بالا',
      'نقشه آفلاین و مسیریابی بازگشت',
      'بدنه مقاوم با استاندارد MIL-STD-810',
      'شارژدهی تا ۲۱ روز',
    ],
    specs: [
      ['صفحه نمایش', '۱٫۴ اینچ گرد'],
      ['مقاومت در برابر آب', '10ATM'],
      ['عمر باتری', 'تا ۲۱ روز'],
      ['حسگرها', 'GPS، ارتفاع‌سنج، قطب‌نما'],
    ],
  },

  // ---------- هدفون و اسپیکر ----------
  {
    id: 'au-earbuds',
    enName: 'Sonic Buds Wireless Earbuds',
    name: 'هندزفری بی‌سیم ایربادز',
    brand: 'سونیک',
    category: 'audio',
    price: 3900000,
    oldPrice: 5500000,
    image: '/img/products/au-earbuds.jpg',
    stock: 'in_stock',
    rating: 4.2,
    reviews: 4410,
    warranty: '۱۲ ماه گارانتی',
    description:
      'هندزفری بی‌سیم جمع‌وجور با صدای شفاف و کیس شارژ جیبی؛ همراه همیشگی برای موسیقی، پادکست و تماس.',
    features: [
      'حذف نویز محیط هنگام مکالمه',
      'تا ۲۴ ساعت پخش با کیس شارژ',
      'کنترل لمسی',
      'مقاوم در برابر تعریق IPX4',
    ],
    specs: [
      ['نسخه بلوتوث', '۵٫۳'],
      ['زمان پخش', '۶ ساعت (۲۴ ساعت با کیس)'],
      ['درگاه شارژ', 'USB-C'],
      ['مقاومت', 'IPX4'],
    ],
  },
  {
    id: 'au-anc-headphone',
    enName: 'Sonic Max ANC Headphones',
    name: 'هدفون بی‌سیم نویزکنسلینگ سونیک مکس',
    brand: 'سونیک',
    category: 'audio',
    price: 9800000,
    oldPrice: 11900000,
    image: '/img/products/au-anc-headphone.jpg',
    stock: 'in_stock',
    rating: 4.7,
    reviews: 1032,
    warranty: '۱۲ ماه گارانتی',
    description:
      'هدفون روگوشی با حذف نویز فعال؛ صدای مترو و کافه را خاموش کنید و تا ۴۰ ساعت با کیفیت بالا موسیقی گوش دهید.',
    features: [
      'حذف نویز فعال (ANC) هوشمند',
      'تا ۴۰ ساعت پخش با هر بار شارژ',
      'اتصال هم‌زمان به دو دستگاه',
      'بالشتک‌های نرم و قابل تعویض',
    ],
    specs: [
      ['نوع', 'روگوشی بسته'],
      ['نسخه بلوتوث', '۵٫۳'],
      ['زمان پخش', '۴۰ ساعت'],
      ['کدک‌ها', 'AAC، LDAC'],
    ],
  },
  {
    id: 'au-speaker',
    enName: 'BoomBox Waterproof Speaker',
    name: 'اسپیکر بلوتوثی ضدآب بوم‌باکس',
    brand: 'سونیک',
    category: 'audio',
    price: 3250000,
    oldPrice: null,
    image: '/img/products/au-speaker.jpg',
    stock: 'in_stock',
    rating: 4.4,
    reviews: 1875,
    warranty: '۱۲ ماه گارانتی',
    description:
      'اسپیکر قابل حمل با بیس قدرتمند و بدنه ضدآب؛ آن را به سفر، کنار استخر یا مهمانی ببرید.',
    features: [
      'توان خروجی ۲۰ وات',
      'ضدآب و ضدگردوغبار IP67',
      'تا ۱۲ ساعت پخش',
      'اتصال دو اسپیکر به‌صورت استریو',
    ],
    specs: [
      ['توان', '۲۰ وات'],
      ['نسخه بلوتوث', '۵٫۱'],
      ['زمان پخش', '۱۲ ساعت'],
      ['مقاومت', 'IP67'],
    ],
  },
  {
    id: 'au-neckband',
    enName: 'Sonic Sport Neckband',
    name: 'هندزفری گردنی اسپرت',
    brand: 'سونیک',
    category: 'audio',
    price: 1450000,
    oldPrice: null,
    image: '/img/products/au-neckband.jpg',
    stock: 'in_stock',
    rating: 4.0,
    reviews: 2266,
    warranty: '۱۲ ماه گارانتی',
    description:
      'هندزفری گردنی سبک با سرهای مگنتی که هنگام ورزش جابه‌جا نمی‌شود؛ گزینه‌ای مقرون‌به‌صرفه برای دویدن و باشگاه.',
    features: [
      'سرهای مگنتی که به هم می‌چسبند',
      'تا ۱۸ ساعت پخش',
      'شارژ سریع: ۱۰ دقیقه برای ۳ ساعت',
      'مقاوم در برابر تعریق',
    ],
    specs: [
      ['نسخه بلوتوث', '۵٫۰'],
      ['زمان پخش', '۱۸ ساعت'],
      ['درگاه شارژ', 'USB-C'],
      ['وزن', '۲۸ گرم'],
    ],
  },

  // ---------- لوازم جانبی ----------
  {
    id: 'ph-case',
    enName: 'Protective Phone Case',
    name: 'قاب محافظ گوشی',
    brand: 'آذر',
    category: 'accessory',
    price: 690000,
    oldPrice: 890000,
    image: '/img/products/ph-case.jpg',
    stock: 'in_stock',
    rating: 4.1,
    reviews: 3520,
    warranty: '۶ ماه ضمانت',
    description:
      'قاب سیلیکونی ضدضربه با لبه‌های برجسته که از دوربین و صفحه نمایش در برابر افتادن محافظت می‌کند.',
    features: ['گوشه‌های تقویت‌شده ضدضربه', 'لبه برجسته دور دوربین', 'سازگار با شارژ بی‌سیم'],
    specs: [
      ['جنس', 'سیلیکون و پلی‌کربنات'],
      ['سازگاری', 'نووا X12 پرو'],
      ['ضخامت', '۱٫۵ میلی‌متر'],
    ],
  },
  {
    id: 'ph-glass',
    enName: 'Tempered Glass Screen Protector',
    name: 'محافظ صفحه نمایش شیشه‌ای',
    brand: 'آذر',
    category: 'accessory',
    price: 350000,
    oldPrice: 450000,
    image: '/img/products/ph-glass.jpg',
    stock: 'in_stock',
    rating: 3.9,
    reviews: 5104,
    warranty: '۶ ماه ضمانت',
    description: 'گلس شیشه‌ای با سختی 9H و پوشش ضد اثر انگشت، همراه با ابزار نصب آسان و بدون حباب.',
    features: ['سختی 9H در برابر خط‌وخش', 'پوشش ضد اثر انگشت', 'قاب راهنمای نصب در جعبه'],
    specs: [
      ['جنس', 'شیشه سخت‌شده'],
      ['سختی', '9H'],
      ['ضخامت', '۰٫۳۳ میلی‌متر'],
    ],
  },
  {
    id: 'pw-charger',
    enName: '20W USB-C Wall Charger',
    name: 'شارژر دیواری ۲۰ وات USB-C',
    brand: 'آذر',
    category: 'accessory',
    price: 1150000,
    oldPrice: 1450000,
    image: '/img/products/pw-charger.jpg',
    stock: 'in_stock',
    rating: 4.5,
    reviews: 6230,
    warranty: '۱۲ ماه گارانتی',
    description: 'شارژر فشرده با پشتیبانی از Power Delivery که گوشی را در ۳۰ دقیقه تا ۵۰ درصد شارژ می‌کند.',
    features: ['پشتیبانی از PD 3.0', 'محافظت در برابر گرمای بیش از حد', 'ابعاد کوچک و سبک'],
    specs: [
      ['توان خروجی', '۲۰ وات'],
      ['درگاه', 'USB-C'],
      ['ورودی', '۱۰۰ تا ۲۴۰ ولت'],
    ],
  },
  {
    id: 'pw-cable',
    enName: 'USB-C Cable 1.5 m',
    name: 'کابل شارژ USB-C (۱٫۵ متر)',
    brand: 'آذر',
    category: 'accessory',
    price: 390000,
    oldPrice: null,
    image: '/img/products/pw-cable.jpg',
    stock: 'in_stock',
    rating: 4.3,
    reviews: 7712,
    warranty: '۱۲ ماه گارانتی',
    description: 'کابل کنفی بادوام با پشتیبانی از شارژ سریع ۶۰ وات و انتقال داده.',
    features: ['روکش کنفی مقاوم', 'پشتیبانی از شارژ ۶۰ وات', 'تست‌شده برای ۱۰ هزار بار خم شدن'],
    specs: [
      ['طول', '۱٫۵ متر'],
      ['حداکثر توان', '۶۰ وات'],
      ['نوع اتصال', 'USB-C به USB-C'],
    ],
  },
  {
    id: 'pw-powerbank',
    enName: '20000 mAh Power Bank',
    name: 'پاوربانک ۲۰۰۰۰ میلی‌آمپر',
    brand: 'آذر',
    category: 'accessory',
    price: 2100000,
    oldPrice: 2450000,
    image: '/img/products/pw-powerbank.jpg',
    stock: 'in_stock',
    rating: 4.4,
    reviews: 2894,
    warranty: '۱۲ ماه گارانتی',
    description: 'پاوربانک پرظرفیت با شارژ سریع که گوشی را تا ۴ بار و لپ‌تاپ‌های USB-C را هم شارژ می‌کند.',
    features: ['شارژ سریع ۲۲٫۵ وات', 'سه خروجی هم‌زمان', 'نمایشگر دیجیتال درصد شارژ'],
    specs: [
      ['ظرفیت', '۲۰۰۰۰ میلی‌آمپرساعت'],
      ['خروجی‌ها', '۲ × USB-A، ۱ × USB-C'],
      ['وزن', '۳۹۰ گرم'],
    ],
  },
  {
    id: 'lp-mouse',
    enName: 'Wireless Mouse',
    name: 'ماوس بی‌سیم',
    brand: 'آذر',
    category: 'accessory',
    price: 1250000,
    oldPrice: 1600000,
    image: '/img/products/lp-mouse.jpg',
    stock: 'low_stock',
    rating: 4.3,
    reviews: 3301,
    warranty: '۱۲ ماه گارانتی',
    description: 'ماوس بی‌سیم بی‌صدا با طراحی ارگونومیک؛ قابل اتصال با دانگل یا بلوتوث.',
    features: ['کلیک‌های بی‌صدا', 'اتصال دوگانه بلوتوث و دانگل', 'دقت قابل تنظیم تا ۲۴۰۰ DPI'],
    specs: [
      ['اتصال', 'بلوتوث و ۲٫۴ گیگاهرتز'],
      ['دقت', 'تا ۲۴۰۰ DPI'],
      ['باتری', '۱ عدد AA (تا ۱۲ ماه)'],
    ],
  },
  {
    id: 'lp-hub',
    enName: '6-in-1 USB-C Hub',
    name: 'هاب USB-C شش‌کاره',
    brand: 'آذر',
    category: 'accessory',
    price: 1950000,
    oldPrice: 2400000,
    image: '/img/products/lp-hub.jpg',
    stock: 'low_stock',
    rating: 4.2,
    reviews: 961,
    warranty: '۱۲ ماه گارانتی',
    description: 'با یک درگاه USB-C، خروجی HDMI، کارت‌خوان و درگاه‌های USB بیشتری به لپ‌تاپ اضافه کنید.',
    features: ['خروجی HDMI با کیفیت 4K', 'کارت‌خوان SD و microSD', 'شارژ عبوری تا ۱۰۰ وات'],
    specs: [
      ['درگاه‌ها', 'HDMI، ۲ × USB-A، SD، microSD، USB-C PD'],
      ['خروجی تصویر', '4K در ۳۰ هرتز'],
      ['بدنه', 'آلومینیوم'],
    ],
  },
  {
    id: 'lp-stand',
    enName: 'Aluminium Laptop Stand',
    name: 'پایه آلومینیومی لپ‌تاپ',
    brand: 'آذر',
    category: 'accessory',
    price: 1400000,
    oldPrice: null,
    image: '/img/products/lp-stand.jpg',
    stock: 'in_stock',
    rating: 4.5,
    reviews: 744,
    warranty: '۶ ماه ضمانت',
    description: 'پایه قابل تنظیم که صفحه لپ‌تاپ را هم‌سطح چشم می‌آورد و به خنک ماندن دستگاه کمک می‌کند.',
    features: ['شش زاویه قابل تنظیم', 'تاشو و قابل حمل', 'پدهای ضدلغزش سیلیکونی'],
    specs: [
      ['جنس', 'آلومینیوم'],
      ['سازگاری', 'لپ‌تاپ ۱۰ تا ۱۷ اینچ'],
      ['تحمل وزن', 'تا ۸ کیلوگرم'],
    ],
  },
  {
    id: 'lp-cooling',
    enName: 'Laptop Cooling Pad',
    name: 'کول‌پد لپ‌تاپ',
    brand: 'آذر',
    category: 'accessory',
    price: 1700000,
    oldPrice: null,
    image: '/img/products/lp-cooling.jpg',
    stock: 'in_stock',
    rating: 4.0,
    reviews: 1190,
    warranty: '۱۲ ماه گارانتی',
    description: 'پایه خنک‌کننده با پنج فن کم‌صدا برای کاهش دمای لپ‌تاپ هنگام کار سنگین و بازی.',
    features: ['پنج فن با سرعت قابل تنظیم', 'دو درگاه USB اضافه', 'نور آبی پس‌زمینه'],
    specs: [
      ['تعداد فن', '۵ عدد'],
      ['سازگاری', 'لپ‌تاپ تا ۱۷ اینچ'],
      ['تغذیه', 'USB'],
    ],
  },

  // ---------- گیمینگ ----------
  {
    id: 'gm-handheld',
    enName: 'Portal Handheld Console',
    name: 'کنسول بازی دستی پورتال',
    brand: 'رپتور',
    category: 'gaming',
    price: 24500000,
    oldPrice: null,
    image: '/img/products/gm-handheld.jpg',
    stock: 'low_stock',
    rating: 4.8,
    reviews: 96,
    warranty: '۱۸ ماه گارانتی',
    description:
      'کنسول بازی دستی با نمایشگر ۷ اینچی و پردازنده قدرتمند؛ کتابخانه بازی‌های کامپیوتری‌تان را همه‌جا همراه داشته باشید.',
    features: [
      'نمایشگر ۷ اینچ ۱۲۰ هرتز',
      'دسته‌های داخلی با لرزش هپتیک',
      'خروجی تصویر به تلویزیون',
      'شیار کارت حافظه microSD',
    ],
    specs: [
      ['صفحه نمایش', '۷ اینچ Full HD'],
      ['حافظه داخلی', '۵۱۲ گیگابایت SSD'],
      ['حافظه رم', '۱۶ گیگابایت'],
      ['باتری', '۴۰ وات‌ساعت'],
    ],
  },
  {
    id: 'gm-gamepad',
    enName: 'Wireless Gamepad',
    name: 'دسته بازی بی‌سیم',
    brand: 'رپتور',
    category: 'gaming',
    price: 2650000,
    oldPrice: 3100000,
    image: '/img/products/gm-gamepad.jpg',
    stock: 'in_stock',
    rating: 4.4,
    reviews: 1458,
    warranty: '۱۲ ماه گارانتی',
    description: 'دسته بازی بی‌سیم سازگار با کامپیوتر، موبایل و کنسول؛ با تریگرهای حساس و لرزش دوگانه.',
    features: ['سازگار با ویندوز، اندروید و iOS', 'لرزش دوموتوره', 'تا ۲۰ ساعت بازی با هر شارژ'],
    specs: [
      ['اتصال', 'بلوتوث و دانگل ۲٫۴ گیگاهرتز'],
      ['باتری', '۱۰۰۰ میلی‌آمپرساعت'],
      ['درگاه شارژ', 'USB-C'],
    ],
  },
  {
    id: 'lp-keyboard',
    enName: 'Compact Mechanical Keyboard',
    name: 'کیبورد مکانیکی جمع‌وجور',
    brand: 'رپتور',
    category: 'gaming',
    price: 4200000,
    oldPrice: 4900000,
    image: '/img/products/lp-keyboard.jpg',
    stock: 'in_stock',
    rating: 4.6,
    reviews: 688,
    warranty: '۱۲ ماه گارانتی',
    description: 'کیبورد مکانیکی ۷۵ درصد با سوئیچ‌های قابل تعویض و نور RGB؛ حروف فارسی و انگلیسی حک شده است.',
    features: ['سوئیچ‌های Hot-swap', 'نورپردازی RGB قابل برنامه‌ریزی', 'حروف حک‌شده فارسی/انگلیسی'],
    specs: [
      ['چیدمان', '۷۵٪ (۸۴ کلید)'],
      ['سوئیچ', 'قرمز خطی'],
      ['اتصال', 'سیمی USB-C و بلوتوث'],
    ],
  },
  {
    id: 'gm-mousepad',
    enName: 'XL Gaming Mousepad',
    name: 'ماوس‌پد گیمینگ XL',
    brand: 'رپتور',
    category: 'gaming',
    price: 690000,
    oldPrice: 890000,
    image: '/img/products/gm-mousepad.jpg',
    stock: 'in_stock',
    rating: 4.3,
    reviews: 2047,
    warranty: '۶ ماه ضمانت',
    description: 'ماوس‌پد بزرگ که کیبورد و ماوس را با هم در بر می‌گیرد؛ سطح نرم برای حرکت دقیق و زیره ضدلغزش.',
    features: ['لبه‌های دوخته‌شده ضدریش', 'زیره لاستیکی ضدلغزش', 'قابل شستشو'],
    specs: [
      ['ابعاد', '۹۰ × ۴۰ سانتی‌متر'],
      ['ضخامت', '۴ میلی‌متر'],
      ['جنس سطح', 'پارچه بافت ریز'],
    ],
  },
  {
    id: 'au-headset',
    enName: 'Wired Gaming Headset',
    name: 'هدست گیمینگ سیمی',
    brand: 'رپتور',
    category: 'gaming',
    price: 3200000,
    oldPrice: null,
    image: '/img/products/au-headset.jpg',
    stock: 'out_of_stock',
    rating: 4.1,
    reviews: 1322,
    warranty: '۱۲ ماه گارانتی',
    description: 'هدست گیمینگ با صدای فراگیر مجازی ۷٫۱ و میکروفون قابل جدا شدن برای بازی تیمی.',
    features: ['صدای فراگیر مجازی ۷٫۱', 'میکروفون جداشدنی با حذف نویز', 'بالشتک‌های مموری‌فوم'],
    specs: [
      ['اتصال', 'جک ۳٫۵ و USB'],
      ['درایور', '۵۰ میلی‌متر'],
      ['طول کابل', '۲ متر'],
    ],
  },
]


export const stockLabels = {
  in_stock: 'موجود در انبار',
  low_stock: 'تنها چند عدد باقی مانده',
  out_of_stock: 'ناموجود',
}

const faNumber = new Intl.NumberFormat('fa-IR')

/** Format a number with Persian digits and thousands separators. */
export function toFa(value) {
  return faNumber.format(value)
}

export function categoryName(id) {
  return categories.find((c) => c.id === id)?.name ?? id
}

export function discountPercent(product) {
  if (!product.oldPrice || product.oldPrice <= product.price) return 0
  return Math.round((1 - product.price / product.oldPrice) * 100)
}

export function formatPrice(value) {
  return `${toFa(value)} تومان`
}

export function productUrl(id) {
  return `#/product/${encodeURIComponent(id)}`
}

export function categoryUrl(id) {
  return id === 'all' ? '#/category/all' : `#/category/${encodeURIComponent(id)}`
}

/** Rating like 4.6 -> "۴٫۶" */
export function formatRating(value) {
  return new Intl.NumberFormat('fa-IR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value)
}

/** Products on sale with at least `min` percent off, biggest discount first. */
export function amazingOffers(list, min = 10) {
  return list
    .filter((p) => p.stock !== 'out_of_stock' && discountPercent(p) >= min)
    .sort((a, b) => discountPercent(b) - discountPercent(a))
}

/** "Best sellers" = most reviewed, a stand-in for sales data in this demo. */
export function bestSellers(list, count = 9) {
  return [...list].sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0)).slice(0, count)
}

export const sortOptions = [
  { id: 'relevant', name: 'مرتبط‌ترین' },
  { id: 'popular', name: 'محبوب‌ترین' },
  { id: 'cheap', name: 'ارزان‌ترین' },
  { id: 'expensive', name: 'گران‌ترین' },
  { id: 'discount', name: 'بیشترین تخفیف' },
]

export function sortProducts(list, sort) {
  const copy = [...list]
  switch (sort) {
    case 'popular':
      return copy.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    case 'cheap':
      return copy.sort((a, b) => a.price - b.price)
    case 'expensive':
      return copy.sort((a, b) => b.price - a.price)
    case 'discount':
      return copy.sort((a, b) => discountPercent(b) - discountPercent(a))
    default:
      return copy
  }
}
