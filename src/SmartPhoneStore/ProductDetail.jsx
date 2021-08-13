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
                <h3 className="text-center text-info" style={{margin: "20px"}}> Thông Tin Kĩ Thuật Số</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="text-center text-danger mb-2">{name}</h4>
                        <img src={img}  className="card-img-top" />
                    </div>

                    <div className="col-md-8" style={{padding: "30px"}}>
                        <div className="table">
                            <thead>
                                <tr colSpan="2">
                                    <th className="text-center mb-2">Thông Số Kỹ Thuật</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Màn hình</b></td>
                                    <td>{screen}</td>
                                </tr>
                                <tr>
                                    <td><b>Hệ điều hành</b></td>
                                    <td>{os}</td>
                                </tr>
                                <tr>
                                    <td><b>Camera Trước</b></td>
                                    <td>{frontCamera}</td>
                                </tr>
                                <tr>
                                    <td><b>Camera Sau</b></td>
                                    <td>{backCamera}</td>
                                </tr>
                                <tr>
                                    <td><b>RAM</b></td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td><b>ROM</b></td>
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