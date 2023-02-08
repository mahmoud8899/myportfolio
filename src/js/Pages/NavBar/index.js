
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const TheNavBar = () => {

  const [css, setCss] = useState({
    menubar: 'menu-btn',
    hidden: 'hidden'
  })

  const Change = () => {
    if (css.menubar === 'menu-btn') {
      setCss({
        ...css,
        menubar: 'menu-btn open',
        hidden: 'hidden open'
      })
    } else {
      setCss({
        ...css,
        menubar: 'menu-btn',
        hidden: 'hidden'
      })
    }
  }
  return (
    <Container fluid>
      <Row className='justify-content-center Background align-items'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className='flex align-items space-between'>
            <h1 className='Letter Title cursor fontFamily text-transform'>Mahmoud almadhoun</h1>

            <div className={css.menubar} onClick={Change}>
              <div className="menu-btn__burger"></div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5}>
          <div className={css.hidden}>
            <ul>
              <li >
                <a  className='des-weight des  descolor NavBarTrasition list-style' 
                href='#home' >home</a>
              </li>
              <li >
              <a 
              className='des-weight des   descolor NavBarTrasition list-style'
              href='#about'>about</a>
                </li>
              <li >
              <a 
              className='des-weight des   descolor NavBarTrasition list-style'
               href='#work'>work</a>
                </li>
              <li>
              <a
               className='des-weight des   descolor NavBarTrasition list-style'
               href='#work'>skils</a>
                </li>
              <li >
              <a 
              className='des-weight des   descolor NavBarTrasition list-style'
              href='#testimonials'>testimonials</a>
                </li>
              <li >
              <a 
              className='des-weight des   descolor NavBarTrasition list-style'
              href='#testimonials'>contact</a>
                </li>
            </ul>

          </div>




        </Col>
      </Row>
    </Container>
  );
}

export default TheNavBar;

