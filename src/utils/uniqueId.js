export function uniqueId() {
    const randomPart = Math.random().toString(36).substr(2, 9);
    const timestampPart = Date.now().toString(36);
    const uniqueId = randomPart + timestampPart;
    
    return uniqueId;
  }
  