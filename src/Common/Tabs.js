import React, { useState } from 'react';
import images from '../Images/images';
import '../CSS/Tabs.css';
import '../CSS/Responsive.css'
import LazyLoad from 'react-lazy-load';

const Tab = ( {tabs} ) => {
    const {constIdea, tabsData} = tabs;
    const [activeTab, setActiveTab] = useState(0);
    console.log(tabsData[activeTab].images)

    const handleTabChange = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className="tab-container">
        <div className={`tab-buttons ${constIdea ? 'portfolioTab' : 'mainTab'}`}>
          {tabsData.map((tab, index) => (
            <React.Fragment>
              <button
              key={index}
              className={activeTab === index ? 'active' : 'tab_btn'}
              onClick={() => handleTabChange(index)}
              >
                  {
                    tab.tabTitle
                  }
              </button>
              <span className={`${tabsData.length-1 === index ? 'last' : 'btn_border'}`}></span>
            </React.Fragment>
          ))}
        </div>

        {constIdea && <div className="tabconstIdea" style={{margin: '12rem 0rem'}}>{constIdea()}</div>}
        {
          constIdea && <div className="tab-content">
                {tabsData[activeTab].categories.map((category, index) => (
                  <LazyLoad className='lazyload'>
                    <img className={'portfolio_images'} key={index} src={images[category]} alt={tabsData[activeTab].tabTitle} style={{width: `${tabsData[activeTab].width}`}}/>
                  </LazyLoad>
                ))}
          </div>
        }
         
        {constIdea || 
          <div className="tab-content right">
              {tabsData[activeTab].categories.map((category, index) => (
                <span style={{fontSize: `${tabsData[activeTab].width}`, marginRight: '2rem', 
                      borderLeft: '1px solid #FF4137', marginBottom: '1.9rem', paddingLeft: '1rem'}}
                >
                  {category}
                </span>
              ))}
        </div>
        }
      </div>
    );
};

export default Tab;