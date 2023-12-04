function findFirstRepeated(gifts) {
    // Code here
    const giftUnico = {};
    for (let i = 0; i <= gifts.length; i++) {
      const id = gifts[i];
      if (giftUnico[id]) return id; 
      giftUnico[id] = true
    }
    return -1
  }
  