

export default function Login(){

    return(
        <div class="container bg-white rounded-xl shadow-lg mt-32 ">
        <h1 className='title text-5xl font-bold text-center pt-12'>Login</h1>
        <hr></hr>
        <div className="form-body flex p-4 ml-12 md:justify-center lg:justify-center">
          <form className="grid">
            <label className="opacity-50" for="">Username</label>
            <input className="p-2 border-b-4 border-slate-300 w-96 mb-12" type="text"></input>
            <label className="opacity-50" for="">Password</label>
            <input className="p-2 border-b-4 border-slate-300 w-96 mb-6 " type="text"></input>

            <label for="" className="opacity-50 hover:underline hover:cursor-pointer">Forgot Password?</label>
            <button className="p-3 bg-gradient-to-r from-cyan-400 from-10% to-purple-500 to-90% text-white font-bold rounded-full shadow-lg my-4">Login</button>
            <text className="text-center my-6">Not a member? <span className="text-indigo-500 hover:underline hover:cursor-pointer">Signup</span></text>
          </form>
        </div>
      </div>
    )
}