import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'boron/FadeModal';

class MockModal extends React.Component {
  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }


  render() {
    const modalHeader =
      (<div className="modal-content">
        <div className="modal-header">
          <h1>Mock Modal!</h1>
          <div
            className="modal-close"
            onClick={() => this.modal.hide()}
          >
            <i className="fa fa-times" />
          </div>
        </div>
      </div>);
    const modalStyle = {
      width: '100%',
    };
    return (
      <Modal
        ref={(c) => { this.modal = c; }}
        className="pref-modal max-modal"
        modalStyle={modalStyle}
        onHide={this.props.toggleMockModal}
      >
        <div id="perf-modal-wrapper">
          {modalHeader}
          <div>First Name: {this.props.userInfo.userFirstName}</div>
          <div>Last Name: {this.props.userInfo.userLastName}</div>
          <div>Graduating class: {this.props.userInfo.class_year}</div>
          {/* <div>num1: {this.props.userInfo.mock.num1}</div>
          <div>num2: {this.props.userInfo.mock}</div>
          <div>num3: {this.props.userInfo.mock.num2}</div> */}
        </div>
      </Modal>
    );
  }
}

MockModal.propTypes = {
  toggleMockModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default MockModal;