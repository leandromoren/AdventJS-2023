function findNaughtyStep(original, modified) {
    // Code here
    const longitudDeOriginal = original.length;
    const logitudDeModified = modified.length;
    const longitudMinima = Math.min(longitudDeOriginal, logitudDeModified);
  
    for (let i = 0; i < longitudMinima; i++) {
      if (original[i] !== modified[i]) {
        return longitudDeOriginal > logitudDeModified ? original[i] : modified[i];
      };
  
      if (longitudDeOriginal == logitudDeModified) {
        return "";
      };
    };
  
    return longitudDeOriginal > logitudDeModified ? original[longitudMinima] : modified[longitudMinima];
  };