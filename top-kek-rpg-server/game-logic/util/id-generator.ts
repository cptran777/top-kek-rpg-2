const idGenerator = {
  /**
   * The last id numerical value that was used. The next id generated should
   * be this number plus 1
   */
  lastId: 0,

  giveId(): string {
    this.lastId += 1;

    const hexValue = this.lastId.toString(16).toUpperCase();
    let prependedZeroes = '';

    while (prependedZeroes.length < 8 - hexValue.length) {
      prependedZeroes += '0';
    }

    return prependedZeroes + hexValue;
  }
};

export default idGenerator;