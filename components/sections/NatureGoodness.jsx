import React from 'react'

const NatureGoodness = () => {
  return (
    <>
    <div className="bg-white py-16 px-4 md:px-20 relative overflow-hidden">
  <h2 className="text-green-700 text-3xl md:text-4xl font-semibold text-center mb-4 font-cursive">
    Nature’s Goodness in Every Sip!
  </h2>
  <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
    At Zussioberry, we believe in keeping it real — no <br></br> artificial flavors, no chemicals, just pure ingredients <br></br>from nature.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-20 ">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center mx-auto ">
      <div>
      <img
        src="https://m.media-amazon.com/images/I/61yJ7fdCapL._UF350,350_QL80_.jpg"
        alt="Natural"
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="text-xl font-extrabold mb-2">100% Natural</h3>
      <p className="text-gray-600 max-w-xs">
        Crafted with only real <br></br>fruits and herbs — no <br></br>artificial additives,<br></br> ever.
      </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center mx-auto">
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSifLrkW8C0gY0Yt2I4Af8yMBCiqnX3yRUCGU7RU_oLozQDM60n"
        alt="Fresh"
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="text-xl font-extrabold mb-2">Super Fresh</h3>
      <p className="text-gray-600 max-w-xs">
        Prepared fresh daily<br></br> to retain nutrients and <br></br> deliver unmatched <br></br>taste.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center mx-auto">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4364/4364225.png"
        alt="Local"
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="text-xl font-extrabold mb-2">Locally Supported</h3>
      <p className="text-gray-600 max-w-xs">
        We source locally to<br></br> ensure quality,<br></br> support farmers, and<br></br> reduce our carbon <br></br>footprint.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default NatureGoodness