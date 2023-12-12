

const MyProject = () => {
    return (
        <div>
            <div className="max-w-[1280px]   mx-auto mb-24">
            <div className="md:mx-24  mb-8 md:my-16 lg:mx-0  ">
                    <h1 className="md:text-6xl   lg:text-6xl text-5xl lg:text-center font-extrabold uppercase">My Project</h1>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            InfinityEvents

                        </h2>
                        <p>It is an event management website where everything is created dynamically</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;