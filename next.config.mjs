/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        // Customer portal (Lightsail) served under pestcontrol.ae/my
        { source: '/my', destination: 'https://my.pestcontrol.ae/my/' },
        { source: '/my/:path*', destination: 'https://my.pestcontrol.ae/my/:path*' },
      ];
    },
    async redirects() {
      return [
        {
          source: '/cockroaches-bed',
          destination: '/pest-control-cockroaches-in-bed',
          permanent: true,
        },
        {
          source: '/cockroaches-cabinet',
          destination: '/pest-control-cockroaches-cabinet',
          permanent: true,
        },
        {
            source: '/cockroaches-table',
            destination: '/pest-control-cockroaches-table',
            permanent: true,
          },
          {
            source: '/cockroaches-chair',
            destination: '/pest-control-cockroaches-chair',
            permanent: true,
          },
          {
            source: '/contact-us',
            destination: '/location/pest-control-dubai/contact-us',
            permanent: true,
          },
          {
            source: '/location-contact-us',
            destination: '/location/pest-control-dubai/contact-us',
            permanent: true,
          },
          {
            source: '/location/contact-us',
            destination: '/location/location-contact-us',
            permanent: true,
          },
          {
            source: '/pest-control-dubai/contact-us',
            destination: '/location/pest-control-dubai/contact-us',
            permanent: true,
          },

          {
            source: '/pest-control-in-Hayatownhouse',
            destination: '/pest-control-in-hayat-townhouse',
            permanent: true,
          },
          
          {
            source: '/pest-control-in-al-bada ',
            destination: '/pest-control-in-al-bada-jumeirah',
            permanent: true,
          },
           {
            source: '/pest-control-in-cultural-village',
            destination: '/pest-control-in-culture-village',
            permanent: true,
          }, {
            source: '/pest-control-in-the-villa',
            destination: '/pest-control-in-the-villa-dubai',
            permanent: true,
          }, {
            source: '/pest-control-in-al-mankhool',
            destination: '/pest-contro-in-al-mankhool',
            permanent: true,
          }, {
            source: '/sharjah/about-akkad',
            destination: '/sharjah/bed-bugs',
            permanent: true,
          }, {
            source: '/sharjah/problems-and-solutions',
            destination: '/sharjah/bed-bugs',
            permanent: true,
          }, {
            source: '/pest-control-in-the-world-island',
            destination: '/pest-control-in-the-world-islands',
            permanent: true,
          }, {
            source: '/pest-control-media-city',
            destination: '/pest-control-dubai-marina',
            permanent: true,
          }, {
            source: '/pest-control-in-nashama-town-square',
            destination: '/pest-control-in-nshama-town-square',
            permanent: true,
          }, {
            source: '/blogs/problems-and-solutions',
            destination: '/blogs/pest-control',
            permanent: true,
          }, {
            source: '/sharjah/facts-and-stats-to-know',
            destination: '/sharjah/bed-bugs',
            permanent: true,
          }, {
            source: '/blogs/termite-control',
            destination: '/blogs/pest-control',
            permanent: true,
          }, {
            source: '/pest-control-in-al-Warsan',
            destination: '/pest-control-in-al-warsan',
            permanent: true,
          }, 
          {
            source: '/pest-control-for-academic-city',
            destination: '/pest-control-in-academic-city',
            permanent: true,
          },
          {
            source: '/pest-control-in-city-centre-deira',
            destination: '/pest-control-in-city-center-deira',
            permanent: true,
          },{
            source: '/pest-control-for-al-aweer',
            destination: '/pest-control-in-al-aweer',
            permanent: true,
          },{
            source: '/pest-control-in-victory',
            destination: '/pest-control-in-victory-heights',
            permanent: true,
          },{
            source: '/pest-control-in-mushrif',
            destination: '/pest-control-in-al-mushrif',
            permanent: true,
          },{
            source: '/pest-control-in-al-Mina',
            destination: '/pest-contol-in-al-mina',
            permanent: true,
          },{
            source: '/blogs/facts-and-stats-to-know',
            destination: '/blogs/pest-control',
            permanent: true,
          },
          {
            source: '/pest-control-in-discovery-gardens',
            destination: '/pest-control-discovery-gardens',
            permanent: true,
          },{
            source: '/sharjah/reviews',
            destination: '/sharjah/bed-bugs',
            permanent: true,
          },{
            source: '/pest-control-in-sustainable-city-sharjah',
            destination: '/sharjah/pest-control-in-sustainable-city-sharjah',
            permanent: true,
          },
          {
            source: '/commercial-pest-control/facts-and-stats-to-know',
            destination: '/commercial-pest-control/pest-contol-in-almas-tower-dubai',
            permanent: true,
          },
          {
            source: '/images/new/termidor-sc',
            destination: '/images/new/sc',
            permanent: true,
          },
          {
            source: '/cockroach-control',
            destination: '/cockroaches',
            permanent: true,
          },
          {
            source: '/pest-control-in-al-bada',
            destination: '/pest-control-in-al-bada-jumeirah',
            permanent: true,
          },
          {
            source: '/pest-contol-in-the-one-tower-dubai',
            destination: '/commercial-pest-control/pest-contol-in-almas-tower-dubai',
            permanent: true,
          },
          {
            source: '/images/new/bora_care',
            destination: '/images/new/bora-care',
            permanent: true,
          },
          {
            source: '/pest-control-in-wasit-sharjah',
            destination: '/sharjah/pest-control-in-wasit-sharjah',
            permanent: true,
          },
          {
            source: '/commercial-pest-control/about-akkad',
            destination: '/commercial-pest-control/pest-contol-in-almas-tower-dubai',
            permanent: true,
          },
          
          {
            source: '/commercial-pest-control/commercial-pest-control',
            destination: '/commercial-pest-control',
            permanent: true,
          },
          {
            source: '/pest-control-in-al-ettihad-street-sharjah',
            destination: '/sharjah/pest-control-in-al-ettihad-street-sharjah',
            permanent: true,
          },
          {
            source: '/commercial-pest-control/about-akkad',
            destination: 'commercial-pest-control',
            permanent: true,
          },
          {
            source: '/sharjah/termite-control',
            destination: '/termite-control',
            permanent: true,
          },
          
          {
            source: '/commercial-pest-control/our-services',
            destination: '/',
            permanent: true,
          }, {
            source: '/commercial-pest-control/termite-control',
            destination: '/termite-control',
            permanent: true,
          }, {
            source: '/images/new/termidor_foam.png',
            destination: '/images/new/termidor-foam',
            permanent: true,
          }, {
            source: '/commercial-pest-control/problems-and-solutions',
            destination: '/problems-and-solutions',
            permanent: true,
          }, {
            source: '/commercial-pest-control/bed-bugs',
            destination: '/bed-bugs',
            permanent: true,
          }, 
          {
            source: '/commercial-pest-control/reviews',
            destination: '/blogs/reviews',
            permanent: true,
          }, {
            source: '/blogs/commercial-pest-control',
            destination: '/commercial-pest-control',
            permanent: true,
          }, {
            source: '/pest-control-in-green-community-area',
            destination: '/pest-control-in-green-community-dubai',
            permanent: true,
          },
          {
            source: '/my-warranty',
            destination: 'https://bookingwidget.pestcontrol.ae/#/login',
            permanent: true,
          },
          
          
          
          
          

          
          
    
      ];
    },
  };
  
  export default nextConfig;
  