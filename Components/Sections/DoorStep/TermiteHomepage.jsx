import React from "react";

const DoorStepItem = ({
  src,
  subtitle,
  title,
  icon,
  desc,
  isReverse = false,
}) => {
  return (
    <div
      className="row mx-auto  mt-3"
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <div className="col-md-6 pb-3">
        {src ? (
          <img src={`/images/${src}`} className="home-box-in-image" />
        ) : (
          ""
        )}
      </div>

      <div className="col-md-6 pb-3">
        <p>
          <img
            src={`/images/${icon}`}
            style={{ maxWidth: 40, marginRight: 5 }}
          />{" "}
          <span className="gray-text-1">{subtitle}</span>
        </p>
        <h2 className="dark-black fw-600 mb-2">{title}</h2>
        <div className="mb-0" dangerouslySetInnerHTML={{ __html: desc }}></div>
      </div>
    </div>
  );
};

const DoorStep = () => {
  return (
    <>
      <section className="doorstep_location_section">
        <div className="container">
          <div className="text-center pb-2">
            <h2 className="akkad_heading_one fw-700 black ">
        طرق معالجة الرمة في المنازل والبيوت
            </h2>
          </div>
          <DoorStepItem
            src="termites_page/img/villa_termite_plan.jpg"
            subtitle=" جدار الناري"
            title="عمله وضع جدار الناري حول المنزل"
            icon="search-icon.webp"
            desc={`
            يعتبر الجدار الناري من افضل انواع السيطره على النمل الابيض حيث يقوم المختص وهذا شرح تفصيلي للعمليه

            <br><br>
               <li> معالجة النمل الابيض من خلال الجدار الناري يعتبر من انجح العمليات لغاية وقتنا الراهن حيث طبق في دولة الامارات للابنية المصابة بالنمل الابيض ( الرمة ) او يسمى بالارضة من ثم تقوم الشركة المختصة بعمل ثقوب حول المكان المراد علاجة بعمق 150 سم الى 200 سم داخل التربة وبمسافات من 90 سم الى 120 سم متباعدة</li>
               <br>
               <li>بعد عملية الثقب يقوم المختص بعملية حقن الي للمادة الفعاله لمكافحة النمل الابيض يتعين ان تكون مادة مكافحة الحقن من اعلى مستويات المبيدات الخاصة بمكافحة النمل الابيض . ولايمكن اهمال هذه المرحلة حيث على غرارها تتم عملية نجاح العملية او فشلها .</li>
               <br>
               <li>عملية الحقن تكون باليه مخصصة لمعالجة المكان حيث تكون قوه ضخ الحاقن ما لايقل عن 50 بار – مما يؤدي الى تخلل المادة الفعالية الى اعماق تصل الى المملكات التي يستقر من خلالها النمل الابيض</li>
               <br>
              <li>كذلك يقوم الجدار الناري بعملية حماية وابدة تستمر لغايه 20 سنة تضمن عدم دخول النمل الابيض مره اخرى المنزل</li>
             
              <li>يمكن اعادة الحقن بعد مرور عشرون سنه او اقل لضمان اعادة الحماية للمنزل مرة اخرى</li>


            `}




            isReverse={true}
          />
          
          
        </div>
      </section>
    </>
  );
};

export default DoorStep;
