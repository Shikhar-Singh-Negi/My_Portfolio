import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../data/data.json';

const Experience = () => {
    const { experiences } = data.data;

    return (
        <section className="px-2" id="experience">
            <div className="container project-div">
                <div className="title">
                    <p>Work Experience</p>
                </div>
                <div className="mt-5">
                    <VerticalTimeline lineColor="#7364d0">
                        {experiences.map((exp, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#282833', color: '#fff', borderTop: '4px solid #7364d0' }}
                                contentArrowStyle={{ borderRight: '7px solid #282833' }}
                                date={exp.date}
                                iconStyle={{ background: '#7364d0', color: '#fff' }}
                                icon={exp.icon === 'work' ? <i className="fas fa-briefcase" /> : <i className="fas fa-graduation-cap" />}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ fontFamily: 'koff-bold' }}>{exp.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle" style={{ color: '#7364d0', marginTop: '5px' }}>{exp.company}</h5>
                                <div style={{ color: '#a2a1a6', fontSize: '16px', marginTop: '10px' }}>
                                    {Array.isArray(exp.description) ? (
                                        exp.description.map((line, i) => (
                                            <p key={i} style={{ marginBottom: '5px' }}>{line}</p>
                                        ))
                                    ) : (
                                        <p>{exp.description}</p>
                                    )}
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Experience;
