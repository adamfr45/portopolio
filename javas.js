const kiri = document.querySelector('#kiri');
const kanan = document.querySelector('#kanan');
const objek = {noId : 1}
const gbr1 = document.querySelector('#gbr1');
const gbr2 = document.querySelector('#gbr2');
const gbr3 = document.querySelector('#gbr3');
const tr = document.querySelector('tr')
const datas1 = document.querySelector('#dataS1');
const datas2 = document.querySelector('#dataS2');
const datas3 = document.querySelector('#dataS3');
const button =document.querySelector('#button');
const navsembunyi = document.querySelector('.navsembuyi');
const kirib = document.querySelector('#kiri');
const kananb = document.querySelector('#kanan');
const kiritg = document.querySelector('#kiritg');
const kanantg = document.querySelector('#kanantg');
const kiritgh = document.querySelector('#kiritgh');
const kanantgh = document.querySelector('#kanantgh');
const gesertg = document.querySelector('#gesertg');
const nomer = {no:1}
const tg1 = document.querySelector('#tg1');
const tg2 = document.querySelector('#tg2');
const tg3 = document.querySelector('#tg3');
const tg4 = document.querySelector('#tg4');
const gesertd = document.querySelector('#gesertd');
const td1 = document.querySelector('#td1');
const td2 = document.querySelector('#td2');
const td3 = document.querySelector('#td3');
const td4 = document.querySelector('#td4');
const kiritd = document.querySelector('.kiritd');
const kanantd = document.querySelector('.kanantd');
const kiritdh = document.querySelector('.kiritdh');
const kanantdh = document.querySelector('.kanantdh'); 
const nomer2 = {no2:1}

function tambah (){
    if(objek.noId<=2){
        objek.noId++
    }
}

