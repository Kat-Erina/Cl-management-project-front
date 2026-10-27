type LocalizedText = {
  ka: string;
  en: string;
};

export type Article = {
  id: number;
  title: LocalizedText;
  subTitle: LocalizedText;
  text: LocalizedText;
  publishDate: string;
  author: string;
  published: boolean;
  image: string | null;
};

const articles: Article[] = [
  {
    id: 1,
    title: {
      ka: 'ჯანსაღი ცხოვრების წესის მნიშვნელობა',
      en: 'The Importance of a Healthy Lifestyle',
    },
    subTitle: {
      ka: 'როგორ მოქმედებს ყოველდღიური ჩვევები ჩვენს ჯანმრთელობაზე',
      en: 'How daily habits affect our health',
    },
    text: {
      ka: 'ჯანსაღი ცხოვრების წესი ჩვენი ფიზიკური და მენტალური ჯანმრთელობის მნიშვნელოვანი ნაწილია. დაბალანსებული კვება, რეგულარული ფიზიკური აქტივობა და ხარისხიანი ძილი გვეხმარება ენერგიის შენარჩუნებასა და ცხოვრების ხარისხის გაუმჯობესებაში. მცირე ცვლილებებიც კი, მაგალითად, ყოველდღიური გასეირნება ან წყლის საკმარისი რაოდენობით მიღება, დროთა განმავლობაში დადებით შედეგებს იძლევა.',
      en: 'A healthy lifestyle is an important part of our physical and mental well-being. Balanced nutrition, regular physical activity, and quality sleep help us maintain energy and improve our quality of life. Even small changes, such as taking a daily walk or drinking enough water, can have a positive impact over time.',
    },
    publishDate: '2026-10-20',
    author: 'ნინო გიორგაძე',
    published: true,
    image: 'https://example.com/images/healthy-lifestyle.jpg',
  },
  {
    id: 2,
    title: {
      ka: 'რეგულარული ვარჯიშის სარგებელი',
      en: 'The Benefits of Regular Exercise',
    },
    subTitle: {
      ka: 'რატომ არის ფიზიკური აქტივობა მნიშვნელოვანი ყველა ასაკში',
      en: 'Why physical activity matters at every age',
    },
    text: {
      ka: 'რეგულარული ვარჯიში ხელს უწყობს კუნთების გაძლიერებას, ძვლების ჯანმრთელობის შენარჩუნებას და გულ-სისხლძარღვთა სისტემის გაუმჯობესებას. ფიზიკური აქტივობა ასევე დადებითად მოქმედებს განწყობასა და ძილის ხარისხზე. აუცილებელი არ არის ყოველდღიურად ინტენსიურად ვივარჯიშოთ — სიარული, ცურვა ან მსუბუქი ვარჯიშებიც სასარგებლოა.',
      en: 'Regular exercise helps strengthen muscles, maintain bone health, and improve cardiovascular function. Physical activity can also positively affect mood and sleep quality. You do not need to exercise intensely every day—walking, swimming, and light workouts can also be beneficial.',
    },
    publishDate: '2026-10-18',
    author: 'გიორგი მაისურაძე',
    published: false,
    image: null,
  },
  {
    id: 3,
    title: {
      ka: 'სწორი კვება და ენერგიის შენარჩუნება',
      en: 'Healthy Eating and Maintaining Energy',
    },
    subTitle: {
      ka: 'როგორ შევქმნათ დაბალანსებული ყოველდღიური მენიუ',
      en: 'How to build a balanced daily diet',
    },
    text: {
      ka: 'დაბალანსებული კვება ორგანიზმს აწვდის საჭირო ცილებს, ცხიმებს, ნახშირწყლებს, ვიტამინებსა და მინერალებს. სასურველია რაციონში შედიოდეს ბოსტნეული, ხილი, მარცვლეული, ცილის წყაროები და სასარგებლო ცხიმები. რეგულარული კვება და საკვების მრავალფეროვნება ხელს უწყობს ენერგიის შენარჩუნებასა და ორგანიზმის ნორმალურ ფუნქციონირებას.',
      en: 'A balanced diet provides the body with essential proteins, fats, carbohydrates, vitamins, and minerals. A varied diet should include vegetables, fruits, whole grains, protein sources, and healthy fats. Regular meals and dietary variety help maintain energy and support normal body function.',
    },
    publishDate: '2026-10-15',
    author: 'ანა ბერიძე',
    published: true,
    image: 'https://example.com/images/healthy-food.jpg',
  },
  {
    id: 4,
    title: {
      ka: 'სტრესის მართვის ეფექტური გზები',
      en: 'Effective Ways to Manage Stress',
    },
    subTitle: {
      ka: 'მარტივი პრაქტიკები ემოციური ბალანსის შესანარჩუნებლად',
      en: 'Simple practices for maintaining emotional balance',
    },
    text: {
      ka: 'სტრესი ყოველდღიური ცხოვრების ბუნებრივი ნაწილია, თუმცა მისი ხანგრძლივი გავლენა ჩვენს კეთილდღეობაზე შეიძლება აისახოს. სუნთქვითი ვარჯიშები, ფიზიკური აქტივობა, დასვენებისთვის დროის გამოყოფა და ახლობლებთან საუბარი სტრესის მართვაში დაგვეხმარება. მნიშვნელოვანია საკუთარი საჭიროებების ამოცნობა და საჭიროების შემთხვევაში პროფესიონალური დახმარების მიღება.',
      en: 'Stress is a natural part of everyday life, but prolonged stress can affect our well-being. Breathing exercises, physical activity, setting aside time to rest, and talking to people we trust can help us manage stress. It is important to recognize our needs and seek professional support when necessary.',
    },
    publishDate: '2026-10-12',
    author: 'მარიამ კაპანაძე',
    published: false,
    image: null,
  },
  {
    id: 5,
    title: {
      ka: 'ხარისხიანი ძილის მნიშვნელობა',
      en: 'Why Quality Sleep Matters',
    },
    subTitle: {
      ka: 'ძილის ჩვევები, რომლებიც ყოველდღიურ ცხოვრებას აუმჯობესებს',
      en: 'Sleep habits that can improve everyday life',
    },
    text: {
      ka: 'ხარისხიანი ძილი ხელს უწყობს მეხსიერების, კონცენტრაციისა და ემოციური მდგომარეობის გაუმჯობესებას. ძილის რეჟიმის დაცვა, დაძინებამდე ეკრანთან გატარებული დროის შემცირება და მშვიდი გარემოს შექმნა სასარგებლო ჩვევებია. ზრდასრულთა უმეტესობისთვის რეკომენდებულია ღამით დაახლოებით შვიდიდან ცხრა საათამდე ძილი.',
      en: 'Quality sleep supports memory, concentration, and emotional well-being. Maintaining a consistent sleep schedule, reducing screen time before bed, and creating a calm sleeping environment are helpful habits. Most adults are recommended to get around seven to nine hours of sleep per night.',
    },
    publishDate: '2026-10-08',
    author: 'დავით ლომიძე',
    published: true,
    image: 'https://example.com/images/sleep.jpg',
  },
];

export default articles