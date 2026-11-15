import React from "react";



function CardProducts() {
   

        const cards = [
          {
            image: 'images/termites_page/img/termite_tc.jpg',
            title: 'ترمينكس',
            description: 'مبيد حشري من انتاج الشركة الالمانيه باير يتميز بديمومه عالية تصل الى عشرون سنه بعتبر جاذب للنمل الابيض وقاتل بنفس الوقت.'
          },
          {
            image: 'images/termites_page/img/baitstation.jpg',
            title: 'جهاز الكشف بونز',
            description: 'جهاز الكشف بونز مصنع من شركة باير الالمانية يقوم بزراعة في الاراضي الزراعيخ خارج حدود المدينة يمتاز بصيانه اقل واستشعار للنمل الابيض.'
          },
          {
            image: 'images/termites_page/img/termite_foam.jpg',
            title: 'فووم تيرمنكس',
            description: 'ستخدم هذا الفووم في الاساسات والعوازل يعطى فعالية قبل البناء جماية عالية وديمومه تصل الى 10 سنوات'
          },
          {
            image: 'images/termites_page/img/termite.ec.jpg',
            title: 'دونز مايت',
            description: 'مبيد حشري من انتاج الشركة الالمانيه باير يتميز بديمومه عالية تصل الى عشرون سنه بعتبر جاذب للنمل الابيض وقاتل بنفس الوقت.'
          },
          
          
        ];  
       


  return (
  
    <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card  mt-4 p-4 border-0">
              <img src={card.image} className="card-img-top" alt={`Image ${index + 1}`} />
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

export default CardProducts