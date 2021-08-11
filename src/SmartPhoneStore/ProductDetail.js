import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        return (
            <div className="mt-5">
                <h3>Product Detail</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h4>Phone</h4>
                        <img src="..." className="card-img-top" />;
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
                                    <td>Hi</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>Hi</td>
                                </tr>
                                <tr>
                                    <td>Camera Trước</td>
                                    <td>h</td>
                                </tr>
                                <tr>
                                    <td>Camera Sau</td>
                                    <td>h</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>h</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>h</td>
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
