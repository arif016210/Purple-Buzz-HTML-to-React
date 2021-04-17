import React from 'react';

const Partner = () => {
    return (
        <section class="bg-secondary py-3">
            <div class="container py-5">
                <h2 class="h2 text-white text-center py-5">Our Partner</h2>
                <div class="row text-center">
                    <div class="col-md-3 mb-3">
                        <div class="card partner-wap py-5">
                            <a href="w"><i class='display-1 text-white bx bxs-buildings'></i></a>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card partner-wap py-5">
                            <a href="w"><i class='display-1 bx text-white bxs-check-shield bx-lg'></i></a>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card partner-wap py-5">
                            <a href="w"><i class='display-1 text-white bx bxs-bolt-circle'></i></a>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card partner-wap py-5">
                            <a href="w"><i class='display-1 text-white bx bxs-spa'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;