import { Checkbox } from '@chakra-ui/react';
import React, { Component } from 'react';

class TermsAndConditions extends Component {
  state = {
    accepted: false,
  };
  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      accepted: !prevState.accepted,
    }));
  };
  handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const paddingToBottom = 20;
    if (scrollHeight - scrollTop <= clientHeight + paddingToBottom) {
      this.setState({
        accepted: true,
      });
    }
  };

  render() {
    const { accepted } = this.state;
    const buttonStyle = accepted
      ? { ...styles.button, ...styles.alignButton }
      : {
          ...styles.button,
          ...styles.alignButton,
          backgroundColor: '#999',
          cursor: 'not-allowed',
        };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Terms and conditions</h1>
        <div
          style={{
            ...styles.tcContainer,
            overflowX: 'auto',
          }}
          onScroll={this.handleScroll}
          className="scroll-container"
        >
		<div style={{ overflowX: 'auto' }}>
          <p style={styles.tcP}>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern GEstateâ€™s relationship with you in
            relation to this website. If you disagree with any part of these
            terms and conditions, please do not use our website.
          </p>
          <p style={styles.tcP}>
            The term â€˜GEstateâ€™ or â€˜usâ€™ or â€˜weâ€™ refers to the owner of
            the website whose registered office is India. Our company
            registration number is AXBY9315ZNN2XO. The term â€˜youâ€™ refers to the user or viewer of our
            website.
          </p>
		  
		  <p style={styles.tcP}>
            BY ACCEPTING THESE TERMS, BY CLICKING A BOX OR BUTTON INDICATING ACCEPTANCE </p>
          <p style={styles.tcP}>         
            1. PLATFORM.
            Subject to the terms and conditions of these Terms, Crowdbotics grants you during the Term (defined below) a limited, non-exclusive, non-transferable, non-sublicenseable right to access and use the Crowdbotics website, software development platform, engineering workforce and module library (collectively, the â€œPlatformâ€) for the purpose of managing, hosting, developing, launching, and analyzing your proprietary software applications (â€œAppsâ€).
          </p>
          <p style={styles.tcP}>
			2. PROFESSIONAL SERVICES.
			Subject to the terms and conditions of these Terms, Crowdbotics will perform the professional engineering, design, or product management services set forth on an Order Form or as otherwise requested through the Platform, which may include managed use of the Platform by Crowdbotics on your behalf (â€œServicesâ€).  The manner and means by which Crowdbotics chooses to complete the Services are in Crowdboticsâ€™ sole discretion and control. Crowdboticsâ€™ obligations to provide the Services are conditioned upon receiving such information and cooperation from you as may be reasonably necessary to perform the Services.
          </p>
          <p style={styles.tcP}>
			3. RESTRICTIONS.
			The rights granted to you in these Terms are subject to the following restrictions: (a) you may not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Platform, whether in whole or in part, or any content displayed on the Platform; (b) you may not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Platform; and (c) except as expressly stated herein, no part of the Platform may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.  Unless otherwise indicated, any future release, update, or other addition to functionality of the Platform is subject to these Terms.  Unless otherwise specified on the Platform, all copyright and other proprietary notices on the Platform (or on any content displayed on the Platform) must be retained on all copies thereof.
          </p>
          <p style={styles.tcP}>
			4. YOUR RESPONSIBILITIES.
    		You will (a) be responsible for your authorized usersâ€™ (â€œUsersâ€) compliance with these Terms and Order Forms, (b) be responsible for the accuracy, quality and legality of User Content (defined below), (c) be responsible for your use of your Apps (including any Invention and any Prior Invention or Reusable Module (each defined below) incorporated into an Invention) and the interoperation of your App with any third party application, (d) use commercially reasonable efforts to prevent unauthorized access to or use of Platform, and notify Crowdbotics promptly of any such unauthorized access or use, and (e) use the Platform and Services only in accordance with these Terms and applicable laws and government regulations. Any use of the Platform in breach of the foregoing by you or Users that in Crowdboticsâ€™ judgment threatens the security, integrity or availability of Crowdboticsâ€™ services, may result in Crowdboticsâ€™ immediate suspension of the Platform, however Crowdbotics will use commercially reasonable efforts under the circumstances to provide you with notice and an opportunity to remedy such violation or threat prior to any such suspension.
          </p>
  		  <p style={styles.tcP}>
   		    5. ACCOUNTS.
    		a. Registration. In order to use certain features of the Platform, you must register for an account (â€œAccountâ€) and provide certain information about yourself as prompted by the account registration form.  You represent and warrant that: (i) all required registration information you submit is truthful and accurate; (ii) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Platform.  Crowdbotics may suspend or terminate your Account in accordance with Section 9.
    		b. Responsibilities. You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account.  You agree to immediately notify Crowdbotics of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security.  Crowdbotics cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
   		  </p>
  		  <p style={styles.tcP}>
    		6. USER CONTENT.
    		â€œUser Contentâ€ means any and all information and content that you submit to the Platform (e.g., Materials (defined below) that you submit to the Platform).  You are solely responsible for your User Content.  You assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure of your User Content that personally identifies you or any third party.  You represent and warrant that your User Content does not violate Crowdboticsâ€™ Acceptable Use Policy (set forth below).  You may not represent or imply to others that your User Content is in any way provided, sponsored or endorsed by Crowdbotics.  Because you alone are responsible for your User Content, you may expose yourself to liability if, for example, your User Content violates the Acceptable Use Policy.
		  </p>
  		  <p style={styles.tcP}>
    		7. OWNERSHIP.
    		a. Platform. Crowdbotics retains all rights in the Platform, except as expressly set forth in these Terms.
   		    b. Apps. You own your Apps, subject to the terms and conditions of these Terms.
    		c. Inventions.  All rights in and to any copyrightable software, algorithm, code, material, notes, records, drawings, designs, inventions, improvements, developments, discoveries and trade secrets (â€œMaterialsâ€) conceived, discovered, authored, invented, developed or reduced to practice by Crowdbotics, solely or in collaboration with others, during the Term and arising out of, or in connection with, performing the Services under these Terms and any copyrights, patents, trade secrets, mask work rights or other intellectual property rights relating to the foregoing (collectively, but excluding Prior Inventions and Reusable Modules â€œInventionsâ€), are your sole property. Crowdbotics will promptly disclose any Invention to you in writing and will deliver and assign (or cause to be assigned) and hereby assigns fully to you all right, title and interest in and to the Inventions. Crowdbotics will reasonably assist you to further evidence, record and perfect such assignments, and to perfect, obtain, maintain, enforce and defend any rights assigned.  Notwithstanding the foregoing, Crowdbotics reserves the right to use and re-use any generalized knowledge it gains arising from the performance of Services in its business without liability to you.
          </p>
		  </div>
        </div>
          <Checkbox spacing='2rem' isChecked={this.state.accepted} onChange={this.handleCheckboxChange}
            colorScheme="blue" style={styles.check}>
          Accept Terms and Conditions
		  </Checkbox>
        <button
          disabled={!accepted}
          onClick={() => {
			accepted?window.location.href = '/':<p></p>
		  }}
          style={buttonStyle}
        >
          <span style={styles.buttonLabel}>Accept</span>
        </button>
      </div>
    );
  }
}

const styles = {
	check:{
		
	},
	container: {
	  marginTop: 20,
	  marginLeft: 10,
	  marginRight: 10,
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'flex-start',
	},
	title: {
	  fontSize: 22,
	  textAlign: 'center',
	},
	tcP: {
	  marginTop: 10,
	  marginBottom: 10,
	  fontSize: 12,
	},
	tcL: {
	  marginLeft: 10,
	  marginTop: 10,
	  marginBottom: 10,
	  fontSize: 12,
	},
	tcContainer: {
	  marginTop: 15,
	  marginBottom: 15,
	  height: '70vh',
	  overflowY: 'auto',
	  overflowX: 'scroll',
	},
	button: {
	  backgroundColor: '#136AC7',
	  borderRadius: 5,
	  width: 'auto',
	  padding: 10,
	  display: 'flex',
	  alignSelf: 'center',
	  marginBottom: '5px',
	  cursor: 'pointer',
	},
	buttonLabel: {
	  fontSize: 14,
	  color: '#FFF',
	},
	alignButton: {
	  display: 'flex',
	  alignSelf: 'center',
	},
  };

export default TermsAndConditions;