function kurang(){
    if(objek.noId>1){
        objek.noId--
    }
}
 function besar(){
     if(objek.noId==2){
         gbr1.style.transform=('scale(0%)')
         gbr2.style.transform=('scale(600%)')
         tr.style.transform=('translateX(-50px)')
         datas1.style.display=('none');
         datas2.style.display=('block')
         kirib.style.opacity=('1')
        }
     else if (objek.noId==3){
        gbr2.style.transform=('scale(0%)')
        gbr3.style.transform=('scale(600%)')
        tr.style.transform=('translateX(-100px)')
        datas2.style.display=('none');
        datas3.style.display=('block')
        kananb.style.opacity=('0')
     }
 }
 function kecil(){
     if(objek.noId==2){
         gbr3.style.transform=('scale(0%)')
         gbr2.style.transform=('scale(600%)')
         tr.style.transform=('translateX(-50px)')
         datas3.style.display=('none');
         datas2.style.display=('block')
         kananb.style.opacity=('1')
     }else if (objek.noId==1){
            gbr2.style.transform=('scale(0%)')
            gbr1.style.transform=('scale(600%)')
            tr.style.transform=('translateX(0px)')
            datas2.style.display=('none');
            datas1.style.display=('block');
            kirib.style.opacity=('0')
     }
 }

 function pindah(){
     if(navsembunyi.style.transform==('translateX(-150px)')){
         navsembunyi.style.transform=('translateX(0px)');
     }else{navsembunyi.style.transform=('translateX(-150px)')}
 }

 kanan.addEventListener('click',function(){
     tambah()
     besar()
     console.log(objek.noId)
 })

 kiri.addEventListener('click',function(){
    kurang() 
    kecil()
    console.log(objek.noId)

 })

 button.addEventListener('click',function(){
     pindah()
 })

 window.addEventListener('scroll',function(){
     bergerak()
 });

 function bergerak(){
    const keahlianData = document.querySelectorAll('.ada')
     for(let i=0; i<keahlianData.length; i++){
         const windowheight = window.innerHeight;
         const revealtop = keahlianData[i].getBoundingClientRect().top;
         const revealpoint = 150;

         if(revealtop < windowheight - revealpoint){
             keahlianData[i].classList.add('active');
         }
         else{keahlianData[i].classList.remove('active')}
     }
 }

 function tambahtg(){
     if(nomer.no<4){
         nomer.no++
     }
 }
 function kurangtg(){
     if(nomer.no>1){
         nomer.no--
     }
 }

 function besartg(){
     if(nomer.no==2){
         tg1.style.width=('100px');
         tg2.style.width=('200px');
         tg3.style.width=('100px');
         tg4.style.width=('50px');
         tg2.classList.add('zom');
         tg1.classList.remove('zom');
         gesertg.style.transform=('translateX(-100px)')
         kiritg.style.opacity=('1')
     }
     else if(nomer.no==3){
         tg1.style.width=('50px');
         tg2.style.width=('100px');
         tg3.style.width=('200px');
         tg4.style.width=('100px');
         tg2.classList.remove('zom');
         tg3.classList.add('zom');
         gesertg.style.transform=('translateX(-150px)')
     }
     else if(nomer.no==4){
         tg1.style.width=('25px');
         tg2.style.width=('50px');
         tg3.style.width=('100px');
         tg4.style.width=('200px');
         tg3.classList.remove('zom');
         tg4.classList.add('zom')
         gesertg.style.transform=('translateX(-175px)')
         kanantg.style.opacity=('0')
     }
 }
 function keciltg(){
     if(nomer.no==3){
         tg1.style.width=('50px');
         tg2.style.width=('100px');
         tg3.style.width=('200px');
         tg4.style.width=('100px');
         tg4.classList.remove('zom');
         tg3.classList.add('zom');
         gesertg.style.transform=('translateX(-150px)');
         kanantg.style.opacity=('1')
     }
     else if (nomer.no==2){
         tg1.style.width=('100px');
         tg2.style.width=('200px');
         tg3.style.width=('100px');
         tg4.style.width=('50px');
         tg3.classList.remove('zom');
         tg2.classList.add('zom');
         gesertg.style.transform=('translateX(-100px)');
     }
     else if(nomer.no==1){
        tg1.style.width=('200px');
        tg2.style.width=('100px');
        tg3.style.width=('50px');
        tg4.style.width=('25px');
        tg2.classList.remove('zom');
        tg1.classList.add('zom')
        gesertg.style.transform=('translateX(0)');
        kiritg.style.opacity=('0')
     }
 }

 function besartgh(){
     if(nomer.no==2){
         tg1.style.width=('50px');
         tg1.style.display=('none');
         tg2.style.width=('200px');
         tg2.style.display=('block')
         tg3.style.width=('50px');
         tg3.style.display=('none')
         tg4.style.width=('25px')
         tg4.style.display=('none')
         gesertg.style.transform=('translateX(0px)')
         kiritgh.style.opacity=('1')
     }
     else if(nomer.no==3){
        tg1.style.width=('25px');
        tg1.style.display=('none')
        tg2.style.width=('50px');
        tg2.style.display=('none')
        tg3.style.width=('200px');
        tg3.style.display=('block')
        tg4.style.width=('50px')
        tg4.style.display=('none')
        gesertg.style.transform=('translateX(0px)')
     }
     else if(nomer.no==4){
        tg1.style.width=('12.5px');
        tg1.style.display=('none')
        tg2.style.width=('25px');
        tg2.style.display=('none')
        tg3.style.width=('50px');
        tg3.style.display=('none')
        tg4.style.width=('200px')
        tg4.style.display=('block')
        gesertg.style.transform=('translateX(0px)')
        kanantgh.style.opacity=('0')
     }
 }
 function keciltgh(){
     if(nomer.no==3){
        tg1.style.width=('25px');
        tg1.style.display=('none')
        tg2.style.width=('50px');
        tg2.style.display=('none')
        tg3.style.width=('200px');
        tg3.style.display=('block')
        tg4.style.width=('50px')
        tg4.style.display=('none')
        gesertg.style.transform=('translateX(0px)')
        kanantgh.style.opacity=('1')
     }
     else if(nomer.no==2){
        tg1.style.width=('50px');
        tg1.style.display=('none')
        tg2.style.width=('200px');
        tg2.style.display=('block')
        tg3.style.width=('50px');
        tg3.style.display=('none')
        tg4.style.width=('25px')
        tg4.style.display=('none')
        gesertg.style.transform=('translateX(0px)')
     }
     else if(nomer.no==1){
        tg1.style.width=('200px');
        tg1.style.display=('block')
        tg2.style.width=('50px');
        tg2.style.display=('none')
        tg3.style.width=('25px');
        tg3.style.display=('none')
        tg4.style.width=('15.5px')
        tg4.style.display=('none')
        gesertg.style.transform=('translateX(0px)')
        kiritgh.style.opacity=('0')
     }
 }
 
 kanantg.addEventListener('click',function(){
    tambahtg()
    besartg() 
     console.log(nomer.no);
 })

 kiritg.addEventListener('click',function(){
     kurangtg()
     keciltg()
     console.log(nomer.no);
 })

 kanantgh.addEventListener('click',function(){
     tambahtg();
     besartgh();
 })

 kiritgh.addEventListener('click',function(){
    kurangtg();
    keciltgh()
 })

function tambahtd(){
    if(nomer2.no2 <4){
        nomer2.no2++
    }
}

function kurangtd(){
    if(nomer2.no2>1){
        nomer2.no2--
    }
}

