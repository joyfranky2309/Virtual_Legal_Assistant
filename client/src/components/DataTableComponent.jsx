import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'datatables.net';


const MyComponent = () => {
    React.useEffect(() => {
        $(document).ready(function() {
            $('table').DataTable();
        });
    }, []);

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-12">
                    <h1>Updates</h1>
                    {/* <p>English is a globally spoken language, serving as a medium of communication, literature, and cultural exchange across diverse populations worldwide.</p> */}
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead className="custom-thead">
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Upload</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="50px" align="center">1</td>
                        <td align="center">UPLOAD A FILE TO SUMMARISE</td>
                        <td>
                            <div className="card-body p-4">
                                <form action="/submit" method="post" id="add-form" encType="multipart/form-data">
                                    <div className="mb-1">
                                        <input type="file" name="image" className="form-control form-control-lg" required />
                                    </div>
                                    <div className="mb-3 d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Upload</button>
                                    </div>
                                </form>
                            </div>
                        </td>
                        <td width="150px" align="center"><a href="/download?file=class9-english-chapter-Unit1.pdf">Download</a></td>
                    </tr>
                    {/* Repeat similar <tr> blocks for other rows, adjusting the content accordingly */}
                    {/* Example for another row: */}
                </tbody>
            </table>
        </div>
    );
};

export default MyComponent;
