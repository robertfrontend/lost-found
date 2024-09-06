const Hero = () => {
    return (
      <div className="py-4 md:py-10 px-4 md:px-10 my-12  bg-base-100 border
       border-gray-100 min-h-[40vh] rounded-md
      overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* presentation */}
          <div className="text-left">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold">Boston's Lost & Found Central 🏙️🔍</h1>
              <p className="py-6">Reconnect with your lost belongings in Boston - from cherished pets to valuable items, we're here to help!</p>
              <ul className="list-none space-y-2">
                <li>🐾 Reunite lost pets with their owners</li>
                <li>🔍 Search for misplaced personal items</li>
                <li>🦸 Be a hero - report items you've found</li>
                <li>📢 Broadcast your lost item to the community</li>
                <li>💡 Get tips on preventing future losses</li>
              </ul>
            <button class="btn btn-primary w-full text-lg mt-4">Start searching</button>
            </div>
          </div>

          {/* Form */}
          <div className="flex items-center justify-center py-4 md:py-0">
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Login / Register</h2>
                <p>Enter your email to login or register</p>
                <form className="mt-4">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="input input-bordered w-full" 
                  />
                  <button className="btn btn-primary text-lg w-full mt-4">
                    Continue with Email
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}

export default Hero