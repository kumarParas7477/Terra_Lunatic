const getItem =(item,flag = null) =>{
    let result;
if(flag == null)
result = localStorage.getItem(item);
else
result = JSON.parse(localStorage.getItem(item));

if(result == undefined || result == null){
    result = undefined;
}
return result;
}



export default getItem;