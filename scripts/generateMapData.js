const mapData = [
    // Row 1
    new Array(124).fill("water"),
    // Row 2
    new Array(124).fill("water"),
    // Row 3
    new Array(27).fill("water").concat(new Array(10).fill("land")).concat(new Array(6).fill("water")).concat(new Array(81).fill("water")),
    // Row 4
    new Array(21).fill("water").concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(2).fill("land")).concat(new Array(1).fill("water")).concat(new Array(27).fill("land")).concat(new Array(11).fill("water")).concat(new Array(4).fill("land")).concat(new Array(24).fill("water")).concat(new Array(3).fill("land")).concat(new Array(29).fill("water")),
    // Row 5
    new Array(17).fill("water").concat(new Array(6).fill("land")).concat(new Array(1).fill("water")).concat(new Array(8).fill("land")).concat(new Array(3).fill("water")).concat(new Array(17).fill("land")).concat(new Array(12).fill("water")).concat(new Array(1).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(10).fill("water")).concat(new Array(5).fill("land")).concat(new Array(5).fill("water")).concat(new Array(9).fill("land")).concat(new Array(8).fill("water")).concat(new Array(5).fill("land")).concat(new Array(14).fill("water")),
    // Row 6
    new Array(16).fill("water").concat(new Array(7).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(1).fill("water")).concat(new Array(5).fill("land")).concat(new Array(6).fill("water")).concat(new Array(12).fill("land")).concat(new Array(25).fill("water")).concat(new Array(2).fill("land")).concat(new Array(5).fill("water")).concat(new Array(19).fill("land")).concat(new Array(2).fill("water")).concat(new Array(11).fill("land")).concat(new Array(9).fill("water")),
    // Row 7
    new Array(3).fill("water").concat(new Array(9).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(2).fill("water")).concat(new Array(6).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(1).fill("water")).concat(new Array(7).fill("land")).concat(new Array(4).fill("water")).concat(new Array(10).fill("land")).concat(new Array(14).fill("water")).concat(new Array(7).fill("land")).concat(new Array(6).fill("water")).concat(new Array(43).fill("land")).concat(new Array(4).fill("water")),
    // Row 8
    new Array(3).fill("water").concat(new Array(27).fill("land")).concat(new Array(2).fill("water")).concat(new Array(5).fill("land")).concat(new Array(3).fill("water")).concat(new Array(6).fill("land")).concat(new Array(16).fill("water")).concat(new Array(11).fill("land")).concat(new Array(1).fill("water")).concat(new Array(48).fill("land")).concat(new Array(2).fill("water")),
    // Row 9
    new Array(2).fill("water").concat(new Array(15).fill("land")).concat(new Array(1).fill("water")).concat(new Array(10).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(4).fill("water")).concat(new Array(2).fill("land")).concat(new Array(4).fill("water")).concat(new Array(4).fill("land")).concat(new Array(5).fill("water")).concat(new Array(2).fill("land")).concat(new Array(9).fill("water")).concat(new Array(4).fill("land")).concat(new Array(1).fill("water")).concat(new Array(45).fill("land")).concat(new Array(2).fill("water")).concat(new Array(4).fill("land")).concat(new Array(7).fill("water")),
    // Row 10
    new Array(3).fill("water").concat(new Array(2).fill("land")).concat(new Array(8).fill("water")).concat(new Array(17).fill("land")).concat(new Array(2).fill("water")).concat(new Array(6).fill("land")).concat(new Array(19).fill("water")).concat(new Array(1).fill("target")).concat(new Array(4).fill("water")).concat(new Array(1).fill("land")).concat(new Array(3).fill("water")).concat(new Array(38).fill("land")).concat(new Array(7).fill("water")).concat(new Array(2).fill("land")).concat(new Array(11).fill("water")),
    // Row 11
    new Array(15).fill("water").concat(new Array(16).fill("land")).concat(new Array(1).fill("water")).concat(new Array(8).fill("land")).concat(new Array(15).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(48).fill("land")).concat(new Array(4).fill("water")).concat(new Array(1).fill("land")).concat(new Array(12).fill("water")),
    // Row 12
    new Array(16).fill("water").concat(new Array(21).fill("land")).concat(new Array(1).fill("water")).concat(new Array(2).fill("land")).concat(new Array(19).fill("water")).concat(new Array(46).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(17).fill("water")),
    // Row 13
    new Array(16).fill("water").concat(new Array(14).fill("land")).concat(new Array(1).fill("water")).concat(new Array(7).fill("land")).concat(new Array(20).fill("water")).concat(new Array(6).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(4).fill("water")).concat(new Array(3).fill("land")).concat(new Array(1).fill("water")).concat(new Array(28).fill("land")).concat(new Array(2).fill("water")).concat(new Array(2).fill("land")).concat(new Array(16).fill("water")),
    // Row 14
    new Array(16).fill("water").concat(new Array(12).fill("land")).concat(new Array(1).fill("water")).concat(new Array(6).fill("land")).concat(new Array(21).fill("water")).concat(new Array(4).fill("land")).concat(new Array(3).fill("water")).concat(new Array(2).fill("land")).concat(new Array(1).fill("water")).concat(new Array(9).fill("land")).concat(new Array(2).fill("water")).concat(new Array(25).fill("land")).concat(new Array(3).fill("water")).concat(new Array(1).fill("land")).concat(new Array(18).fill("water")),
    // Row 15
    new Array(17).fill("water").concat(new Array(16).fill("land")).concat(new Array(23).fill("water")).concat(new Array(3).fill("land")).concat(new Array(5).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(7).fill("land")).concat(new Array(2).fill("water")).concat(new Array(22).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(18).fill("water")),
    // Row 16
    new Array(18).fill("water").concat(new Array(14).fill("land")).concat(new Array(28).fill("water")).concat(new Array(3).fill("land")).concat(new Array(8).fill("water")).concat(new Array(29).fill("land")).concat(new Array(2).fill("water")).concat(new Array(3).fill("land")).concat(new Array(19).fill("water")),
    // Row 17
    new Array(19).fill("water").concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(10).fill("land")).concat(new Array(25).fill("water")).concat(new Array(9).fill("land")).concat(new Array(1).fill("water")).concat(new Array(9).fill("land")).concat(new Array(1).fill("water")).concat(new Array(24).fill("land")).concat(new Array(24).fill("water")),
    // Row 18
    new Array(20).fill("water").concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(4).fill("land")).concat(new Array(4).fill("water")).concat(new Array(1).fill("land")).concat(new Array(23).fill("water")).concat(new Array(16).fill("land")).concat(new Array(1).fill("water")).concat(new Array(4).fill("land")).concat(new Array(2).fill("water")).concat(new Array(22).fill("land")).concat(new Array(25).fill("water")),
    // Row 19
    new Array(21).fill("water").concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(27).fill("water")).concat(new Array(18).fill("land")).concat(new Array(1).fill("water")).concat(new Array(6).fill("land")).concat(new Array(3).fill("water")).concat(new Array(16).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(24).fill("water")),
    // Row 20
    new Array(23).fill("water").concat(new Array(3).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(4).fill("water")).concat(new Array(3).fill("land")).concat(new Array(16).fill("water")).concat(new Array(19).fill("land")).concat(new Array(2).fill("water")).concat(new Array(5).fill("land")).concat(new Array(4).fill("water")).concat(new Array(5).fill("land")).concat(new Array(3).fill("water")).concat(new Array(4).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(28).fill("water")),
    // Row 21
    new Array(25).fill("water").concat(new Array(5).fill("land")).concat(new Array(22).fill("water")).concat(new Array(20).fill("land")).concat(new Array(1).fill("water")).concat(new Array(3).fill("land")).concat(new Array(7).fill("water")).concat(new Array(4).fill("land")).concat(new Array(3).fill("water")).concat(new Array(5).fill("land")).concat(new Array(29).fill("water")),
    // Row 22
    new Array(28).fill("water").concat(new Array(2).fill("land")).concat(new Array(3).fill("water")).concat(new Array(1).fill("land")).concat(new Array(19).fill("water")).concat(new Array(20).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(7).fill("water")).concat(new Array(3).fill("land")).concat(new Array(5).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(2).fill("land")).concat(new Array(4).fill("water")).concat(new Array(2).fill("land")).concat(new Array(23).fill("water")),
    // Row 23
    new Array(30).fill("water").concat(new Array(8).fill("land")).concat(new Array(16).fill("water")).concat(new Array(22).fill("land")).concat(new Array(8).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(4).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(5).fill("water")).concat(new Array(2).fill("land")).concat(new Array(23).fill("water")),
    // Row 24
    new Array(32).fill("water").concat(new Array(8).fill("land")).concat(new Array(20).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(13).fill("land")).concat(new Array(15).fill("water")).concat(new Array(3).fill("land")).concat(new Array(3).fill("water")).concat(new Array(2).fill("land")).concat(new Array(26).fill("water")),
    // Row 25
    new Array(31).fill("water").concat(new Array(11).fill("land")).concat(new Array(19).fill("water")).concat(new Array(12).fill("land")).concat(new Array(20).fill("water")).concat(new Array(2).fill("land")).concat(new Array(2).fill("water")).concat(new Array(7).fill("land")).concat(new Array(20).fill("water")),
    // Row 26
    new Array(30).fill("water").concat(new Array(14).fill("land")).concat(new Array(18).fill("water")).concat(new Array(10).fill("land")).concat(new Array(22).fill("water")).concat(new Array(2).fill("land")).concat(new Array(2).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(2).fill("land")).concat(new Array(1).fill("water")).concat(new Array(6).fill("land")).concat(new Array(15).fill("water")),
    // Row 27
    new Array(31).fill("water").concat(new Array(15).fill("land")).concat(new Array(17).fill("water")).concat(new Array(9).fill("land")).concat(new Array(24).fill("water")).concat(new Array(3).fill("land")).concat(new Array(5).fill("water")).concat(new Array(1).fill("land")).concat(new Array(1).fill("water")).concat(new Array(4).fill("land")).concat(new Array(14).fill("water")),
    // Row 28
    new Array(32).fill("water").concat(new Array(14).fill("land")).concat(new Array(17).fill("water")).concat(new Array(9).fill("land")).concat(new Array(32).fill("water")).concat(new Array(2).fill("land")).concat(new Array(1).fill("water")).concat(new Array(1).fill("land")).concat(new Array(16).fill("water")),
    // Row 29
    new Array(32).fill("water").concat(new Array(13).fill("land")).concat(new Array(17).fill("water")).concat(new Array(10).fill("land")).concat(new Array(2).fill("water")).concat(new Array(2).fill("land")).concat(new Array(26).fill("water")).concat(new Array(4).fill("land")).concat(new Array(1).fill("water")).concat(new Array(2).fill("land")).concat(new Array(15).fill("water")),
    // Row 30
    new Array(34).fill("water").concat(new Array(10).fill("land")).concat(new Array(18).fill("water")).concat(new Array(9).fill("land")).concat(new Array(2).fill("water")).concat(new Array(2).fill("land")).concat(new Array(26).fill("water")).concat(new Array(9).fill("land")).concat(new Array(14).fill("water")),
    // Row 31
    new Array(34).fill("water").concat(new Array(9).fill("land")).concat(new Array(20).fill("water")).concat(new Array(8).fill("land")).concat(new Array(2).fill("water")).concat(new Array(2).fill("land")).concat(new Array(23).fill("water")).concat(new Array(14).fill("land")).concat(new Array(12).fill("water")),
    // Row 32
    new Array(34).fill("water").concat(new Array(7).fill("land")).concat(new Array(22).fill("water")).concat(new Array(7).fill("land")).concat(new Array(28).fill("water")).concat(new Array(14).fill("land")).concat(new Array(12).fill("water")),
    // Row 33
    new Array(33).fill("water").concat(new Array(8).fill("land")).concat(new Array(23).fill("water")).concat(new Array(5).fill("land")).concat(new Array(29).fill("water")).concat(new Array(13).fill("land")).concat(new Array(13).fill("water")),
    // Row 34
    new Array(33).fill("water").concat(new Array(7).fill("land")).concat(new Array(25).fill("water")).concat(new Array(2).fill("land")).concat(new Array(32).fill("water")).concat(new Array(2).fill("land")).concat(new Array(4).fill("water")).concat(new Array(6).fill("land")).concat(new Array(7).fill("water")).concat(new Array(2).fill("land")).concat(new Array(4).fill("water")),
    // Row 35
    new Array(33).fill("water").concat(new Array(5).fill("land")).concat(new Array(81).fill("water")).concat(new Array(1).fill("land")).concat(new Array(4).fill("water")),
    // Row 36
    new Array(33).fill("water").concat(new Array(3).fill("land")).concat(new Array(72).fill("water")).concat(new Array(2).fill("land")).concat(new Array(6).fill("water")).concat(new Array(2).fill("land")).concat(new Array(6).fill("water")),
    // Row 37
    new Array(33).fill("water").concat(new Array(3).fill("land")).concat(new Array(80).fill("water")).concat(new Array(1).fill("land")).concat(new Array(7).fill("water")),
    // Row 38
    new Array(32).fill("water").concat(new Array(4).fill("land")).concat(new Array(88).fill("water")),
    // Row 39
    new Array(32).fill("water").concat(new Array(3).fill("land")).concat(new Array(89).fill("water")),
    // Row 40
    new Array(34).fill("water").concat(new Array(2).fill("land")).concat(new Array(88).fill("water")),
    // Row 41
    new Array(124).fill("water"),
    // Row 42
    new Array(124).fill("water")]
const fs = require('fs')

// Map string values to numbers
const valueMap = { water: 0, land: 1, target: 2 }

const numericMapData = mapData.map(row =>
    row.map(cell => valueMap[cell] ?? 0)
)

// Write to JSON file
fs.writeFileSync(
    './src/components/WorldMap/MapData.json',
    JSON.stringify(numericMapData, null, 2)
)

console.log('MapData.json generated successfully!')