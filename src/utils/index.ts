const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'

const Promise:any = function (this: any, excoubd: any) {
    
     this.state = PENDING
     this.callback = []
     this.value = ''

    const relave = (value: any) => {
        if (this.state === !PENDING) {
            return
        }
        this.state = RESOLVE
        this.value = value
        if (this.callback.length > 0) {
            this.callback.forEach((items: any) => {
                items.kols1(value)
            })
        }
    }

    const rejiact = (resose: any) => {
        if (this.state === !PENDING) {
            return
        }
        this.state = REJECT
        this.value = resose
        if (this.callback.length > 0) {
            this.callback.forEach((items: any) => {
                items.kols2(resose)
            })
        }
    }

    excoubd(relave, rejiact)
}

Promise.prototype.then = function(relavese: any, rejiactse: any) {
    const _this = this
    return new Promise((relave: any, rejiact: any) => {
            function ishands(publiscfn: (arg0: any) => any) {  // 统一改变promise 状态
                const values = publiscfn(_this.value)
                if (values instanceof Promise) {
                        values.then((relavesedb: any) => {
                            relave(relavesedb)
                        }, (rejiactsedb: any) => {
                            rejiact(rejiactsedb)
                        })
                } else {
                    relave(values)
                }
            }

            if (_this.state === PENDING) { //执行一步异步回调
                _this.callback.push({
                    kols1:()=>{
                        ishands(relavese)
                    }, 
                    kols2:()=>{
                        ishands(rejiactse)
                    }
                })
            } else if(_this.state === RESOLVE) { //执行同步成功回调
                ishands(relavese)
            } else {  //执行异步成功回调
               const cosnes =  rejiactse(_this.value)
               rejiact(cosnes)
            }
    })
}

export default Promise 