
//AAA PATERN

const cal =require('./calculator');//Arrange


describe('Add  Operator',()=>{

    test('adds 1 + 1 equals 2',()=>{
        var value = cal.add(1,1); //ACT
        expect(value).toBe(2); //ASSERT
    
    });
    
    test('adds 5 + 2 equals 7',()=>{
        var value = cal.add(5,2);
        expect(value).toBe(7);
    });
  
});

describe('Substractor  Operator',()=>{
    
    test('Substractor 2 - 1 equals 1',()=>{

        var value = cal.substract(2,1);
        expect(value).toBe(1);
    
    });
    
    test('substractor 3 - 1 equals 1',()=>{
        var value = cal.substract(3,1);
        expect(value).toBe(2);
    });
  
});



