// ── data ──
  const charDescriptions = {
    "Simoun":        "Ang misteryosong negosyante na sa katunayan ay si Crisostomo Ibarra — nagbabalik upang maghiganti sa pamamagitan ng rebolusyon.",
    "Basilio":       "Kabataang estudyante, anak ni Sisa. Natututo siya mula sa nakaraan at hinahanap ang kalayaan para sa kanyang sarili at bansa.",
    "Isagani":       "Makatang estudyante at romantiko. Naniniwala pa rin sa mapayapang pagbabago ng lipunan.",
    "Paulita":       "Dalaga na minamahal ni Isagani. Kumakatawan sa mga Pilipinang nasabit sa gitna ng lumang at bagong mundo.",
    "Don Custodio":  "Opisyal na Espanyol na puno ng pagmamalaki at kapangyarihan — simbolo ng bulok na pamahalaan.",
    "Padre Camorra": "Paring Espanyol na kilala sa kanyang masamang ugali at pagnanasa. Ginagamit ni Rizal upang punahin ang simbahan.",
    "Juanito Pelaez":"Mayamang estudyante, katrabaho ng mapanlinlang na lipunan.",
    "P. Florentino": "Matandang paring Pilipino — matalino at maka-Diyos. Siya ang nagbigay ng huling aral sa nobela.",
  };

  const chapters = [
    {
      num: 19, title: "Ang Mitsa", speaker: "SIMOUN", // waiting 
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgliwuKG0m-UducBxEHVnlUr3R2XQS_dlPCiAEnHNajNhJ9ix6ph4sfeRK7fYzxZKc69xgpfPNFj8_a3EVTJlDC9-qtivviZ16Pwx18lT-UMx2R3cxdD76bihpdbO1GRF1_qNFSAEclkzA/s1600/palito+ng+posporo+3.jpg",
      dialogue: "Ang mitsa ay nakakabit na. Ang apoy ng rebolusyon ay malapit nang magsimula...",
      scene: "fuse",
      buod: `Sa kabanatang ito, inihahanda ni Simoun (si Ibarra sa disguise) ang kanyang plano ng pagsabog. Ibinibigay niya ang isang lampara na may nakatagong bomba sa kasalan ng mga piling tao sa Maynila. Ang lampara ay gagamitin bilang mitsa ng kanyang planong pagpatay sa mga Español at maimpluwensyang Pilipino na sumusuporta sa kolonyal na pamahalaan. Ipinakita ang kaniyang galit at desperasyon laban sa sistema.`,
      characters: [
        { name: "Simoun", color: "#2c2c2c", accent: "#f5c842" },
        { name: "Basilio", color: "#8B4513", accent: "#c8a46e" },
      ],
      quiz: { q: "Ano ang ginamit ni Simoun bilang mitsa ng kanyang plano?", choices: ["Isang pana","Isang lampara na may bomba","Isang baril","Isang espada"], correct: 1, feedback: "Tama! Isang lampara na may nakatagong bomba ang plano ni Simoun para sa kasalan." }
    },
    {
      num: 20, title: "Ang Tagahatol", speaker: "TAGAPAGSALAYSAY",
      image: "https://images.esquiremag.ph/esquiremagph/images/2020/06/17/old-school-photos-main-image1.jpg",
      dialogue: "Ang kabanata ay tungkol sa isang hindi makatarungang paghuhusga na nagpapakita ng katiwalian sa sistema, kung saan ang kapangyarihan ang nangingibabaw kaysa sa katotohanan.",
      scene: "crowd",
      buod: `Sa kabanatang ito, ipinakita ang isang paglilitis kung saan hinatulan ang isang tauhan sa gitna ng impluwensya ng kapangyarihan at katiwalian. Ang “tagahatol” ay sumisimbolo sa mga taong may kapangyarihang magpasya, ngunit hindi laging makatarungan ang kanilang mga desisyon.
            Makikita na ang hustisya ay nagiging bulag sa katotohanan dahil sa impluwensya ng mga makapangyarihan. Sa halip na pairalin ang tama, ang desisyon ay naaayon sa interes ng mga nasa itaas. Ipinapakita rin dito ang kawalan ng boses ng mga naaapi at kung paano sila nahuhusgahan nang hindi patas.
            Ipinahihiwatig ng kabanata na ang sistemang hustisya sa lipunan ay maaaring gamitin bilang kasangkapan ng pang-aapi kung ito ay nasa maling kamay.`,
      characters: [
        { name: "Isagani", color: "#3d5a3e", accent: "#7dffb0" },
        { name: "Paulita", color: "#7b3a6e", accent: "#ff99dd" },
      ],
      quiz: { q: "Ano ang pangunahing mensahe ni Rizal tungkol sa sistemang hustisya sa kabanatang ito?", choices: ["Ang mga mahihirap ay laging nananalo sa huli.","Ang hustisya ay nagiging kasangkapan ng pang-aapi kapag ito ay kontrolado ng makapangyarihan.","Lahat ng tagahatol ay likas na masama at walang alam sa batas.","Hindi kailangan ng abogado sa paglilitis basta't may pera."], correct: 1, feedback: "Tama! Malinaw na sinabi sa teksto na ang hustisya ay naging bulag at ginamit na kasangkapan ng pang-aapi ng mga nasa itaas." }
    },
    {
      num: 21, title: "Mga Anyo ng Maynila", speaker: "TAGAPAGSALAYSAY",
      image: "https://www.vice.com/wp-content/uploads/sites/2/2021/03/1615273436169-fr307300.jpeg", 
      dialogue: "Ang kabanata ay tungkol sa pagkakahati ng Maynila sa mayayaman at mahihirap, na nagpapakita ng hindi pantay na kalagayan ng lipunan.",
      scene: "manila",
      buod: `Sa kabanatang ito, ipinakita ang iba’t ibang kalagayan ng mga tao sa Maynila—ang mayayaman at ang mahihirap. Nahahati ang lungsod sa dalawang uri ng pamumuhay: ang marangya at masayang buhay ng mga nakaaangat, at ang mahirap at puno ng suliraning buhay ng mga naaapi.
            Makikita rito na habang ang ilan ay nagdiriwang at nagpapakasaya, ang iba naman ay naghihirap at patuloy na nakakaranas ng kawalang-katarungan. Ipinapakita ng kabanata ang malinaw na agwat sa lipunan at kung paano ito nagdudulot ng hindi pagkakapantay-pantay.
            Ipinahihiwatig din na ang ganitong paghahati ng lipunan ay maaaring magbunga ng tensyon at kaguluhan kung hindi ito mababago.`,
      characters: [
        { name: "Don Custodio", color: "#1a3a6e", accent: "#8cb4ff" },
        { name: "Padre Camorra", color: "#3a1a00", accent: "#ff8844" },
      ],
      quiz: { q: "Bakit inilarawan ni Rizal ang magkaibang kalagayan ng mga tao sa Maynila?", choices: ["Upang ipakita ang kagandahan ng arkitektura sa lungsod.","Upang ituro ang tamang paraan ng pagtitipid ng pera.","Upang ilantad ang malinaw na agwat sa lipunan at ang kawalan ng pagkakapantay-pantay.","Upang hikayatin ang mga tao na lumipat sa probinsya."], correct: 2, feedback: "Tama! Ginamit ni Rizal ang magkaibang larawan ng Maynila upang ilantad ang agwat sa lipunan at ang kawalan ng pagkakapantay-pantay." }
    },
    {
      num: 22, title: "Ang pagtatanghal", speaker: "TAGAPAGSALAYSAY",
      image: "https://quezon.gov.ph/wp-content/uploads/2025/11/Pagtatanghal-ng-mga-talentadong-Quezonians-handog-ng-Dulayan-Theater-Organization-Inc-Nov-17-2025-768x512.jpg",
      dialogue: "Ang kabanata ay tungkol sa isang pagtatanghal na nagpapakita ng iba’t ibang ugali ng mga tao at nagsisilbing salamin ng magulong at mapagkunwaring lipunan.",
      scene: "theater",
      buod: `Sa kabanatang ito, naganap ang isang pagtatanghal sa teatro na dinaluhan ng iba’t ibang uri ng tao sa lipunan—mga mayayaman, opisyal, at karaniwang mamamayan. Habang abala ang lahat sa panonood, makikita ang kanilang mga ugali, tulad ng pagpapakitang-yaman, pakikipagplastikan, at pagiging mapanghusga.
            Ipinakita rin dito ang pagkukunwari ng lipunan, kung saan ang panlabas na kaayusan at aliwan ay nagtatago ng tunay na kalagayan ng bansa. Ang pagtatanghal ay nagsisilbing salamin ng lipunan—puno ng kasinungalingan, hindi pagkakapantay-pantay, at pagpapanggap.`,
      characters: [
        { name: "Isagani", color: "#3d5a3e", accent: "#7dffb0" },
        { name: "Juanito Pelaez", color: "#6e3d1a", accent: "#ffcc88" },
      ],
      quiz: { q: "Ano ang sinisimbolo ng 'pagtatanghal' sa teatro sa kabanatang ito?", choices: ["Ang pag-unlad ng sining at kultura sa Pilipinas.","Ang pagkakaisa ng lahat ng uri ng tao sa lipunan.","Ang pagkukunwari at pagpapanggap ng lipunang itinatago ang tunay na dumi sa likod ng aliwan.","Ang pagsuporta ng pamahalaan sa mga lokal na artista."], correct: 2, feedback: "Tama! Ang teatro ay simbolo ng pagkukunwari at pagpapanggap ng lipunan — itinatago ang tunay na madilim na kalagayan ng bansa sa likod ng aliwan." }
    },
    {
      num: 23, title: "Isang Bangkay", speaker: "BASILIO",
      image: "https://cdn.shopify.com/s/files/1/1004/9308/files/Crayon_sketch_of_Leonor_Rivera_by_Rizal_grande.jpg?v=1585571208",
      dialogue: "Ang kabanata ay tungkol sa balita ng pagkamatay ni Maria Clara na lalong nagpatindi sa galit at paghihiganti ni Simoun.",
      scene: "death",
      buod: `Sa kabanatang ito, kumalat ang balita tungkol sa pagkamatay ni Maria Clara, na dating minamahal ni Crisostomo Ibarra (na ngayon ay si Simoun). Ayon sa balita, siya ay namatay sa loob ng kumbento.
            Ang pangyayaring ito ay nagdulot ng matinding lungkot at galit kay Simoun. Lalong tumibay ang kanyang hangarin na maghiganti at ipagpatuloy ang kanyang planong paghihimagsik laban sa mga mapang-abuso.
            Ipinapakita sa kabanata na ang personal na trahedya ay maaaring maging mitsa ng mas malalim na galit at paghahangad ng pagbabago.`,
      characters: [
        { name: "Basilio", color: "#8B4513", accent: "#c8a46e" },
        { name: "Simoun", color: "#2c2c2c", accent: "#f5c842" },
      ],
      quiz: { q: "Ano ang naging epekto ng balita ng pagkamatay ni Maria Clara kay Simoun?", choices: ["Nagpasya siyang magpatawad at maging prayle na lamang.","Nawalan siya ng pag-asa at itinigil ang lahat ng kanyang mga plano.","Lalong tumibay ang kanyang galit at hangarin na ituloy ang himagsikan.","Naghanap siya ng ibang babaeng papalit sa puso niya."], correct: 2, feedback: "Tama! Ang pagkamatay ni Maria Clara ang naging mitsa para lalong tumibay ang plano ni Simoun na maghimagsik." }
    },
    {
      num: 24, title: "Mga Panaginip", speaker: "ISAGANI",
      image: "https://images.esquiremag.ph/esquiremagph/images/2020/06/16/old-school-photos-8.jpg",
      dialogue: "Ang kabanata ay tungkol sa mga panaginip ng mga tauhan na nagpapakita ng kanilang damdamin, takot, at alaala ng nakaraan..",
      scene: "dream",
      buod: `Sa kabanatang ito, ipinakita ang iba’t ibang panaginip ng mga tauhan, lalo na ni Basilio. Sa kanyang panaginip, nakita niya ang kanyang ina na si Sisa, na tila nagbibigay babala at paalala tungkol sa kanyang nakaraan.
            Ang mga panaginip ay sumasalamin sa kanilang mga iniisip, takot, at pag-asa. Ipinapakita rin dito na ang nakaraan ay patuloy na nakakaapekto sa kasalukuyan, at maaaring magsilbing gabay sa kanilang mga magiging desisyon.`,
      characters: [
        { name: "Isagani", color: "#3d5a3e", accent: "#7dffb0" },
        { name: "Basilio", color: "#8B4513", accent: "#c8a46e" },
        { name: "Simoun", color: "#2c2c2c", accent: "#f5c842" },
      ],
      quiz: { q: "Ano ang ipinahihiwatig ng paglitaw ni Sisa sa panaginip ni Basilio?", choices: ["Nakalimutan na ni Basilio ang kanyang nakaraan.","Ang nakaraan ay patuloy na nakakaapekto sa kasalukuyan at nagsisilbing gabay o babala.","Mayaman na si Basilio kaya hindi na niya kailangang matakot.","Gusto ni Sisa na maghiganti si Basilio sa lahat ng tao."], correct: 1, feedback: "Tama! Ang panaginip ni Basilio tungkol kay Sisa ay nagpapakita na ang nakaraan ay nagsisilbing gabay at babala sa kanyang mga desisyon." }
    },
    {
      num: 25, title: "Tawanan at Iyakan", speaker: "PADRE FLORENTINO",
      image: "https://images.esquiremag.ph/esquiremagph/images/2022/06/11/index-1-29720220611.jpg",
      dialogue: "Ang kabanata ay tungkol sa magkasabay na kasiyahan at kalungkutan ng mga tao, na nagpapakita ng hindi pagkakapantay-pantay sa lipunan.",
      scene: "end",
      buod: `Sa kabanatang ito, ipinakita ang magkasalungat na damdamin sa isang pagtitipon—may mga taong nagtatawanan at nagsasaya, habang ang iba naman ay nagdurusa at umiiyak. Habang ang mga makapangyarihan ay abala sa kasiyahan at walang pakialam, ang mga naaapi ay patuloy na naghihirap.
            Makikita rito ang matinding pagkakaiba ng kalagayan ng mga tao sa lipunan. Ang tawanan ay sumisimbolo sa kasiyahan ng mga nakaaangat, samantalang ang iyakan ay kumakatawan sa paghihirap ng mga mahihirap.
            Ipinapakita ng kabanata na sa iisang lugar o panahon, maaaring magkasabay ang saya at lungkot—depende sa katayuan ng tao sa lipunan.`,
      characters: [
        { name: "Simoun", color: "#2c2c2c", accent: "#f5c842" },
        { name: "P. Florentino", color: "#3a1a5e", accent: "#bb88ff" },
      ],
      quiz: { q: "Ano ang kinakatawan ng 'tawanan' at 'iyakan' sa pagtitipong naganap?", choices: ["Ang mga taong lasing laban sa mga taong antok.","Ang magandang panahon laban sa masamang panahon.","Ang kasiyahan ng mga nasa itaas habang ang mga naaapi ay patuloy na nagdurusa.","Ang kompetisyon sa pagitan ng mga mag-aaral sa unibersidad."], correct: 2, feedback: "Tama! Ipinapakita ng kabanata ang matinding kontras — ang saya ng mga makapangyarihan ay katumbas ng pagdurusa ng mga naaapi sa iisang lipunan." }
    }
  ];

  // ── state ──
  let unlockedChapters = JSON.parse(localStorage.getItem('elfili_unlocked') || '[0]');
  let completedChapters = JSON.parse(localStorage.getItem('elfili_completed') || '[]');
  let score = parseInt(localStorage.getItem('elfili_score') || '0');
  let hp = parseInt(localStorage.getItem('elfili_hp') || '100');
  let currentChapter = 0;
  let selectedPreviewIdx = -1;
  let quizAnswered = false;

  // ── stars ──
  function createStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() < 0.7 ? 2 : 4;
      s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${1.5+Math.random()*2}s;`;
      container.appendChild(s);
    }
  }

  // ── pixel scenes ──
  function drawScene(canvasId, type) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const W = canvas.width, H = canvas.height;

    const scenes = {
      fuse: () => {
        ctx.fillStyle = '#0a0a1a'; ctx.fillRect(0,0,W,H);
        ctx.fillStyle = '#2a1a0a'; ctx.fillRect(0,70,W,20);
        ctx.fillStyle = '#f5c842'; ctx.fillRect(42,30,16,20);
        ctx.fillStyle = '#c4972a'; ctx.fillRect(44,28,12,4);
        ctx.fillStyle = '#fff8dc'; ctx.fillRect(46,26,8,4);
        ctx.fillStyle = 'rgba(245,200,66,0.15)';
        for(let r=30;r>0;r-=6){ctx.beginPath();ctx.arc(50,38,r,0,Math.PI*2);ctx.fill();}
        ctx.strokeStyle='#ff6600';ctx.lineWidth=2;
        ctx.beginPath();ctx.moveTo(50,50);ctx.lineTo(30,60);ctx.lineTo(60,65);ctx.lineTo(20,70);ctx.stroke();
        ctx.fillStyle='#111';ctx.fillRect(10,40,14,30);
        ctx.fillStyle='#222';ctx.fillRect(13,34,8,8);
      },
      crowd: () => {
        ctx.fillStyle='#111128';ctx.fillRect(0,0,W,H);
        ctx.fillStyle='#1a3a5c';ctx.fillRect(0,60,W,30);
        [[ 10,40,'#3d5a3e'],[22,45,'#6e3d1a'],[35,38,'#3a1a5e'],[50,42,'#8B4513'],[65,40,'#2c2c2c'],[78,44,'#1a4a2e']].forEach(([x,y,c])=>{
          ctx.fillStyle=c;ctx.fillRect(x,y,10,25);ctx.fillStyle='#888';ctx.fillRect(x+2,y-9,7,9);
        });
        ctx.fillStyle='#f5c842';ctx.fillRect(78,5,8,8);
      },
      manila: () => {
        ctx.fillStyle='#0f1f3a';ctx.fillRect(0,0,W,H);
        [[0,20,20,60,'#1a2a4a'],[20,30,18,50,'#2a1a0a'],[38,15,22,65,'#1a1a2a'],[60,25,18,55,'#0a2a1a'],[78,20,22,60,'#2a0a1a']].forEach(([x,y,w,h,c])=>{
          ctx.fillStyle=c;ctx.fillRect(x,y,w,h);
          ctx.fillStyle='#f5c842';
          for(let wy=y+8;wy<y+h-10;wy+=10) for(let wx=x+4;wx<x+w-4;wx+=8) if(Math.random()>0.4) ctx.fillRect(wx,wy,4,4);
        });
        ctx.fillStyle='#2a2a1a';ctx.fillRect(0,78,W,12);
        ctx.fillStyle='#c8a46e';ctx.fillRect(38,8,22,20);ctx.fillRect(44,4,10,6);
        ctx.fillStyle='#a08040';ctx.fillRect(47,1,6,4);
      },
      theater: () => {
        ctx.fillStyle='#1a0a2a';ctx.fillRect(0,0,W,H);
        ctx.fillStyle='#6a0a0a';ctx.fillRect(0,0,20,90);ctx.fillRect(80,0,20,90);
        ctx.fillStyle='#3a2a0a';ctx.fillRect(15,60,70,30);
        ctx.fillStyle='#f5c842';ctx.fillRect(15,58,70,4);
        ctx.fillStyle='#f0e6c8';ctx.fillRect(38,35,10,25);ctx.fillRect(40,27,7,8);
        ctx.fillStyle='#c0392b';ctx.fillRect(38,32,10,14);
        ctx.fillStyle='#3d5a3e';ctx.fillRect(55,38,10,22);ctx.fillRect(57,30,7,8);
        ctx.fillStyle='rgba(245,200,66,0.1)';
        ctx.beginPath();ctx.moveTo(30,0);ctx.lineTo(10,60);ctx.lineTo(50,60);ctx.closePath();ctx.fill();
        ctx.beginPath();ctx.moveTo(70,0);ctx.lineTo(50,60);ctx.lineTo(90,60);ctx.closePath();ctx.fill();
      },
      death: () => {
        ctx.fillStyle='#0a0a0a';ctx.fillRect(0,0,W,H);
        ctx.fillStyle='#1a1a2a';ctx.fillRect(0,70,W,20);
        ctx.fillStyle='#333';ctx.fillRect(10,62,60,8);ctx.fillRect(65,60,8,8);
        ctx.fillStyle='#c8a46e';ctx.fillRect(80,55,6,16);
        ctx.fillStyle='#f5c842';ctx.fillRect(82,52,2,4);
        ctx.fillStyle='rgba(245,200,66,0.2)';ctx.beginPath();ctx.arc(83,54,10,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#888';ctx.fillRect(10,40,4,20);ctx.fillRect(5,46,14,4);
        ctx.fillStyle='#8B0000';[[30,70],[40,72],[50,71]].forEach(([x,y])=>ctx.fillRect(x,y,4,4));
      },
      dream: () => {
        ctx.fillStyle='#050515';ctx.fillRect(0,0,W,H);
        for(let i=0;i<30;i++){ctx.fillStyle=`rgba(255,255,255,${0.3+Math.random()*0.7})`;ctx.fillRect(Math.random()*W,Math.random()*50,2,2);}
        ctx.fillStyle='#fffdc8';ctx.fillRect(70,8,14,14);
        ctx.fillStyle='#050515';ctx.fillRect(74,6,14,14);
        ctx.fillStyle='#2a4a2a';ctx.fillRect(5,50,30,10);ctx.fillRect(8,40,24,12);
        ctx.fillStyle='#3a6a3a';ctx.fillRect(10,38,20,4);
        ctx.fillStyle='#1a3a5c';ctx.fillRect(55,55,35,10);ctx.fillRect(58,45,28,12);
        ctx.fillStyle='rgba(245,200,66,0.6)';ctx.fillRect(18,30,8,16);ctx.fillRect(20,23,6,8);
        ctx.strokeStyle='#888';ctx.lineWidth=1;
        ctx.beginPath();ctx.moveTo(22,46);ctx.lineTo(22,55);ctx.stroke();
      },
      end: () => {
        ctx.fillStyle='#0a1520';ctx.fillRect(0,0,W,H);
        ctx.fillStyle='#0d2a44';ctx.fillRect(0,55,W,35);
        ctx.fillStyle='#1a4060';ctx.fillRect(0,60,W,6);
        ctx.fillStyle='#1e5070';ctx.fillRect(5,65,20,4);ctx.fillRect(35,68,25,4);ctx.fillRect(70,63,20,4);
        ctx.fillStyle='#1a0a3a';ctx.fillRect(30,20,16,35);ctx.fillRect(32,13,12,8);
        ctx.fillStyle='#2a1a4a';ctx.fillRect(26,24,4,20);ctx.fillRect(46,24,4,20);
        ctx.fillStyle='#8B4513';ctx.fillRect(62,42,18,14);
        ctx.fillStyle='#f5c842';ctx.fillRect(62,42,18,4);ctx.fillRect(70,42,2,14);
        ['#f5c842','#2980b9','#c0392b','#27ae60'].forEach((c,i)=>{ctx.fillStyle=c;ctx.fillRect(62+i*5,56,3,3);});
        ctx.fillStyle='#fff';for(let i=0;i<20;i++) ctx.fillRect(Math.random()*W,Math.random()*35,2,2);
      }
    };

    ctx.clearRect(0,0,W,H);
    scenes[type] && scenes[type]();
  }

  // ── char sprite svg ──
  function makeCharSpriteSVG(color, accent) {
    return `<svg class="char-sprite" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
      <rect x="5" y="1" width="6" height="6" fill="#c8a46e"/>
      <rect x="4" y="7" width="8" height="8" fill="${color}"/>
      <rect x="3" y="8" width="3" height="5" fill="${color}"/>
      <rect x="10" y="8" width="3" height="5" fill="${color}"/>
      <rect x="4" y="14" width="3" height="2" fill="${accent}"/>
      <rect x="9" y="14" width="3" height="2" fill="${accent}"/>
      <rect x="6" y="3" width="2" height="1" fill="#111"/>
      <rect x="9" y="3" width="2" height="1" fill="#111"/>
      <rect x="6" y="5" width="5" height="1" fill="#111"/>
    </svg>`;
  }

  // ── save/load ──
  function saveState() {
    localStorage.setItem('elfili_unlocked', JSON.stringify(unlockedChapters));
    localStorage.setItem('elfili_completed', JSON.stringify(completedChapters));
    localStorage.setItem('elfili_score', score);
    localStorage.setItem('elfili_hp', hp);
  }

  // ── HUD ──
  function updateHUD() {
    const hpPct = hp + '%';
    const hpColor = hp > 60 ? '#27ae60' : hp > 30 ? '#f5c842' : '#c0392b';
    ['hpFill','sidebarHpFill'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.style.width = hpPct; el.style.background = hpColor; }
    });
    ['scoreDisplay','sidebarScore'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = score;
    });
    const prog = `NATUTUNAN: ${completedChapters.length}/7`;
    const pt = document.getElementById('progressText'); if (pt) pt.textContent = prog + ' KABANATA';
    const sp = document.getElementById('sidebarProgress'); if (sp) sp.textContent = prog;
  }

  // ── title → game ──
  function startGame() {
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    showMap();
  }

  // ── show map ──
  function showMap() {
    document.getElementById('map-screen').style.display = 'flex';
    document.getElementById('chapter-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('hpBar').style.display = 'none';
    document.getElementById('stickyPlayer').style.display = 'none';

    buildChapterList();
    showPreviewEmpty();
    updateHUD();
  }

  function buildChapterList() {
    const list = document.getElementById('chapterList');
    list.innerHTML = '';

    chapters.forEach((ch, i) => {
      const unlocked = unlockedChapters.includes(i);
      const completed = completedChapters.includes(i);

      const btn = document.createElement('button');
      btn.className = 'chapter-btn' + (unlocked ? '' : ' locked') + (completed ? ' completed' : '');
      btn.id = `chBtn_${i}`;
      btn.innerHTML = `<span class="ch-btn-num">KAB. ${ch.num} ${completed ? '⭐' : unlocked ? '▶' : '🔒'}</span>
        <span class="ch-btn-title">${ch.title}</span>`;

      if (unlocked) {
        btn.onclick = () => selectPreview(i);
      }
      list.appendChild(btn);
    });
  }

  function showPreviewEmpty() {
    selectedPreviewIdx = -1;
    document.getElementById('previewEmpty').style.display = 'block';
    document.getElementById('previewCard').classList.remove('visible');
    document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('selected'));
  }

  // ── preview panel ──
  function selectPreview(idx) {
    selectedPreviewIdx = idx;
    const ch = chapters[idx];

    document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('selected'));
    const selBtn = document.getElementById(`chBtn_${idx}`);
    if (selBtn) selBtn.classList.add('selected');

    document.getElementById('previewEmpty').style.display = 'none';
    const card = document.getElementById('previewCard');
    card.classList.remove('visible');
    void card.offsetWidth;
    card.classList.add('visible');

    document.getElementById('pvNum').textContent = `KABANATA ${ch.num}`;
    document.getElementById('pvTitle').textContent = ch.title;
    document.getElementById('pvSpeaker').textContent = ch.speaker;
    document.getElementById('pvDialogue').textContent = ch.dialogue;
    document.getElementById('pvBuod').textContent = ch.buod;

    const row = document.getElementById('pvCharsRow');
    row.innerHTML = '';
    ch.characters.forEach(char => {
      const card2 = document.createElement('div');
      card2.className = 'char-card';
      card2.innerHTML = makeCharSpriteSVG(char.color, char.accent) + `<div class="char-name">${char.name}</div>`;
      card2.onmouseenter = (e) => showCharTooltip(char.name, e);
      card2.onmousemove  = (e) => moveCharTooltip(e);
      card2.onmouseleave = hideCharTooltip;
      row.appendChild(card2);
    });

    setTimeout(() => drawScene('previewCanvas', ch.scene), 30);
  }

  // ── tooltip ──
  function showCharTooltip(name, e) {
    const tt = document.getElementById('charTooltip');
    const desc = charDescriptions[name] || 'Isang mahalagang tauhan sa nobela.';
    document.getElementById('ttName').textContent = name.toUpperCase();
    document.getElementById('ttDesc').textContent = desc;
    tt.classList.add('visible');
    moveCharTooltip(e);
  }

  function moveCharTooltip(e) {
    const tt = document.getElementById('charTooltip');
    let x = e.clientX + 14, y = e.clientY - 10;
    if (x + 230 > window.innerWidth) x = e.clientX - 234;
    if (y + 100 > window.innerHeight) y = e.clientY - 110;
    tt.style.left = x + 'px';
    tt.style.top  = y + 'px';
  }

  function hideCharTooltip() {
    document.getElementById('charTooltip').classList.remove('visible');
  }

  // ── enter chapter from preview ──
  function enterChapterFromPreview() {
    if (selectedPreviewIdx < 0) return;
    openChapter(selectedPreviewIdx);
  }

  // ── open chapter ──
  function openChapter(idx) {
    currentChapter = idx;
    const ch = chapters[idx];
    quizAnswered = false;

    document.getElementById('map-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('chapter-screen').style.display = 'block';
    document.getElementById('hpBar').style.display = 'block';
    document.getElementById('stickyPlayer').style.display = 'block';

    document.getElementById('chNumBig').textContent = `KABANATA ${ch.num}`;
    document.getElementById('chTitleBig').textContent = ch.title;
    document.getElementById('dialogueSpeaker').textContent = ch.speaker;
    document.getElementById('dialogueText').textContent = ch.dialogue;
    document.getElementById('buodText').textContent = ch.buod;

    spRestoreForChapter(idx);

    // set chapter image — replace src with your actual image paths in the chapters array
    const imgEl = document.getElementById('chapterImg');
    imgEl.src = ch.image || '';
    imgEl.alt = ch.title;

    // chars
    const row = document.getElementById('charsRow');
    row.innerHTML = '';
    ch.characters.forEach(char => {
      const card = document.createElement('div');
      card.className = 'char-card';
      card.innerHTML = makeCharSpriteSVG(char.color, char.accent) + `<div class="char-name">${char.name}</div>`;
      card.onmouseenter = (e) => showCharTooltip(char.name, e);
      card.onmousemove  = (e) => moveCharTooltip(e);
      card.onmouseleave = hideCharTooltip;
      row.appendChild(card);
    });

    updateHUD();
  }

  // ── go to quiz ──
  function goToQuiz() {
    const ch = chapters[currentChapter];
    quizAnswered = false;

    document.getElementById('chapter-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // fill quiz header
    document.getElementById('quizChNum').textContent = `KABANATA ${ch.num}`;
    document.getElementById('quizChTitle').textContent = ch.title;

    document.getElementById('quizQuestion').textContent = ch.quiz.q;

    const choicesDiv = document.getElementById('quizChoices');
    choicesDiv.innerHTML = '';
    ch.quiz.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = `${['A','B','C','D'][i]}) ${choice}`;
      btn.onclick = () => answerQuiz(i, btn);
      choicesDiv.appendChild(btn);
    });

    const fb = document.getElementById('quizFeedback');
    fb.className = 'quiz-feedback';
    fb.textContent = '';
    document.getElementById('nextChBtn').style.display = 'none';
  }

  // ── back to chapter from quiz ──
  function backToChapter() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('chapter-screen').style.display = 'block';
  }

  // ── answer quiz ──
  function answerQuiz(idx, btn) {
    if (quizAnswered) return;
    quizAnswered = true;
    const ch = chapters[currentChapter];
    const fb = document.getElementById('quizFeedback');
    const allBtns = document.querySelectorAll('.choice-btn');

    allBtns.forEach(b => b.disabled = true);
    allBtns[ch.quiz.correct].classList.add('correct');

    if (idx === ch.quiz.correct) {
      btn.classList.add('correct');
      score += 100;
      fb.className = 'quiz-feedback show-correct';
      fb.textContent = '( •̀ ω •́ )⭐ ' + ch.quiz.feedback;
    } else {
      btn.classList.add('wrong');
      hp = Math.max(0, hp - 20);
      fb.className = 'quiz-feedback show-wrong';
      fb.textContent = `＞︿＜ Mali! Ang tamang sagot: ${ch.quiz.choices[ch.quiz.correct]}. ${ch.quiz.feedback}`;
    }

    const nextIdx = currentChapter + 1;
    if (nextIdx < chapters.length && !unlockedChapters.includes(nextIdx)) {
      unlockedChapters.push(nextIdx);
    }
    if (!completedChapters.includes(currentChapter)) completedChapters.push(currentChapter);

    saveState();
    updateHUD();

    const nextBtn = document.getElementById('nextChBtn');
    nextBtn.style.display = 'block';
    nextBtn.textContent =
      currentChapter < chapters.length - 1 ? 'SUSUNOD NA KABANATA ▶' : '🏆 TAPOS NA! BUMALIK SA MAPA';
  }

  function nextChapter() {
    if (currentChapter < chapters.length - 1) {
      openChapter(currentChapter + 1);
    } else {
      showMap();
    }
  }

  // ── audio ──
  const spAudioSrcs = [
  './audios/kabanata_19.mp3',   // Ang Mitsa
  './audios/kabanata_20.mp3',   // Ang Tagahatol
  './audios/kabanata_21.mp3',   // Nahati ang Maynila
  './audios/kabanata_22.mp3',   // Ang pagtatanghal
  './audios/kabanata_23.mp3',   // Namatay si Maria Clara
  './audios/kabanata_24.mp3',   // Chapter 24 - Mga Panaginip
  './audios/kabanata_25.mp3'    // Chapter 25 - Tawanan at Iyakan
  ];

  const spSpeeds = [0.75, 1, 1.25, 1.5, 2];
  let spSpeedIdx = 1; 

  function spGetAudio() { return document.getElementById('chapterAudio'); }

  function spAttachAudio(src) {
    const audio = spGetAudio();
    audio.pause(); audio.src = src;
    audio.playbackRate = spSpeeds[spSpeedIdx];
    audio.load();
    audio.onloadedmetadata = spUpdateTime;
    audio.ontimeupdate = () => {
      spUpdateTime();
      const pct = audio.duration ? (audio.currentTime/audio.duration)*100 : 0;
      document.getElementById('spFill').style.width = pct+'%';
    };
    audio.onended = () => { document.getElementById('spPlayBtn').textContent='▶'; document.getElementById('spWave').classList.remove('playing'); };
    audio.onplay  = () => { document.getElementById('spPlayBtn').textContent='⏸'; document.getElementById('spWave').classList.add('playing'); };
    audio.onpause = () => { document.getElementById('spPlayBtn').textContent='▶'; document.getElementById('spWave').classList.remove('playing'); };
    document.getElementById('spPlayBtn').disabled = false;
  }

  function spRestoreForChapter(idx) {
    const audio = spGetAudio();
    audio.pause();
    document.getElementById('spPlayBtn').textContent = '▶';
    document.getElementById('spWave').classList.remove('playing');
    document.getElementById('spFill').style.width = '0%';
    document.getElementById('spTime').textContent = '0:00 / 0:00';
    const src = spAudioSrcs[idx];
    if (src) { spAttachAudio(src); } else { audio.src=''; document.getElementById('spPlayBtn').disabled=true; }
    const ch = chapters[idx];
    document.getElementById('spLabel').textContent = 'KAB. '+ch.num+': '+ch.title;
  }

  function spToggle() { const a=spGetAudio(); if(a.paused) a.play(); else a.pause(); }

  function spSeek(event) {
    const a=spGetAudio(); if(!a.duration) return;
    const track=document.getElementById('spTrack'), rect=track.getBoundingClientRect();
    a.currentTime = Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width))*a.duration;
  }

  function spSkip(secs) {
    const a=spGetAudio(); if(!a.src) return;
    a.currentTime=Math.max(0,Math.min(a.duration||0,a.currentTime+secs));
  }

  function spCycleSpeed() {
    spSpeedIdx=(spSpeedIdx+1)%spSpeeds.length;
    spGetAudio().playbackRate=spSpeeds[spSpeedIdx];
    document.getElementById('spSpeedBtn').textContent=spSpeeds[spSpeedIdx]+'×';
  }

  function spUpdateTime() {
    const a=spGetAudio();
    const fmt=s=>{if(isNaN(s)||s===Infinity)return'0:00';const m=Math.floor(s/60),sec=Math.floor(s%60).toString().padStart(2,'0');return m+':'+sec;};
    document.getElementById('spTime').textContent=fmt(a.currentTime)+' / '+fmt(a.duration);
  }

  // ── init ──
  createStars();
  updateHUD();
