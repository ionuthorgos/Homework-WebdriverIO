let collectorMap = [];

/**
 * This function assigns a value to a property within collectorMap
 * object, so that the value might be retrieved and used later. Useful
 * when you need to collect a value and use it later on, maybe
 * in a different class.
 *
 * @param {string} collectorKey
 * @param {string} collectorValue
 */
class Collector {

  async collect(collectorKey, collectorValue) {
    if (collectorKey.includes(' ')) {
      throw new Error('Property names should not include spaces!');
    }
    collectorMap[collectorKey] = collectorValue;
  }
  /**
   * This function retrieves a value from the collectorMap object
   * in order to be used. It needs only one parameter, the collectorKey
   * which was used to store the value previously.
   * @param {string} collectorKey
   */
  async getValueCollectorMap(collectorKey) {
    if (collectorMap[collectorKey] == undefined) {
      throw new Error(`No stored property in collectorMap under ${collectorKey}`);
    }
    return collectorMap[collectorKey];
  }
}
module.exports = new Collector();
