const formatVolumeIconPath = require('../assets/scripts/main');

describe('Testing the path generation', () => {
  test('>66', () => {
    expect(formatVolumeIconPath(66)).toContain(2);
    expect(formatVolumeIconPath(67)).toContain(3);
  });
  test('66>=X>33', () => {
    expect(formatVolumeIconPath(66)).toContain(2);
    expect(formatVolumeIconPath(40)).toContain(2);
    expect(formatVolumeIconPath(33)).toContain(1);
  });
  test('33>=X>0', () => {
    expect(formatVolumeIconPath(33)).toContain(1);
    expect(formatVolumeIconPath(0)).not.toContain(1);
    expect(formatVolumeIconPath(10)).toContain(1);
  });
  test('0', () => {
    expect(formatVolumeIconPath(0)).toContain(0);
  });
});