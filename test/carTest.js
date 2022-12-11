var assert=require('assert')

describe('carTest',function(){
    describe("carAge",function(){

        it('Car Age Should Be 22 when since=2000', function(){
            var result = new Date().getFullYear()-2000
            assert.equal(result,22)
        })
    })

    //describe("carAge",function(){
        //it('Car Age Should Not Be 23 when since=1999', function(){
           // var result = new Date().getFullYear()-1999
            //assert.notEqual(result,23)
        //})
    //})
})