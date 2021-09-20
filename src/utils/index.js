/**
 * 校验值是否满足规则
 * @param {any} val 需要校验的值 
 * @param {object} rules 需要校验的规则
 * { [key:string]: string|function }
 * string => 自定义错误信息
 * function => 自定义错误规则  
 */
var tail = '';
export const validate = (val, rules)=>{
    // 我们自己定义的默认规则
    const defaultRules = {
        'email': (val,msg)=>{
            const res = validateEmail(val);
            if(!res){
                return 
            }else{
                console.log('yes')
            }
            return res;
        },
        'phone': (val,msg)=>{
            const regx = /^1\d{10}$/;
            const res = regx.test(val);
            if(!res){
                return tail = false;
            }else{
                console.log('yes')
            }
            return res;
        }
    }

    // 循环需要校验的规则，进行判断
    for (const key in rules) {
        if (Object.hasOwnProperty.call(rules, key)) {
            const cur = rules[key];
            // 如果传入的规则是一个函数，我们就直接执行函数
            if(typeof cur === 'function'){
                cur(val);
                continue;
            }
            // 如果是其他情况，我们就直接去默认规则里面找下是否存在，存在则执行默认规则，否则不管
            if(defaultRules[key]){
                defaultRules[key](val, cur)
            }
            
        }
    }
}
//调用示例
// validate('www.nnn@.com', { email: '邮箱格式错误', requierd: '邮箱是必填项'})
// 策略模式0


export const  validatePhone = (val)=>{
    const reg =  /^1\d{10}$/;
    return reg.test(val);
}