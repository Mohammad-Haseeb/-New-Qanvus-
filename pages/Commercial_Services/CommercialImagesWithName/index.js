import { Row, Col } from 'antd';


const CommercialImagesWithName = ({ data }) => {
    return (
        <>
            <div className="firstRowOfIcons" style={{ marginTop: "70px", fontFamily: 'GothamBold' }}>
                <Row justify="space-around" >
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} >
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["First_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["First_circular_Name"][0]["First-Line"]}<br />
                            {data["First_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} >
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Second_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Second_circular_Name"][0]["First-Line"]}<br />
                            {data["Second_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }}>
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Third_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Third_circular_Name"][0]["First-Line"]}<br />
                            {data["Third_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                </Row>
            </div>
            <div className="secondRowOfIcons" style={{ marginTop: "70px", fontFamily: 'GothamBold' }}>
                <Row justify="space-around" >
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} >
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Fourth_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Fourth_circular_Name"][0]["First-Line"]}<br />
                            {data["Fourth_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} >
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Fifth_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Fifth_circular_Name"][0]["First-Line"]}<br />
                            {data["Fifth_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }}>
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Sixth_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Six_circular_Name"][0]["First-Line"]}<br />
                            {data["Six_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }}>
                        <div className="dot">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Seventh_Circular_Image"].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover", borderRadius: "50%" }} alt="Image" />
                        </div>
                        <h1 style={{ lineHeight: "normal" }}>{data["Seventh_circular_Name"][0]["First-Line"]}<br />
                            {data["Seventh_circular_Name"][1]["Second-Line"]}</h1>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
        .dot {
            height: 110px;
            width: 110px;
            margin-bottom:20px;
            background-color: #6e328a;
            border-radius: 50%;
            display: inline-block;
          }
          @media only screen and (max-width: 767px) {
            .dot{
                margin-top:50px !important;
            }
          }
        `}</style>
        </>
    );
}

export default CommercialImagesWithName;