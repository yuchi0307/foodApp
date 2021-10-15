# foodApp
 <h3>架構</h3>
 Header(Layout) <br>
 -header/ HaederCartButton/<br>
 -img/
 
 Meals <br>
 -MealsSummery/<br>
 -AvailableMeal/ MealItem/ MealItemForm/ <br>
 
 Modal 複習ReactDOM.createPortal<br> 
 -Backdrop /<br>
 -< ModalOverlay >{props.children}< /ModalOverlay> <br>
 
 -Modal 夾住 Cart <br> 
 
 <h3>重點Hooks</h3><br/>
 重複利用的 state :　商品數量<br/>
 應用位子：點餐表單、購物車<br/>
 hook ： useContext, useReducer<br/>
 
 <h3>忘記的</h3>
 <ul>
 <li>js語法<a href="https://fred-zone.blogspot.com/2017/01/javascript-mapreduce.html">
   array.reduce(()=>{}, initial)</a></li>
 </ul>
 
```
/*===
語法 Array.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)

accumulator：經由個別 currentValue 加總的累計值
currentValue：Array 的個別 item
currentIndex：Array item 的索引
array：呼叫該 Array method 的陣列
initialValue：預設值，放在 function 的最後方，非必填
===*/

//範例
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
console.log(reduceArr); // 15
```

<br/>
範例若未提供預設值，accumulator（累計值）就會取陣列的第一個元素也就是 1，而 currentValue 就會從陣列的第二個值開始 loop。<br/>
<br>

