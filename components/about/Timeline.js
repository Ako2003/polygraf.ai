import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Card, CardBody} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { features } from '../../constants/cards';
import HistoryIcon from '@mui/icons-material/History';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MoodIcon from '@mui/icons-material/Mood';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function BasicTimeline() {
  return (
    <Timeline position="alternate">
      {features.map((feature, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <p className='text-default-500'>{feature.oppositeText}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={feature.color}>
              {feature.icon}
            </TimelineDot>
            <TimelineConnector style={{
              backgroundColor: '#028A0F'
            }}/>
          </TimelineSeparator>
          <TimelineContent>
          <Card>
            <CardBody>
              <h1 className='lg:text-xl text-sm underline'><strong>{feature.title}</strong></h1>
              <p className='max-lg:hidden text-md text-default-500'>{feature.description}</p>
            </CardBody>
          </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}