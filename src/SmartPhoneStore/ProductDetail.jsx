import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {

        // Destructoring: Receive props data from Parents Component
        // info will be an small objects of parents objects in array
        // info = objects, infor {backCamera, os, screen, frontCamera}

        const {name, img, info, ram, rom } = this.props.productDetail;
        const {backCamera, frontCamera, os, screen} = info;


        // JSX function
        return (
            <div className="mt-5">
                <h3 className="text-center" style={{margin: "20px"}}> Product Detail</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="text-center mb-2">{name}</h4>
                        <img src={img} className="card-img-top" />;
                    </div>

                    <div className="col-md-8">
                        <div className="table">
                            <thead>
                                <tr colSpan="2">
                                    <th className="text-center mb-2">Thông Số Kỹ Thuật</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{screen}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{os}</td>
                                </tr>
                                <tr>
                                    <td>Camera Trước</td>
                                    <td>{frontCamera}</td>
                                </tr>
                                <tr>
                                    <td>Camera Sau</td>
                                    <td>{backCamera}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                                
                            </tbody>
                        
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductDetail;
