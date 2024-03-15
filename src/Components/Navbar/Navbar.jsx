import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="navbarparent">
                <div className="navbardiv-2">
                    <div className="navbardiv-3">
                        <div className="navbardiv-4">
                            Hi, {props.firstname+" "} 
                            <span style={{ color: 'rgba(255, 109, 41, 1)' }}>{props.lastname}</span>
                        </div>
                        <div className="navbardiv-5">Journals are a good way to organize your thoughts</div>
                    </div>
                    <div className="navbardiv-6">
                        <div className="navbardiv-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c83d179f62e64c295380f956de857d82f835320960bae82ba123d1a0930c21db?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                className="img"
                                alt="Image 1"
                            />
                        </div>
                        <div className="navbardiv-8">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a125ac4bb0cc36ec50037c9abd533acdfc3786166ea352b25d0c8283f9f49b89?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                className="img"
                                alt="Image 2"
                            />
                        </div>
                        <div className="navbardiv-9">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c28b3dac90ba44d61bd7effcbcbd960f5bdd7b98c8bd6e71d9721eb086088b86?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                className="img-2"
                                alt="Image 3"
                            />
                        </div>
                    </div>
                </div>
                <div className="navbardiv-10">
                    <div className="navbardiv-11">Your Journals</div>
                    <div className="navbardiv-12"></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
