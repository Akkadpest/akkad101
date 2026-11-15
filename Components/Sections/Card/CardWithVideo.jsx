import React from "react";



function CardTreatment() {
   

        const cards = [
          {
            video: 'images/termites_page/img/termite_control_dubai.mp4',
            title: 'مراحل مكافحة وعلاج الرمة و النمل الابيض ',
            description: ''
          },
          
         
          
        ];  
       


  return (
  
    <div className="row">
       
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-6">
            <div className="card mt-4 p-4 border-0">
              
               <video width="auto" height="auto" autoPlay muted playsInline loop >
               <source src={card.video} type="video/mp4" />
               <track
                 src="images/termites_page/img/termite_Video.mp4"
                 kind="subtitles"
                 srcLang="ar"
                 label="English"
                 />
                 Your browser does not support the video tag.
               </video>
              <div className="card-body">
                <h3 className="card-title text-center">{card.title}</h3>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
         <div  className="col-md-6 col-lg-6">
            <div className="card  p-4 border-0"></div>
           
            <li className="mt-4">
            عمليه الفحص تعتبر من العمليات المهمه للمهندس المختص حيث يقوم باشراف مهندس مختص في مكافحة النمل الابيض عادا يوفر جهار رادار متحسس اذا كان المنزل فيه نمل ابيض او لايوجد , اذا وجدت علامات النمل فهذا موكد على وجودة لكن في جهاز الفحص يكون الاثبات اين وجود المملكه واي الاماكن التي يقوم بها المشرف الحقن قبل عملية التنفيذ

            </li>
            <li className="mt-4">
            يعتبر استخدام حواجز مكافحة النمل الأبيض من أنجح الطرق حتى اللحظة، وقد تم تطبيقه بنجاح في دولة الإمارات العربية المتحدة للمباني المتأثرة بالنمل الأبيض (الرمة) أو ما يعرف بالأرضة. تقوم الشركة المتخصصة بحفر ثقوب حول المنطقة المستهدفة بعمق يتراوح بين 150 سم إلى 200 سم داخل التربة وبمسافات تبعد بين 90 سم إلى 120 سم.

            </li>
            </div>
      </div>
 

  )
}

export default CardTreatment