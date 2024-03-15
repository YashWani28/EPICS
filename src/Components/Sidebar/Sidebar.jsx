import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div class="sidebarparent">
            <button>
                <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f7411dd61c27283f7f1b7813a3b3820c3f4989da6326bdc467ab7a9099e5a03?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                    class="img"
                />
            </button>

            <div className="y_iconbtns">
                <div class="div-2">
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c591a25cb3b38399d7ad07b8bfda73c6dfe79fd3a9354ce2ae62d7795004957f?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-2"
                        />
                    </button>
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10acf7eddffbd7f7ab2a903022c590ec7edaad55af936bb0bd10b1560d9f2e23?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-3"
                        />
                    </button>
                    <button >
                        <Link to='/myjournal'>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/418e4434203add8266d0ddb1b92dbf30b1bd3fb5c46d97f5874f75224021f7d3?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                class="img-4"
                            />
                        </Link>
                    </button>
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37715aa102a1bdb79f76be200e79c17c9775082c87572fd45aff86785ba69649?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-5"
                        />
                    </button>
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6855d14c2b77a5dffc7201d7575ec94430761c9526991f612f3a5b516b7cf4?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-6"
                        />
                    </button>
                </div>
                <div class="div-3">
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78563082a9a00f44d7a8875f9ebe15388ff427749f3aa4d59b9f73cc772ba298?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-7"
                        />
                    </button>
                    <button>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bad6a0b6b3ae7a983db62fc49dd542ac24f75e9027b8329a8b12b4f6b637a827?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img-8"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
