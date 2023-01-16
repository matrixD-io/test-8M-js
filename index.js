const fs = require('fs').promises;

/**
 * Returns the contents of 8M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('8M.bin', 'binary');
  return Buffer.from(data);
};
