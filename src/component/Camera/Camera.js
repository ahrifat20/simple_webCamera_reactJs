import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import Webcam from 'react-webcam';
import imageSAlt from '../../img/placeholder.jpg';

const Camera = () => {
    const [error, setError] = useState(false);
    const [showAlt, setShowAlt] = useState(false);
    const [image, setImage] = useState('');
    const webcamRef = useRef(null);

    const capture = useCallback( () => {
          const imageSrc = webcamRef.current.getScreenshot();
          setImage(imageSrc);
    },[webcamRef]);

    const saveImage = () => {
        let base64String= image;
        let a= document.createElement("a");
        a.href= base64String;
        a.download= "WebCamImg.png";
        a.click();
    };

    const userError = () => { setError(true) };

    useEffect(() => {
        if(error) {
            alert(`Device Camera Not Working. Please Allow Use Your Camera`);
            setError(false);
            setShowAlt(true);
        }
    },[error])

    return (
        <Container>
            <h3 className="font-weight-bold text-center text-light pt-4">simple web camera with react</h3>
            <Row className="justify-content-center">
                <Col md={6}>
                    {
                     showAlt &&
                     <Alert variant='warning'>
                       Device Camera Not Working. Please Allow Use Your Camera
                    </Alert>
                    }
                    {
                    !showAlt ?
                    <Webcam
                        screenshotFormat="image/png"
                        onUserMediaError={userError}
                        audio={false}
                        ref={webcamRef}
                        className="video"
                    />
                    :
                     <img width="100%" height="400px" src={imageSAlt} alt="captureImage"/>
                    }
                    {
                     !error && !showAlt &&
                     <Button variant="primary" onClick={capture} block>Capture Image</Button>
                    }
                </Col>
                {
                 image &&
                 <Col md={6}>
                    <img width="100%" height="auto" src={image} alt="captureImage"/>
                    <Button variant="primary" className="mt-1" onClick={saveImage} block>Save Image</Button>  
                </Col>
                }
            </Row>
        </Container>
    );
};

export default Camera;