export const validate = function(ral,rules) {
    const defaultRules = {
        name:(ral,msg)=>{
            const regx = /^[a-zA-Z0-9_-]{4,16}$/;
            const res = regx.test(ral);
            if(!res){
                alert(msg)
            }else{
                close.log('name:yes')
            }
        },
        email:(ral,msg)=>{
           const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
           const res = regx.test(ral);
           if(!res){
               alert(msg)
           }else{
               close.log('email:yes')
           }
        },
        password:(ral,msg)=>{
            const regx = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            const res = regx.test(ral);
            if(!res){
                alert(msg)
            }else{
                close.log('password:yes')
            }
        }
    }
    for(const key in rules){
        if (Object.hasOwnProperty.call(rules, key)){
            const cur = rules[key];
        }
        if(typeof cur === 'function'){
            cur(val);
            continue;
        }
        if(defaultRules[key]){
            defaultRules[key](val,cur)
        }
    }
}