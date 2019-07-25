import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach( () => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a default trail', () => {
    const pipedValue = pipe.transform('Test value', 1);
    expect(pipedValue).toContain('...');
  });

  it('should return a custom trail', () => {
    const pipedValue = pipe.transform('Test value', 1, '555');
    expect(pipedValue).toContain('555');
  });

  it('should not trail when the string is smaller than the counter', () => {
    const pipedValue = pipe.transform('Test value', 50, '...');
    expect(pipedValue).not.toContain('...');
  });

  it('should trail on the exact character count', () => {
    const pipedValue = pipe.transform('0123456', 5, '...');
    expect(pipedValue).toContain('...');
    expect(pipedValue.length).toBe(8);
  });

  it('should use default values as expected', () => {
    const pipedValue = pipe.transform('012345678901234567890123456789');
    expect(pipedValue).toContain('...');
    expect(pipedValue.length).toBe(23);
  });

});
