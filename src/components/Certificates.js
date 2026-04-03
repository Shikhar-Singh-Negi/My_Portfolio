import React, { useState } from 'react'
import data from '../data/data.json'

const Certificates = () => {
    const { certificates } = data.data
    const imgpath = "/images/certificates/"
    const [visibleCount, setVisibleCount] = useState(3)
    const [showAll, setShowAll] = useState(false)

    const toggleShowAll = () => {
        if (showAll) {
            setVisibleCount(3)
            setShowAll(false)
            // Scroll to certificates section when closing
            document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
        } else {
            setVisibleCount(certificates.length)
            setShowAll(true)
        }
    }

    return (
        <section className="px-2 py-5" id="certificates">
            <div className="container project-div">
                <div className="title text-center mb-5">
                    <h2 className="section-title">Certificates & Certifications</h2>
                    <p className="section-subtitle">A collection of my professional certifications and accomplishments.</p>
                </div>
                <div className="row mt-5">
                    {
                        certificates.slice(0, visibleCount).map((cert, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card h-100 certificate-card shadow-sm border-0 overflow-hidden">
                                    <div 
                                        className="certificate-img-wrapper" 
                                        style={{ height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                                        onClick={() => window.open(`${imgpath}${cert.image}`, '_blank')}
                                    >
                                        <img 
                                            src={`${imgpath}${cert.image}`} 
                                            alt={cert.name} 
                                            className="card-img-top h-100 w-100" 
                                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        />
                                        <div className="certificate-overlay d-flex flex-column align-items-center justify-content-center">
                                            <div className="preview-icon mb-2">
                                                <i className="fas fa-search-plus fa-2x text-white"></i>
                                            </div>
                                            <span className="badge bg-primary px-3 py-2 rounded-pill shadow">View Full Size</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                                        <div className="mb-2">
                                            <span className="badge bg-soft-primary mb-2" style={{ backgroundColor: 'rgba(114, 100, 208, 0.1)', color: '#7264d0', padding: '6px 12px' }}>{cert.issuer}</span>
                                            <h3 className="card-main-title h5 mb-3" style={{ fontWeight: '700', color: '#fff' }}>{cert.name}</h3>
                                        </div>
                                        <p className="card-text mt-auto mb-4" style={{ fontSize: '14px', color: '#a2a1a6' }}>
                                            <i className="far fa-calendar-alt me-2"></i> Issued in {cert.date}
                                        </p>
                                        <div className="d-flex align-items-center gap-2">
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary skill-btn w-100" style={{ background: '#7264d0', border: 'none', padding: '10px 0' }}>
                                                    Verify Online <i className="fas fa-external-link-alt ms-2"></i>
                                                </a>
                                            ) : (
                                                <button 
                                                    className="btn btn-outline-light w-100 skill-btn" 
                                                    style={{ border: '1px solid #3d3d42', color: '#a2a1a6', padding: '10px 0' }}
                                                    onClick={() => window.open(`${imgpath}${cert.image}`, '_blank')}
                                                >
                                                    <i className="fas fa-eye me-2"></i> Quick View
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                {certificates.length > 3 && (
                    <div className="text-center mt-5">
                        <button 
                            onClick={toggleShowAll} 
                            className="btn btn-lg px-5 py-3 shadow-lg"
                            style={{ 
                                background: 'linear-gradient(135deg, #7264d0, #50478a)', 
                                color: '#white', 
                                borderRadius: '30px',
                                border: 'none',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                color: '#fff'
                            }}
                        >
                            {showAll ? (
                                <>Show Less <i className="fas fa-chevron-up ms-2"></i></>
                            ) : (
                                <>View All Certificates <i className="fas fa-chevron-down ms-2"></i></>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Certificates
