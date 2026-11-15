import React from "react";



function Card() {
   

        const cards = [
          {
            image: 'images/termites_page/img/wings.jpg',
            title: 'الاجنحة',
            description: 'في بعض الاحيان تكون علامات وجود النمل الابيض من خلال وجود بقايا كثيره من الاجنحة الصغيره جدا على الارض مما يخلفه النمل الابيض في الارضيات وهذا يعتبر دليل واضح على جود النمل الابيض',
          },
          {
            image: 'images/termites_page/img/wood_termite.jpg',
            title: 'اطارات الابواب',
            description: 'ي الغالب يقوم النمل الابيض بالتغذي على مادة السليلوز المكونه في الاخشاب وهذا يكون واضح في ايطارات الابواب بدلاله على اختلراقها للبيت والتغذي على الابواب الموجوده في البيت مما يودى الى اتلاف جميع الابواب الموجودة في المنزل'
          },
          {
            image: 'images/termites_page/img/tunnel_mud.jpg',
            title: 'شقوق وقنوات',
            description: 'قوم النمل الابيض بعمل شقوق وقنوات خارجي في الاغلب ايضا تطون ظاهره في بعض الاخيان على الجدار الطابوقي او السمنتي هذه الشقوق والقنوات تمثل الممرات التي يتنقل فيها النمل الابيض.'
          },
          {
            image: 'images/termites_page/img/structural_termite_damage.jpg',
            title: 'االهيكل الخارجي',
            description: 'ظهور رماد او قطع من الخشب على الهيكل الخارجي , يقوم النمل الابيض باتلاف الخشب الموجود في المبني من الشبا بيك او البرغولا (مكونه فجوات داخلية يتدلل عليها من خلال الطرق على الخشب الخارجي مع ظهور رماد مبعثر خارجي'
          }
        ];  
       


  return (
  
    <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card border-0 p-3">
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

export default Card