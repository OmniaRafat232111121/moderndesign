import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ language }) => {
  const { articleId } = useParams();

  // Summarized article data in both languages
  const articleData = {
    'booth-design': {
      titleEn: 'Booth Design and Implementation',
      titleAr: 'تصميم وتنفيذ البوثات',
      contentEn: `
        <h2>Introduction</h2>
        Booths are essential elements in events, providing interactive spaces to present products innovatively. In this article, we discuss booth design and implementation.
        
        <h2>Key Aspects of Booth Design</h2>
        <ul>
          <li><strong>Captivating Attention:</strong> Innovative design draws visitors in.</li>
          <li><strong>Enhancing Visual Identity:</strong> Booth reflects brand identity.</li>
          <li><strong>Providing an Interactive Experience:</strong> Interactive experiences increase engagement.</li>
          <li><strong>Achieving Marketing Goals:</strong> Collecting data and boosting sales.</li>
        </ul>
        
        <h2>Booth Design Stages</h2>
        <ol>
          <li><strong>Preliminary Planning:</strong> Set goals, define audience, choose location, and budget.</li>
          <li><strong>Designing the Booth:</strong> Develop concepts, create 3D designs, choose materials and lighting.</li>
          <li><strong>Execution:</strong> Assemble the booth, install equipment, and perform testing.</li>
          <li><strong>Operation and Maintenance:</strong> Provide staff and maintain the booth's functionality.</li>
        </ol>`,
      contentAr: `
        <h2>مقدمة</h2>
        البوثات عنصر أساسي في المناسبات، حيث توفر مساحات تفاعلية لعرض المنتجات بشكل مبتكر. في هذه المقالة، سنتحدث عن تصميم وتنفيذ البوثات.
        
        <h2>أهم جوانب تصميم البوثات</h2>
        <ul>
          <li><strong>جذب الانتباه:</strong> التصميم المبتكر يجذب الزوار.</li>
          <li><strong>تعزيز الهوية البصرية:</strong> يعكس البوث هوية العلامة التجارية.</li>
          <li><strong>توفير تجربة تفاعلية:</strong> التجارب التفاعلية تزيد من التفاعل.</li>
          <li><strong>تحقيق الأهداف التسويقية:</strong> جمع البيانات وزيادة المبيعات.</li>
        </ul>
        
        <h2>مراحل تصميم البوث</h2>
        <ol>
          <li><strong>التخطيط الأولي:</strong> تحديد الأهداف، الجمهور، واختيار المكان والميزانية.</li>
          <li><strong>تصميم البوث:</strong> تطوير المفاهيم، إنشاء التصاميم ثلاثية الأبعاد، اختيار المواد والإضاءة.</li>
          <li><strong>التنفيذ:</strong> تجميع البوث، تركيب المعدات، والاختبار.</li>
          <li><strong>التشغيل والصيانة:</strong> توفير الفريق اللازم وصيانة البوث.</li>
        </ol>`
    },
    'exhibition-conference-design': {
      titleEn: 'Exhibition and Conference Design',
      titleAr: 'تصميم المعارض والمؤتمرات',
      contentEn: `
        <h2>Introduction</h2>
        Organizing exhibitions and conferences is one of the essential tools for promoting products and exchanging knowledge. In this article, we outline the key elements of successful event planning.

        <h2>Key Aspects of Event Planning</h2>
        <ul>
          <li><strong>Showcasing Products:</strong> Provides a platform for product promotion and building brand awareness.</li>
          <li><strong>Building Relationships:</strong> Facilitates communication between companies and institutions.</li>
          <li><strong>Exchanging Knowledge:</strong> Organizes workshops and sessions to exchange ideas and expertise.</li>
          <li><strong>Encouraging Sales:</strong> Stimulates potential customers to purchase products.</li>
        </ul>
        
        <h2>Steps for Planning Exhibitions and Conferences</h2>
        <ol>
          <li><strong>Define Objectives:</strong> Identify the primary goals, such as networking, education, or marketing.</li>
          <li><strong>Choose a Theme:</strong> Select an appealing and relevant topic.</li>
          <li><strong>Set the Budget:</strong> Outline a detailed budget for all event expenses.</li>
          <li><strong>Select the Venue:</strong> Choose a venue that suits the event size and schedule.</li>
          <li><strong>Marketing:</strong> Use various marketing channels and advertising to promote the event.</li>
        </ol>`,
      contentAr: `
        <h2>مقدمة</h2>
        يعد تنظيم المعارض والمؤتمرات من أهم الأدوات لترويج المنتجات وتبادل المعرفة. في هذه المقالة، سنستعرض أهم العناصر لتنظيم حدث ناجح.
        
        <h2>أهم جوانب التخطيط للحدث</h2>
        <ul>
          <li><strong>عرض المنتجات:</strong> يوفر منصة لترويج المنتجات وبناء الوعي بالعلامة التجارية.</li>
          <li><strong>بناء العلاقات:</strong> يسهل التواصل بين الشركات والمؤسسات.</li>
          <li><strong>تبادل المعرفة:</strong> ينظم ورش العمل وجلسات لمناقشة وتبادل الأفكار والخبرات.</li>
          <li><strong>تحفيز المبيعات:</strong> يشجع العملاء المحتملين على شراء المنتجات.</li>
        </ul>
        
        <h2>خطوات التخطيط للمعارض والمؤتمرات</h2>
        <ol>
          <li><strong>تحديد الأهداف:</strong> تحديد الأهداف الأساسية، مثل بناء العلاقات أو التعليم أو التسويق.</li>
          <li><strong>اختيار الموضوع:</strong> اختيار موضوع جذاب وملائم.</li>
          <li><strong>تحديد الميزانية:</strong> وضع ميزانية مفصلة لجميع تكاليف الحدث.</li>
          <li><strong>اختيار المكان:</strong> اختيار مكان يناسب حجم الحدث والجدول الزمني.</li>
          <li><strong>التسويق:</strong> استخدام قنوات التسويق المختلفة والإعلانات للترويج للحدث.</li>
        </ol>`
    }
  };

  const article = articleData[articleId];

  return (
    <div className={`max-w-screen-lg mx-auto p-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'}`}>
      {article ? (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-heading">
            {language === 'ar' ? article.titleAr : article.titleEn}
          </h2>
          <div
            className="prose prose-lg text-white strong-text"  // Added class for custom strong styling
            style={{ lineHeight: '3' }}  // Adding space between lines
            dangerouslySetInnerHTML={{ __html: language === 'ar' ? article.contentAr : article.contentEn }}
          ></div>
        </>
      ) : (
        <p>Article not found.</p>
      )}
    </div>
  );
};

export default ArticleDetail;
