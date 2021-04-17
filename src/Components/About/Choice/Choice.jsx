import React from 'react';
import work from '../../../assets/img/work.svg';


const Choice = () => {
    return (
        <section class="why-us banner-bg bg-light">
            <div class="container my-4">
                <div class="row">
                    <div class="banner-img col-lg-5">
                        <img src={work} class="rounded img-fluid" alt="" />
                    </div>
                    <div class="banner-content col-lg-7 align-self-end">
                        <h2 class="h2 pb-3">Why you choose us?</h2>
                        <p class="text-muted pb-5 light-300">
                            You are allowed to download and use this Purple Buzz template for your websites. You are <strong>not allowed</strong> to re-distribute this template ZIP file on other template websites. It is quite easy to simply copy and repost the ZIP file on any <a rel="nofollow" href="www" target="_blank" >Free CSS collection</a> websites.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choice;