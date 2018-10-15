const lib = require('../lib')


describe('absolute' , () =>{

  it('should return a positive number if input is positive' , 
() =>{
  const result  = lib.absolute(1);
  expect(result).toBe(1);
} )

it('should return a positive number if input is  negative' , 
() =>{
  const result  = lib.absolute(-1);
  expect(result).toBe(1);
} )


it('should return a 0 if input is 0' , 
() =>{
  const result  = lib.absolute(0);
  expect(result).toBe(0);
} )

})


describe('greeting' , () =>{
  it('shoud return the greeting message' , () =>{
    const result = lib.greet('hamza')
    expect(result).toMatch(/hamza/)
    expect(result).toContain('hamza')
  })
})


describe('getCurrencies' , () =>{
  it('should return supported currencies' , () =>{
    const result = lib.getCurrencies()

    //Too general
    expect(result).toBeDefined()
    expect(result).not.toBeNull()

    //To specific
    expect(result[0]).toBe('USD')
    expect(result[1]).toBe('AUD')
    expect(result[2]).toBe('EUR')
    expect(result.length).toBe(3)

    //proper way
    expect(result).toContain('USD')
    expect(result).toContain('AUD')
    expect(result).toContain('EUR')

    //iDEAL Way
    expect(result).toEqual(expect.arrayContaining(['EUR' , 'USD' , 'AUD']))

  })

})
