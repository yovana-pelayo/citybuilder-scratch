// IMPORT MODULES under test here:
import { makeStatsString } from '../example.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = `You clicked on the land times, on the home times, and on meal time. And everybody loves your quotes`;
   
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString['land', 'home', ' meal'];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
