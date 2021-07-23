// test/InscriptionPage.test.js
const assert = require('assert');
const Inscription = require('../components/InscriptionsPage');

// give the test suite a label using 'describe'
describe('Inscription', () => {
  // give the test a label using 'it'
  it('is a function accepting all 15 argument', () => {
    // to verify if it is a 'function'
    assert.strictEqual(typeof inscription, 'function');
  });

  // to verify if it one argument
  it('is a function accepting firstname argument', () => {
    const inscription = new Inscription('Mario');
    assert.strictEqual(inscription.firstname.length, 2);
  });
  it('is a function accepting lastname argument', () => {
    const inscription = new Inscription('Carvalho');
    assert.strictEqual(inscription.lastname.length, 2);
  });
  it('is a function accepting birthday argument', () => {
    const inscription = new Inscription('2021-07-06');
    assert.strictEqual(inscription.birthday.length, 2);
  });
  it('is a function accepting email argument', () => {
    const inscription = new Inscription('mp@gmail.com');
    assert.strictEqual(inscription.email.length, 2);
    assert.strictEqual(inscription.email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
  });
  it('is a function accepting password argument', () => {
    const inscription = new Inscription('12345678');
    assert.strictEqual(inscription.password.length, 8);
  });
  it('is a function accepting phoneNumber argument', () => {
    const inscription = new Inscription('0477112233');
    assert.strictEqual(inscription.phoneNumber.length, 10);
  });
  it('is a function accepting description argument', () => {
    const inscription = new Inscription('Tests with TDD');
    assert.strictEqual(inscription.description.length, 1);
  });
  it('is a function accepting tvaNumber argument', () => {
    const inscription = new Inscription('999999999');
    assert.strictEqual(inscription.tvaNumber.length, 8);
  });
  it('is a function accepting siretNumber argument', () => {
    const inscription = new Inscription('88888888');
    assert.strictEqual(inscription.siretNumber.length, 8);
  });
  it('is a function accepting street argument', () => {
    const inscription = new Inscription('Rue des Comediens');
    assert.strictEqual(inscription.street.length, 5);
  });
  it('is a function accepting streetNumber argument', () => {
    const inscription = new Inscription('43');
    assert.strictEqual(inscription.streetNumber.length, 2);
  });
  it('is a function accepting city argument', () => {
    const inscription = new Inscription('Bxl');
    assert.strictEqual(inscription.city.length, 2);
  });
  it('is a function accepting companyName argument', () => {
    const inscription = new Inscription('CSC');
    assert.strictEqual(inscription.companyName.length, 3);
  });
});
