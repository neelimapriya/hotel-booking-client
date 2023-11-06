

const NewsLetter = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/dDtBCxD/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai.jpg')]">
             <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
    );
};

export default NewsLetter;