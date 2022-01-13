<h3>讀取firebase資料</h3>

```
const AvailableMeals = () => {
  useEffect(()=>{
      const fetchMeals = async () =>{
      const res = await fetch('https://foodapp-fedc7-default-rtdb.firebaseio.com/meals.json');
      const data = await res.json();
      };
  //省略陣列步驟
  for(變數 in 物件){...
   }
      fetchMeals(); //正確寫法
  },[])


    
  }
```
1. url後方要加上meals.json<br/>
2. 使用useEffect要留意!不能return一個promise物件(會出現警示訊息)<br/>
<strong>: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are NOT supported, but you can call an async function inside an effect.<br/>只可以用呼叫的如上</strong>
<a href="https://www.robinwieruch.de/react-hooks-fetch-data/">參考文章</a>
<br/>
錯誤寫法:<br/>
1. useEffect(()=>{fetch(url)},[]) <br/>
2. useEffect(async()=>{},[])
