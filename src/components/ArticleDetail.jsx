import React from 'react';
import { useParams } from 'react-router-dom';
import blogImage1 from '../assets/designBooth.jpeg';  // Adjust path to your image
import blogImage2 from '../assets/collab.jpeg';  // Adjust path to your second image
import { AiOutlineBulb } from 'react-icons/ai';  // Importing an icon

const ArticleDetail = ({ language }) => {
  const { articleId } = useParams();

  // Summarized article data in both languages using JSX instead of HTML strings
  const articleData = {
    'booth-design': {
      titleEn: 'Booth Design and Implementation',
      titleAr: 'تصميم وتنفيذ البوثات',
      image: blogImage1,
      contentEn: (
        <>
          <h2 className="text-2xl flex items-center mb-2 text-customGreen">
            <AiOutlineBulb className="mr-2" /> Introduction
          </h2>
          <p>Booths are essential elements in events, providing interactive spaces to present products innovatively. In this article, we discuss booth design and implementation, focusing on the key aspects that make a booth stand out and contribute to a brand's success.</p>
          
          <h2 className="text-2xl mb-2 text-customGreen">Key Aspects of Booth Design</h2>
          <ul>
            <li><strong>Captivating Attention:</strong> Innovative design draws visitors in, ensuring your booth stands out in a crowded event space.</li>
            <li><strong>Enhancing Visual Identity:</strong> Booth reflects the brand's visual identity and messaging, making it instantly recognizable.</li>
            <li><strong>Providing an Interactive Experience:</strong> Interactive elements such as touch screens, demos, and games increase visitor engagement and dwell time at your booth.</li>
            <li><strong>Achieving Marketing Goals:</strong> Booths are designed not only to attract attention but also to achieve specific marketing objectives, such as lead generation and sales promotion.</li>
          </ul>
          
          <h2 className="text-2xl mb-2 text-customGreen">Booth Design Stages</h2>
          <ol>
            <li><strong>Preliminary Planning:</strong> Define clear goals, identify your target audience, and select an appropriate location at the event venue. Consider your budget early in the process.</li>
            <li><strong>Designing the Booth:</strong> Collaborate with design experts to develop a booth concept that aligns with your brand. Create 3D models and prototypes to ensure all elements work together seamlessly.</li>
            <li><strong>Execution:</strong> Once the design is finalized, construction begins. Ensure that all materials are of high quality and that your booth is assembled with precision. Install lighting, interactive displays, and any technical equipment required.</li>
            <li><strong>Operation and Maintenance:</strong> During the event, ensure the booth is staffed by knowledgeable employees. Provide continuous maintenance to keep all elements functioning correctly.</li>
          </ol>

          <h2 className="text-2xl mb-2 text-customGreen">Additional Considerations</h2>
          <p>When designing a booth, it's also important to consider accessibility and sustainability. Booths that are easy to navigate and environmentally friendly tend to leave a lasting impression on visitors. Incorporate recycled materials where possible and minimize energy consumption with LED lighting.</p>
        </>
      ),
      contentAr: (
        <>
          <h2 className="text-2xl flex items-center mb-2 text-customGreen">
            <AiOutlineBulb className="ml-2" /> مقدمة
          </h2>
          <p>البوثات عنصر أساسي في المناسبات، حيث توفر مساحات تفاعلية لعرض المنتجات بشكل مبتكر. في هذه المقالة، سنتحدث عن تصميم وتنفيذ البوثات، مع التركيز على الجوانب الرئيسية التي تجعل البوث مميزًا وتساهم في نجاح العلامة التجارية.</p>
          
          <h2 className="text-2xl mb-2 text-customGreen">أهم جوانب تصميم البوثات</h2>
          <ul>
            <li><strong>جذب الانتباه:</strong> التصميم المبتكر يجذب الزوار ويضمن بروز البوث في مكان مزدحم.</li>
            <li><strong>تعزيز الهوية البصرية:</strong> يعكس البوث هوية العلامة التجارية، مما يجعله سهل التعرف عليه.</li>
            <li><strong>توفير تجربة تفاعلية:</strong> العناصر التفاعلية مثل الشاشات التي تعمل باللمس والعروض التوضيحية والألعاب تزيد من تفاعل الزوار.</li>
            <li><strong>تحقيق الأهداف التسويقية:</strong> تصمم البوثات لجذب الانتباه وتحقيق أهداف تسويقية محددة مثل توليد العملاء المحتملين وزيادة المبيعات.</li>
          </ul>
          
          <h2 className="text-2xl mb-2 text-customGreen">مراحل تصميم البوث</h2>
          <ol>
            <li><strong>التخطيط الأولي:</strong> تحديد الأهداف بوضوح، وتحديد جمهورك المستهدف، واختيار موقع مناسب في مكان الحدث. من المهم أيضًا تحديد الميزانية مبكرًا.</li>
            <li><strong>تصميم البوث:</strong> التعاون مع خبراء التصميم لتطوير مفهوم البوث بما يتماشى مع علامتك التجارية. إنشاء نماذج ثلاثية الأبعاد للتأكد من أن جميع العناصر تعمل معًا بسلاسة.</li>
            <li><strong>التنفيذ:</strong> بمجرد الانتهاء من التصميم، يبدأ البناء. تأكد من أن جميع المواد ذات جودة عالية وأن البوث مركب بدقة. قم بتركيب الإضاءة والعروض التفاعلية والمعدات التقنية المطلوبة.</li>
            <li><strong>التشغيل والصيانة:</strong> خلال الحدث، تأكد من وجود موظفين على دراية. قدم صيانة مستمرة للحفاظ على جميع العناصر تعمل بشكل صحيح.</li>
          </ol>

          <h2 className="text-2xl mb-2 text-customGreen">اعتبارات إضافية</h2>
          <p>عند تصميم البوث، من المهم أيضًا مراعاة الوصول والاستدامة. البوثات التي يسهل التنقل فيها وصديقة للبيئة تترك انطباعًا دائمًا لدى الزوار. حاول استخدام مواد معاد تدويرها حيثما أمكن وتقليل استهلاك الطاقة من خلال الإضاءة بتقنية LED.</p>
        </>
      ),
    },
    'exhibition-conference-design': {
      titleEn: 'Exhibition and Conference Design',
      titleAr: 'تنظيم المعارض والمؤتمرات',
      image: blogImage2,
      contentEn: (
        <>
          <h2 className="text-2xl flex items-center mb-2 text-secondary">
            <AiOutlineBulb className="mr-2" /> Introduction
          </h2>
          <p>Organizing exhibitions and conferences is an essential tool for promoting products and exchanging knowledge. In this article, we explore the key elements of successful event planning and how to create an impactful conference or exhibition.</p>
          
          <h2 className="text-2xl mb-2 text-customGreen">Key Aspects of Event Planning</h2>
          <ul>
            <li><strong>Showcasing Products:</strong> Exhibitions provide a platform to promote products and build brand awareness, offering a hands-on experience for attendees.</li>
            <li><strong>Building Relationships:</strong> Conferences are ideal for fostering communication between companies and institutions, facilitating networking opportunities.</li>
            <li><strong>Exchanging Knowledge:</strong> Events often feature workshops and educational sessions that provide a forum for exchanging ideas and expertise.</li>
            <li><strong>Encouraging Sales:</strong> Conferences and exhibitions provide opportunities for potential customers to engage with products, boosting sales and generating leads.</li>
          </ul>

          <h2 className="text-2xl mb-2 text-customGreen">Steps for Planning Exhibitions and Conferences</h2>
          <ol>
            <li><strong>Define Objectives:</strong> Identify the primary goals, such as networking, education, or marketing, to ensure the event meets its purpose.</li>
            <li><strong>Choose a Theme:</strong> Select a relevant and appealing topic that resonates with your target audience.</li>
            <li><strong>Set the Budget:</strong> Outline a detailed budget covering all expenses, from venue costs to marketing and staffing.</li>
            <li><strong>Select the Venue:</strong> Choose a location that suits the event's size, atmosphere, and schedule.</li>
            <li><strong>Marketing:</strong> Promote the event through various marketing channels, including social media, email campaigns, and targeted advertising.</li>
          </ol>

          <h2 className="text-2xl mb-2 text-customGreen">Post-Event Strategies</h2>
          <p>After the event, gather feedback from attendees to evaluate the event's success and areas for improvement. Follow up with leads and attendees to continue building relationships and capitalize on the event's momentum.</p>
        </>
      ),
      contentAr: (
        <>
          <h2 className="text-2xl flex items-center mb-2 text-customGreen">
            <AiOutlineBulb className="ml-2" /> مقدمة
          </h2>
          <p>يعد تنظيم المعارض والمؤتمرات أداة أساسية لترويج المنتجات وتبادل المعرفة. في هذه المقالة، نستعرض العناصر الرئيسية للتخطيط الناجح للفعاليات وكيفية إنشاء مؤتمر أو معرض مؤثر.</p>
          
          <h2 className="text-2xl mb-2 text-customGreen">أهم جوانب التخطيط للحدث</h2>
          <ul>
            <li><strong>عرض المنتجات:</strong> توفر المعارض منصة لترويج المنتجات وبناء الوعي بالعلامة التجارية، مع إتاحة تجربة مباشرة للحاضرين.</li>
            <li><strong>بناء العلاقات:</strong> المؤتمرات مثالية لتعزيز التواصل بين الشركات والمؤسسات، وتوفير فرص التواصل.</li>
            <li><strong>تبادل المعرفة:</strong> غالبًا ما تتضمن الفعاليات ورش عمل وجلسات تعليمية تقدم منتدى لتبادل الأفكار والخبرات.</li>
            <li><strong>تحفيز المبيعات:</strong> توفر المؤتمرات والمعارض فرصًا للعملاء المحتملين للتفاعل مع المنتجات، مما يعزز المبيعات ويولد العملاء المحتملين.</li>
          </ul>

          <h2 className="text-2xl mb-2 text-customGreen">خطوات التخطيط للمعارض والمؤتمرات</h2>
          <ol>
            <li><strong>تحديد الأهداف:</strong> تحديد الأهداف الرئيسية، مثل التواصل أو التعليم أو التسويق، لضمان تحقيق الفعالية لغرضها.</li>
            <li><strong>اختيار الموضوع:</strong> اختيار موضوع ملائم وجذاب يلقى صدى لدى جمهورك المستهدف.</li>
            <li><strong>تحديد الميزانية:</strong> وضع ميزانية مفصلة تغطي جميع النفقات، من تكاليف المكان إلى التسويق والموظفين.</li>
            <li><strong>اختيار المكان:</strong> اختيار موقع يناسب حجم الفعالية وأجوائها وجدولها الزمني.</li>
            <li><strong>التسويق:</strong> الترويج للحدث من خلال قنوات التسويق المختلفة، بما في ذلك وسائل التواصل الاجتماعي وحملات البريد الإلكتروني والإعلانات المستهدفة.</li>
          </ol>

          <h2 className="text-2xl mb-2 text-customGreen">استراتيجيات ما بعد الحدث</h2>
          <p>بعد الحدث، قم بجمع التعليقات من الحاضرين لتقييم نجاح الفعالية والمجالات التي يمكن تحسينها. تابع مع العملاء المحتملين والحاضرين لمواصلة بناء العلاقات والاستفادة من زخم الحدث.</p>
        </>
      ),
    },
  };

  const article = articleData[articleId];

  return (
    <div className={`max-w-screen-lg mx-auto p-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'}`}>
      {article ? (
        <>
          <div className="relative w-full h-[300px] overflow-hidden mb-4 rounded-md">
            <img src={article.image} alt={language === 'ar' ? article.titleAr : article.titleEn} className="object-cover w-full h-full" />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-heading">
            {language === 'ar' ? article.titleAr : article.titleEn}
          </h2>
          <div className="prose prose-lg text-white leading-loose">  {/* Added leading-loose for line height */}
          {language === 'ar' ? article.contentAr : article.contentEn}
          </div>
        </>
      ) : (
        <p>Article not found.</p>
      )}
    </div>
  );
};

export default ArticleDetail;
