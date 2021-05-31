import React from 'react';
import './App.css';
import Select from 'react-select'

function App() {

  const date = [
    { 
      value: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6762906-26b7-4e45-9ad6-c429bda87998/dailyCheese.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210531T115835Z&X-Amz-Expires=86400&X-Amz-Signature=03663228658dd3393e2317c1539423ff7edef5ff393330e04a333641f73200cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dailyCheese.png%22',
      label: '2021-06' 
    },
  ]
  const bgImg = [
    { 
      value: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dbe2d28f-0e43-4e3d-b811-6e450975808b/dusrmatnftk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210531T115326Z&X-Amz-Expires=86400&X-Amz-Signature=fe5207666c826288419602755a8d39c2fe35276a5220569a815b5131f476dc04&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dusrmatnftk.png%22', 
      label: '연금술사맛 쿠키' 
    },
    { 
      value: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da0acfbb-9022-4e06-a055-e995b1991312/latte_cookie.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210531T115430Z&X-Amz-Expires=86400&X-Amz-Signature=233443db77b0b1ae3a660d716d1d944dd0878480172d879f6abbe19926320577&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22latte_cookie.png%22', 
      label: '라떼맛 쿠키' 
    },
    { 
      value: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13331b29-a3d5-4207-be7c-fc3a3680748f/onion-export.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210531T115505Z&X-Amz-Expires=86400&X-Amz-Signature=e1a4a40c0e8dec7f269d80ff9ed78ac31b1f6312a74b3b79cb552338f1d75335&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22onion-export.png%22', 
      label: '양파맛 쿠키' 
    },
  ]
  const size = [
    { value: {width:700, height:1000}, label: 'Galaxy S10' },
  ]

  const canvasRef = React.useRef(null);
  const [canvas, setCanvas] = React.useState(null);

  const [state, setState] = React.useState({
    w:0,
    h:0,
    bg:null,
    date:null,
  })
  React.useEffect(()=>{
    setCanvas(canvasRef.current.getContext('2d'));
  },[]);

  const setImg = (e)=>{
    var img = new Image();
    img.onload = function() {
      canvas.drawImage(img, 0, 0, state.w, state.h);
    };
    img.src = e.value
  }
  const setDate = (e)=>{
    var img = new Image();
    img.src = e.value
    img.onload = () => {
      canvas.drawImage(img, 0, 0, state.w, state.h);
    };
  }
  const setSize = (v) => {
    setState({...state, w:v.value.width, h:v.value.height})
  }
  return (
    <div className="App">
      <Select
        onChange={(e)=>{
          console.log(e)
          setDate(e)
        }}
        // defaultValue={date[0]}
        placeholder={"년월선택"}
        options={date} />

      <Select
        onChange={(e)=>{
          setImg(e);
        }}
        // defaultValue={bgImg[0]}
        placeholder={"배경 이미지 선택"}
        options={bgImg} />
        
      <Select
        onChange={(e)=>{
          setSize(e);
          console.log("width",canvas.width)
        }}
        // defaultValue={size[0]}
        placeholder={"핸드퐁선택"}
        options={size} />


      <canvas
        ref={canvasRef}
        width={state.w}
        height={state.h}>
      </canvas>
    </div>
  );
}

export default App;

