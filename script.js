var temp=document.getElementById('temp');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('serchbox')
 var body_img=document.getElementById('body_img');

 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('deatil')
 var error=document.getElementById('error')





    async function checkWeather(city) {
        let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  
    const body = document.body;

    if (data.weather[0].main == "Clouds") {
        body.style.backgroundImage = "url('https://i.pinimg.com/originals/12/5f/3b/125f3b0c3bc2954e332c5dc94633fae0.gif')";
    } else if (data.weather[0].main == 'Clear') {
        body.style.backgroundImage = "url('https://i.gifer.com/origin/45/454ba38b4ce5b3fdc8796ed710769e69.gif')";
    } else if (data.weather[0].main == 'Rain') {
        body.style.backgroundImage = "url('https://giffiles.alphacoders.com/209/209277.gif')";
    } else if (data.weather[0].main == 'Drizzle') {
        body.style.backgroundImage = "url('https://media.giphy.com/media/id5eoFlVLnEHu/giphy.gif')";
    } else if (data.weather[0].main == 'Mist') {
        body.style.backgroundImage = "url('https://c.tenor.com/Gwv12BigCYcAAAAC/foggy-fog.gif')";
    } else if (data.weather[0].main == 'Haze') {
        body.style.backgroundImage = "url('https://th.bing.com/th/id/R.6954695f6717ad0f47283d8dc33d5a30?rik=Y0R7ALjfgUQM9A&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f10%2fmist-gif-11.gif&ehk=AUUvPk0qBG4jhGYBzTJs9FcqyVvkM6BXkKfxMYAuohA%3d&risl=&pid=ImgRaw&r=0')";
    } else {
        body.style.backgroundImage = "url('')";
    }

    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
     body_data.style.display='flex';
     deatil.style.display='flex';
   

     const speech= new SpeechSynthesisUtterance(`The temperatue is ${temp.innerHTML}`);
        speechSynthesis.speak(speech);

     }
     

      serchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);
         
      })