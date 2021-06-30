import React, { useState } from 'react';
import Modal from 'react-modal';
import './StockDetail.css'



const StockDetail = (props) => {
    const [show, setShow] = useState(false);
    const style={
        backgroundColor:"#fffee5"
    }
    const{charge1,oiLakh1,oiLakh2,ltp1,strike,iv,ltp2,charge2,id}=props.data;
    const handleClick=(id)=>{
        console.log("id",id)
    }
    const customStyles = {
        content : {
          backgroundColor:"#ffffff"
        }
      };

        const [modalIsOpen,setIsOpen] = useState(false);
        function openModal() {
        setIsOpen(true);
        console.log('start')
        }
        function closeModal(){
        setIsOpen(false);
        }

    return (
        <div className="smallContainers ">
            <div className='boxContent'>{charge1}</div>
            <div className='boxContent2'>
                {oiLakh1} <button type="button">B</button>
                 <button type="button">S</button> 
                <button style={{cursor:"pointer"}} onClick={openModal}  type="button">  &#8595; </button> 
                {setIsOpen &&<div id="modals">
                   <Modal id="modalBOX"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                        <h2>Details show</h2>
                    <div className="openBox">
                    <div>
                    Open <br/>  0
                    </div>
                    <div>
                    High <br/> 0
                    </div>
                    <div>
                    Low <br/> 0
                    </div>
                    <div>
                    close <br/>1315.75
                    </div>
                    </div>

                    <div>
                        <div className="openBox ">
                        <h5>Bids	Orders Qty</h5>
                        <h5>Bids	Orders Qty</h5>
                        </div>
                    <div className="openBox">
                        <div className="openBox verticalLine">
                            <p>0</p>
                            <p>0</p>
                            <p>0</p>
                        </div>
                        <div className="openBox">
                            
                        </div>
                        <div className="openBox">
                            <p>0</p>
                            <p>0</p>
                            <p>0</p>
                        </div>

                    </div>
                    
                    </div>
                    </Modal>
                   </div>}
            </div>
                  
           
            <div className='boxContent2'>
                {ltp1}
            </div>
            <div className='boxContent3'>
                {strike}
            </div>
            <div className='boxContent3'>
                {iv}
            </div>
            <div className='boxContent2'>
                {ltp2}
            </div>
            <div className='boxContent2'>
                <button type="button">B</button> 
                <button type="button">S</button> 
                <button style={{cursor:"pointer"}} onClick={openModal}  type="button">  &#8595; </button> {oiLakh2} 
            </div>
            <div className='boxContent'>
                {charge2}
            </div>
        </div>
    );
};

export default StockDetail;