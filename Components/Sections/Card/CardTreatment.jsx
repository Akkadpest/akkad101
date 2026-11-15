import React from "react";



function CardTreatment() {
   

        const cards = [
          {
            image: 'images/termites_page/img/inspection-home.jpg',
            title: 'الفحص',
            description: 'عمليه الفحص تعتبر من العمليات المهمه للمهندس المختص حيث يقوم باشراف مهندس مختص في مكافحة النمل الابيض عادا يوفر جهار رادار متحسس اذا كان المنزل فيه نمل ابيض او لايوجد , اذا وجدت علامات النمل فهذا موكد على وجودة لكن في جهاز الفحص يكون الاثبات اين وجود المملكه واي الاماكن التي يقوم بها المشرف الحقن قبل عملية التنفيذ'
          },
          {
            image: 'images/termites_page/img/implement-home.jpg',
            title: 'التنفيـــذ',
            description: 'يعتبر النمل الابيض من الحشرات الجدا عنيده في القضاء عليها لكن عند ظهوره في الابواب مثلا هذا لايدل وجوده في نفس المكان لذلك من عمليه الفحص يقوم المهندس المختص باعطاء الاوامر والاماكن المحددة لعمليه الحقن حيث يقوم المختصون بعمليه حقن للارضيات وليس للابواب المصابه وعمليات الحقن نتقسم الى نوعين جزئي وجدار ناري'
          },
          {
            image: 'images/termites_page/img/moniter-home.jpg',
            title: 'الصيانة',
            description: 'بعد تجراء عملية الحقن يقوم المحتص بعملية الصيانه بوضع اجهرة كشف و مراقبة تقوم بالاستشعار عن اي غزو خارجي للحشرات ( الرمة ) المقصود به النمل الابيض حيث يقوم المتخصص بعمليه الصيانه من خلالها وهذه العملية لا تتطلب في كل المعالجات جيث بعضها لايحتاج الى اجهزه اذا قد تم عمل جدار ناري لها'
          },
          
        ];  
       


  return (
  
    <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mt-4 p-4 border-0">
              <img src={card.image} className="card-img-top" alt={`Image ${index + 1}`}
             
              
              />
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
 

  )
}

export default CardTreatment