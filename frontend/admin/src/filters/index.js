import DictionJson from '@/utils/dictionJson.js'

function filterConstDiction(value, key) {
  if(DictionJson[key]){
    for(let item of DictionJson[key]){
      if(item.dataValue == value) return item.dataText
    }
    return value
  }else{
    return value
  }
}

// 数据字典值过滤，第一参数为值，第二参数为字段名
const filterDirectionValue = (value, key, originalValue) =>{
	if(!key){return '请填写key值'}
	let data = localStorage.getItem('DICTIONARY')
	if(!data){return ''}
	let dictionary = JSON.parse(data);
	if(dictionary[key]){
	  for(let i in dictionary[key]){
		if(dictionary[key][i].dataValue == value){
		  return dictionary[key][i].dataText
		}
	  }
	}else{
	  return ''
	}
	if(originalValue){
		return value
	}
	return ''
}


export default {
  filterConstDiction,
  filterDirectionValue
}