function besartd(){
    if(nomer2.no2==2){
        td1.style.width=('100px');
        td2.style.width=('200px');
        td3.style.width=('100px');
        td4.style.width=('50px');
        gesertd.style.transform=('translateX(-100px)')
        kiritd.style.opacity=('1')
        td1.classList.remove('zom')
        td2.classList.add('zom')

    }
    else if(nomer2.no2==3){
        td1.style.width=('50px');
        td2.style.width=('100px');
        td3.style.width=('200px');
        td4.style.width=('100px');
        gesertd.style.transform=('translateX(-150px)');
        td2.classList.remove('zom');
        td3.classList.add('zom');
    }
    else if(nomer2.no2==4){
        td1.style.width=('25px');
        td2.style.width=('50px');
        td3.style.width=('100px');
        td4.style.width=('200px');
        gesertd.style.transform=('translateX(-175px)')
        kanantd.style.opacity=('0');
        td3.classList.remove('zom')
        td4.classList.add('zom')
    }
}

function keciltd(){
    if(nomer2.no2==3){
        td1.style.width=('50ppx');
        td2.style.width=('100px');
        td3.style.width=('200px');
        td4.style.width=('100px');
        gesertd.style.transform=('translateX(-150px)')
        kanantd.style.opacity=('1');
        td4.classList.remove('zom');
        td3.classList.add('zom');
    }
    else if(nomer2.no2==2){
        td1.style.width=('100px');
        td2.style.width=('200px');
        td3.style.width=('100px');
        td4.style.width=('50px');
        gesertd.style.transform=('translateX(-100px)');
        td3.classList.remove('zom');
        td2.classList.add('zom');
    }
    else if(nomer2.no2==1){
        td1.style.width=('200px');
        td2.style.width=('100px');
        td3.style.width=('50px');
        td4.style.width=('25px');
        gesertd.style.transform=('translateX(0px)')
        kiritd.style.opacity=('0')
        td2.classList.remove('zom');
        td1.classList.add('zom');
    }
}

function besartdh(){
    if(nomer2.no2==2){
        td1.style.width=('50px');
        td1.style.display=('none')
        td2.style.width=('200px');
        td2.style.display=('block')
        td3.style.width=('50px');
        td3.style.display=('none')
        td4.style.width=('25px');
        td4.style.display=('none')
        gesertd.style.transform=('translateX(0px)')
        kiritdh.style.opacity=('1')
    }
    else if(nomer2.no2==3){
        td1.style.width=('25px');
        td1.style.display=('none')
        td2.style.width=('50px');
        td2.style.display=('none')
        td3.style.width=('200px');
        td3.style.display=('block')
        td4.style.width=('50px');
        td4.style.display=('none')
        gesertd.style.transform=('translateX(0px)')
    }
    else if(nomer2.no2==4){
        td1.style.width=('12.5px');
        td1.style.display=('none')
        td2.style.width=('25px');
        td2.style.display=('none')
        td3.style.width=('50px');
        td3.style.display=('none')
        td4.style.width=('200px');
        td4.style.display=('block')
        gesertd.style.transform=('translateX(0px)')
        kanantdh.style.opacity=('0')
    }
}
function keciltdh(){
    if(nomer2.no2==3){
        td1.style.width=('25px');
        td1.style.display=('none')
        td2.style.width=('50px');
        td2.style.display=('none')
        td3.style.width=('200px');
        td3.style.display=('block')
        td4.style.width=('50px');
        td4.style.display=('none')
        gesertd.style.transform=('translateX(0px)');
        kanantdh.style.opacity=('1');
    }
    else if(nomer2.no2==2){
        td1.style.width=('50px');
        td1.style.display=('none')
        td2.style.width=('200px');
        td2.style.display=('block')
        td3.style.width=('50px');
        td3.style.display=('none')
        td4.style.width=('25px');
        td4.style.display=('none')
        gesertd.style.transform=('translateX(0px)')
    }
    else if(nomer2.no2==1){
        td1.style.width=('200px');
        td1.style.display=('block')
        td2.style.width=('50px');
        td2.style.display=('none')
        td3.style.width=('25px');
        td3.style.display=('none')
        td4.style.width=('12.5px');
        td4.style.display=('none')
        gesertd.style.transform=('translateX(0px)');
        kiritdh.style.opacity=('0')
    }
}

kanantd.addEventListener('click', function(){
    tambahtd();
    besartd();
    console.log(nomer2.no2); 

});

kiritd.addEventListener('click',function(){
    kurangtd()
    keciltd()
    console.log(nomer2.no2);
});

kanantdh.addEventListener('click',function(){
    tambahtd();
    besartdh();
});

kiritdh.addEventListener('click',function(){
    kurangtd();
    keciltdh();
})