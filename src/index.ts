import { createSocket } from 'dgram'

const main = () => {
  return
}

/**
 * verifyMacAddress
 * @param {[string]} macAddress The mac address to verify
 * @returns {[boolean]} Returns wether the macAddress was verified or not
*/
const verifyMacAddress = (macAddress: string): boolean => {
  if(!/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$/.test(macAddress)) {
    return false
  }

  return true
}

/**
 * createMagicPacket
 * @param {[string]} macAddress The mac address of the machine to Wake-Up
 * @throws Throws an Error if the provided mac address is invalid
 * @throws Throws an Error if the parsing of the magic packet fails
 * @returns {[Buffer]} Returns a Buffer object containing the wol-datagram payload
*/
const createMagicPacket = (macAddress: string): Buffer => {
  if(!verifyMacAddress(macAddress)) {
    throw new Error('Invalid mac address')
  }

  // Creating a Wake-On-Lan datagram string (no spaces)
  const magicPacketPayload = 'ff'
    .repeat(6)
    .concat(macAddress.replaceAll(':', '').repeat(16))

  // Splitting the string into an array of string bytes
  const parsedMagicPacketPayload = magicPacketPayload
    .match(/.{1,2}/g)

  if(!parsedMagicPacketPayload) {
    throw new Error('An error occurred while parsing the magic packet')
  }

  const magicPacket = Buffer.from(parsedMagicPacketPayload
    .map(strByte => parseInt(strByte, 16))
  )

  return magicPacket
}

main()
