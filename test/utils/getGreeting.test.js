import { getGreeting } from '../../src/utils/getGreeting';

describe('Tests in getGreeting.js', () => {
  test('getGreeting should return Hi Franz!', () => {
    const name = 'Franz';
    const greeting = getGreeting(name);
    expect(greeting).toBe(`Hi ${name}!`);
  });
});