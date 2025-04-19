import { assert, expect } from 'chai';
import { beforeEach, describe, it } from 'vitest';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from './localStorage';

describe('localStorage utility functions', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should save data to localStorage', () => {
    const key = 'testKey';
    const value = { name: 'test' };

    saveToLocalStorage(key, value);

    expect(localStorage.getItem(key)).to.equal(JSON.stringify(value));
  });

  it('should retrieve data from localStorage', () => {
    const key = 'testKey';
    const value = { name: 'test' };
    localStorage.setItem(key, JSON.stringify(value));

    const result = getFromLocalStorage(key);

    expect(result).to.deep.equal(value);
  });

  it('should return null if key does not exist in localStorage', () => {
    const result = getFromLocalStorage('nonExistentKey');

    assert.isNull(result);
  });

  it('should remove data from localStorage', () => {
    const key = 'testKey';
    const value = { name: 'test' };
    localStorage.setItem(key, JSON.stringify(value));

    removeFromLocalStorage(key);

    assert.isNull(localStorage.getItem(key));
  });
});
